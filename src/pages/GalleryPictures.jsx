import React, { useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import { ArrowLeft, ChevronDown } from "lucide-react";

import { Image } from "@/components/ui/image";
import PageHero from "@/components/common/PageHero";
import Reveal from "@/components/common/Reveal";
import Lightbox from "@/components/gallery/Lightbox";
import { pictures } from "@/data/gallery";
import { useLang } from "@/lib/i18n";
import { usePageMeta } from "@/lib/usePageMeta";

const filterKeys = [
  {
    key: "project",
    label: {
      en: "Project",
      bn: "প্রজেক্ট",
    },
  },
  {
    key: "branch",
    label: {
      en: "Branch",
      bn: "শাখা",
    },
  },
  {
    key: "year",
    label: {
      en: "Year",
      bn: "বছর",
    },
  },
  {
    key: "event",
    label: {
      en: "Event",
      bn: "ইভেন্ট",
    },
  },
];

/* -------------------------------------------------------------------------- */
/* Custom Filter Dropdown                                                     */
/* -------------------------------------------------------------------------- */

function GalleryFilterDropdown({ label, value, options, allLabel, onChange }) {
  const [open, setOpen] = useState(false);
  const [dropUp, setDropUp] = useState(false);

  const [position, setPosition] = useState({
    top: 0,
    left: 0,
    width: 0,
  });

  const wrapperRef = useRef(null);
  const triggerRef = useRef(null);
  const menuRef = useRef(null);

  const menuMaxHeight = 240;
  const optionHeight = 44;

  const selectedLabel =
    value === "all"
      ? allLabel
      : options.find((option) => String(option) === String(value)) || value;

  const updateDropdownPosition = () => {
    if (!triggerRef.current) return;

    const rect = triggerRef.current.getBoundingClientRect();

    const estimatedMenuHeight = Math.min(
      menuMaxHeight,
      (options.length + 1) * optionHeight,
    );

    const spaceBelow = window.innerHeight - rect.bottom;
    const spaceAbove = rect.top;

    const shouldOpenUp =
      spaceBelow < estimatedMenuHeight + 16 && spaceAbove > spaceBelow;

    setDropUp(shouldOpenUp);

    setPosition({
      top: shouldOpenUp
        ? Math.max(8, rect.top - estimatedMenuHeight - 8)
        : Math.min(
            window.innerHeight - estimatedMenuHeight - 8,
            rect.bottom + 8,
          ),
      left: rect.left,
      width: rect.width,
    });
  };

  const openDropdown = () => {
    updateDropdownPosition();
    setOpen((current) => !current);
  };

  useEffect(() => {
    if (!open) return;

    updateDropdownPosition();

    const handleResize = () => {
      updateDropdownPosition();
    };

    const handleScroll = () => {
      updateDropdownPosition();
    };

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    const handlePointerDown = (event) => {
      const target = event.target;

      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(target) &&
        menuRef.current &&
        !menuRef.current.contains(target)
      ) {
        setOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    window.addEventListener("scroll", handleScroll, true);

    document.addEventListener("keydown", handleEscape);

    document.addEventListener("mousedown", handlePointerDown);

    return () => {
      window.removeEventListener("resize", handleResize);

      window.removeEventListener("scroll", handleScroll, true);

      document.removeEventListener("keydown", handleEscape);

      document.removeEventListener("mousedown", handlePointerDown);
    };
  }, [open, options.length]);

  useEffect(() => {
    if (!open) return;

    const timer = requestAnimationFrame(() => {
      updateDropdownPosition();
    });

    return () => cancelAnimationFrame(timer);
  }, [open]);

  const handleSelect = (option) => {
    onChange(option);
    setOpen(false);
  };

  return (
    <div ref={wrapperRef} className="relative flex min-w-0 flex-col">
      <span
        className="
          text-xs
          font-bold
          uppercase
          tracking-wider
          text-black/60
          dark:text-white/60
        "
      >
        {label}
      </span>

      {/* ------------------------------------------------------------------ */}
      {/* Dropdown Trigger                                                    */}
      {/* ------------------------------------------------------------------ */}

      <button
        ref={triggerRef}
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={openDropdown}
        className={[
          "mt-1 flex min-h-[50px] w-full items-center",
          "justify-between gap-3",
          "border-0 border-b-2",
          "border-black/20 dark:border-white/20",
          "bg-transparent px-0 py-3",
          "text-left text-base font-medium",
          "text-black dark:text-[#f4f4f2]",
          "transition-colors duration-200",
          "hover:border-black/45",
          "dark:hover:border-white/40",
          "focus:outline-none",
          "focus-visible:outline-none",
          "focus:ring-0",
          open ? "border-b-[#FDE01A] dark:border-b-[#FDE01A]" : "",
        ].join(" ")}
      >
        <span className="min-w-0 truncate">{selectedLabel}</span>

        <ChevronDown
          aria-hidden="true"
          className={[
            "h-4 w-4 shrink-0",
            "transition-transform duration-200",
            open ? "rotate-180" : "",
          ].join(" ")}
        />
      </button>

      {/* ------------------------------------------------------------------ */}
      {/* Dropdown Menu                                                       */}
      {/* ------------------------------------------------------------------ */}

      {open &&
        createPortal(
          <div
            ref={menuRef}
            role="listbox"
            aria-label={label}
            className="
              fixed
              z-[99999]
              overflow-hidden
              rounded-2xl
              border
              border-black/15
              dark:border-white/15
              bg-white
              dark:bg-[#181920]
              text-black
              dark:text-[#f4f4f2]
              shadow-[6px_6px_0_0_#FDE01A]
              dark:shadow-[6px_6px_0_0_#FDE01A]
            "
            style={{
              top: `${position.top}px`,
              left: `${position.left}px`,
              width: `${position.width}px`,
            }}
          >
            <div
              className="
                overflow-y-auto
                overscroll-contain
              "
              style={{
                maxHeight: `${menuMaxHeight}px`,
              }}
            >
              {/* ---------------------------------------------------------- */}
              {/* ALL OPTION                                                   */}
              {/* ---------------------------------------------------------- */}

              <button
                type="button"
                role="option"
                aria-selected={value === "all"}
                onClick={() => handleSelect("all")}
                className={[
                  "flex min-h-[44px] w-full items-center",
                  "border-0 px-4 py-2.5",
                  "text-left text-sm font-medium",
                  "transition-colors duration-150",
                  "focus:outline-none",
                  "focus-visible:outline-none",
                  "focus:ring-0",

                  value === "all"
                    ? [
                        "!bg-white !text-black",
                        "dark:!bg-white dark:!text-black",
                      ].join(" ")
                    : [
                        "!bg-white !text-black",
                        "dark:!bg-[#181920] dark:!text-[#f4f4f2]",

                        /* Strong yellow hover */
                        "hover:!bg-[#FDE01A]",
                        "hover:!text-black",
                        "dark:hover:!bg-[#FDE01A]",
                        "dark:hover:!text-black",
                      ].join(" "),
                ].join(" ")}
              >
                {allLabel}
              </button>

              {/* ---------------------------------------------------------- */}
              {/* FILTER OPTIONS                                               */}
              {/* ---------------------------------------------------------- */}

              {options.map((option) => {
                const isSelected = String(option) === String(value);

                return (
                  <button
                    key={String(option)}
                    type="button"
                    role="option"
                    aria-selected={isSelected}
                    onClick={() => handleSelect(String(option))}
                    className={[
                      "flex min-h-[44px] w-full items-center",
                      "border-0 px-4 py-2.5",
                      "text-left text-sm font-medium",
                      "transition-colors duration-150",
                      "focus:outline-none",
                      "focus-visible:outline-none",
                      "focus:ring-0",

                      isSelected
                        ? [
                            "!bg-white !text-black",
                            "dark:!bg-white dark:!text-black",
                          ].join(" ")
                        : [
                            "!bg-white !text-black",
                            "dark:!bg-[#181920] dark:!text-[#f4f4f2]",

                            /*
                             * Force yellow background + black text
                             * in BOTH light and dark mode.
                             */
                            "hover:!bg-[#FDE01A]",
                            "hover:!text-black",
                            "dark:hover:!bg-[#FDE01A]",
                            "dark:hover:!text-black",
                          ].join(" "),
                    ].join(" ")}
                  >
                    {option}
                  </button>
                );
              })}
            </div>
          </div>,
          document.body,
        )}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Gallery Pictures Page                                                      */
/* -------------------------------------------------------------------------- */

export default function GalleryPictures() {
  const { t, tx } = useLang();

  const [filters, setFilters] = useState({
    project: "all",
    branch: "all",
    year: "all",
    event: "all",
  });

  const [lb, setLb] = useState(null);

  usePageMeta(t("common.pictures"));

  const options = useMemo(
    () =>
      Object.fromEntries(
        filterKeys.map(({ key }) => [
          key,
          [
            ...new Set(
              pictures
                .map((p) => p[key])
                .filter(
                  (value) =>
                    value !== undefined && value !== null && value !== "",
                ),
            ),
          ].sort((a, b) =>
            String(a).localeCompare(String(b), undefined, {
              numeric: true,
              sensitivity: "base",
            }),
          ),
        ]),
      ),
    [],
  );

  const list = pictures.filter((p) =>
    filterKeys.every(
      ({ key }) =>
        filters[key] === "all" || String(p[key]) === String(filters[key]),
    ),
  );

  const handleFilterChange = (key, value) => {
    setFilters((current) => ({
      ...current,
      [key]: value,
    }));
  };

  return (
    <>
      {/* ------------------------------------------------------------------ */}
      {/* Page Hero                                                           */}
      {/* ------------------------------------------------------------------ */}

      <PageHero eyebrow={t("nav.gallery")} title={t("common.pictures")}>
        <Link to="/gallery" className="btn-outline">
          <ArrowLeft className="h-4 w-4" />
          {t("common.backTo")} {t("nav.gallery")}
        </Link>

        <Link to="/gallery/videos" className="btn-dark">
          {t("common.videos")}
        </Link>
      </PageHero>

      {/* ------------------------------------------------------------------ */}
      {/* Gallery Section                                                     */}
      {/* ------------------------------------------------------------------ */}

      <section className="pb-20 lg:pb-28">
        <div className="container-x">
          {/* ---------------------------------------------------------------- */}
          {/* Filters                                                          */}
          {/* ---------------------------------------------------------------- */}

          <div
            className="
              grid
              gap-4
              rounded-3xl
              border-2
              border-black
              dark:border-white/15
              bg-white
              dark:bg-[#181920]
              p-5
              sm:grid-cols-2
              lg:grid-cols-4
            "
          >
            {filterKeys.map(({ key, label }) => (
              <GalleryFilterDropdown
                key={key}
                label={tx(label)}
                value={filters[key]}
                options={options[key]}
                allLabel={t("common.all")}
                onChange={(value) => handleFilterChange(key, value)}
              />
            ))}
          </div>

          {/* ---------------------------------------------------------------- */}
          {/* Empty State                                                      */}
          {/* ---------------------------------------------------------------- */}

          {list.length === 0 ? (
            <p
              className="
                mt-16
                text-center
                text-lg
                text-black/60
                dark:text-white/60
              "
            >
              {t("common.noResults")}
            </p>
          ) : (
            /* -------------------------------------------------------------- */
            /* Gallery Grid                                                    */
            /* -------------------------------------------------------------- */

            <div
              className="
                mt-10
                columns-1
                gap-4
                sm:columns-2
                lg:columns-3
                [&>*]:mb-4
              "
            >
              {list.map((p, i) => (
                <Reveal
                  key={p.id}
                  delay={(i % 3) * 0.05}
                  className="break-inside-avoid"
                >
                  <button
                    type="button"
                    onClick={() => setLb(i)}
                    className="
                      group
                      block
                      w-full
                      overflow-hidden
                      rounded-3xl
                      border-2
                      border-black
                      dark:border-white/15
                      bg-white
                      dark:bg-[#181920]
                      text-left
                      transition-all
                      duration-300
                      hover:-translate-x-0.5
                      hover:-translate-y-0.5
                      hover:shadow-[8px_8px_0_0_#FDE01A]
                      dark:hover:shadow-[8px_8px_0_0_#FDE01A]
                      focus:outline-none
                      focus-visible:outline-none
                    "
                  >
                    <Image
                      src={p.src}
                      alt={p.alt}
                      className={[
                        "w-full",
                        "object-cover",
                        "transition-transform",
                        "duration-700",
                        "group-hover:scale-105",
                        p.tall ? "aspect-[4/5]" : "aspect-[3/2]",
                      ].join(" ")}
                    />

                    <div
                      className="
                        flex
                        items-center
                        justify-between
                        gap-2
                        px-4
                        py-3
                        text-xs
                        font-semibold
                        text-black
                        dark:text-[#f4f4f2]
                      "
                    >
                      <span className="truncate">{p.project}</span>

                      <span
                        className="
                          shrink-0
                          rounded-full
                          bg-[#FDE01A]
                          px-2
                          py-0.5
                          text-black
                        "
                      >
                        {p.year}
                      </span>
                    </div>
                  </button>
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* -------------------------------------------------------------------- */}
      {/* Lightbox                                                             */}
      {/* -------------------------------------------------------------------- */}

      <Lightbox
        items={list}
        index={lb}
        onClose={() => setLb(null)}
        onIndex={setLb}
      />
    </>
  );
}
