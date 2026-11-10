import React from "react";

import { Link } from "react-router-dom";

import {
  Facebook,
  Instagram,
  Youtube,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
} from "lucide-react";

import { footerGroups } from "@/data/navigation";
import { site } from "@/data/site";
import { useLang } from "@/lib/i18n";
import smileLogo from "@/photos/Smile.png";

const socials = [
  {
    icon: Facebook,
    href: site.socials.facebook,
    label: "Facebook",
  },
  {
    icon: Instagram,
    href: site.socials.instagram,
    label: "Instagram",
  },
  {
    icon: Youtube,
    href: site.socials.youtube,
    label: "YouTube",
  },
  {
    icon: Linkedin,
    href: site.socials.linkedin,
    label: "LinkedIn",
  },
];

export default function Footer() {
  const { t, tx } = useLang();

  return (
    <footer className="relative overflow-hidden bg-black text-white">
      {/* ============================================================
TOP ACCENT
============================================================ */}{" "}
      <div className="h-1.5 w-full bg-[#FDE01A]" aria-hidden="true" />
      {/* ============================================================
      SUBTLE BACKGROUND
      ============================================================ */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute -right-32 -top-20 h-72 w-72 rounded-full bg-[#FDE01A]/[0.035] blur-3xl" />
        <div className="absolute -bottom-20 -left-32 h-72 w-72 rounded-full bg-white/[0.025] blur-3xl" />
      </div>
      {/* ============================================================
      MAIN FOOTER
      ============================================================ */}
      <div className="container-x relative py-12 sm:py-16 lg:py-20">
        {/* ==========================================================
        BRAND + CONTACT
        ========================================================== */}
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10 xl:gap-16">
          <div className="lg:col-span-4">
            {/* Brand */}
            <div className="flex items-center gap-3.5">
              <div
                className="
              flex h-14 w-14 shrink-0 items-center justify-center
              rounded-full border-2 border-white
              bg-white/[0.04] p-0.5
              shadow-[0_4px_18px_rgba(0,0,0,0.25)]
              transition-all duration-300
              hover:border-[#FDE01A]
              hover:shadow-[0_0_0_4px_rgba(253,224,26,0.08)]
            "
              >
                <img
                  src={smileLogo}
                  alt="Smile"
                  className="h-full w-full rounded-full object-cover"
                />
              </div>

              <div className="min-w-0 leading-none">
                <p className="font-heading text-3xl font-black tracking-tight">
                  SMILE
                </p>

                <p className="mt-1 text-[10px] font-medium italic tracking-wide text-white/60 sm:text-[11px]">
                  Secret of Your Happiness
                </p>
              </div>
            </div>

            {/* Description */}
            <p className="mt-6 max-w-md text-sm leading-6 text-white/60 sm:text-[15px] sm:leading-7">
              {t("footer.desc")}
            </p>

            {/* Contact */}
            <ul className="mt-7 space-y-3.5">
              {/* Address */}
              <li className="flex items-start gap-3">
                <span
                  className="
                mt-0.5 flex h-9 w-9 shrink-0 items-center
                justify-center rounded-full
                border border-white/15
                bg-white/[0.04]
              "
                >
                  <MapPin className="h-4 w-4 text-[#FDE01A]" />
                </span>

                <span className="min-w-0 pt-1 text-sm leading-6 text-white/60">
                  {tx(site.address)}
                </span>
              </li>

              {/* Email */}
              <li className="flex items-center gap-3">
                <span
                  className="
                flex h-9 w-9 shrink-0 items-center
                justify-center rounded-full
                border border-white/15
                bg-white/[0.04]
              "
                >
                  <Mail className="h-4 w-4 text-[#FDE01A]" />
                </span>

                <a
                  href={`mailto:${site.email}`}
                  className="
                min-w-0 truncate text-sm text-white/60
                transition-colors duration-200
                hover:text-white
              "
                >
                  {site.email}
                </a>
              </li>

              {/* Phone */}
              <li className="flex items-center gap-3">
                <span
                  className="
                flex h-9 w-9 shrink-0 items-center
                justify-center rounded-full
                border border-white/15
                bg-white/[0.04]
              "
                >
                  <Phone className="h-4 w-4 text-[#FDE01A]" />
                </span>

                <a
                  href="tel:+8801000000000"
                  className="
                text-sm text-white/60
                transition-colors duration-200
                hover:text-white
              "
                >
                  {site.phone}
                </a>
              </li>
            </ul>
          </div>

          {/* ========================================================
          MOBILE / TABLET NAVIGATION
          Mobile:
          Quick Links | Get Involved
          About      | Connect

          Desktop:
          Normal 3-column navigation + Connect
          ======================================================== */}
          <div
            className="
          grid grid-cols-2 gap-x-8 gap-y-10
          lg:col-span-8
          lg:grid-cols-4
          lg:gap-8
          xl:gap-10
        "
          >
            {/* ======================================================
            FOOTER GROUPS
            ====================================================== */}
            {footerGroups.map((group) => (
              <nav
                key={group.title}
                aria-label={t(group.title)}
                className="min-w-0"
              >
                <h3
                  className="
                mb-4 text-[10px] font-bold uppercase
                tracking-[0.2em] text-[#FDE01A]
                sm:text-[11px]
              "
                >
                  {t(group.title)}
                </h3>

                <ul className="space-y-3">
                  {group.links.map((link) => (
                    <li key={link.to}>
                      <Link
                        to={link.to}
                        className="
                      group inline-flex max-w-full
                      items-center gap-1.5
                      text-[13px] leading-5
                      text-white/60
                      transition-all duration-200
                      hover:translate-x-0.5
                      hover:text-white
                      sm:text-sm
                    "
                      >
                        <span className="truncate">{t(link.key)}</span>

                        <ArrowUpRight
                          className="
                        h-3 w-3 shrink-0
                        opacity-0
                        -translate-x-1
                        transition-all duration-200
                        group-hover:translate-x-0
                        group-hover:opacity-60
                      "
                        />
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}

            {/* ======================================================
            CONNECT
            ====================================================== */}
            <div className="min-w-0">
              <h3
                className="
              mb-4 text-[10px] font-bold uppercase
              tracking-[0.2em] text-[#FDE01A]
              sm:text-[11px]
            "
              >
                {t("footer.connect")}
              </h3>

              <p className="mb-5 text-[13px] leading-6 text-white/50 sm:text-sm">
                Stay connected with Smile and follow our latest activities.
              </p>

              {/* ====================================================
              SOCIAL MEDIA
              Perfectly symmetrical 2 × 2 layout
              ==================================================== */}
              <div className="grid w-fit grid-cols-2 gap-4">
                {socials.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    title={label}
                    className="
                  group flex h-12 w-12
                  items-center justify-center
                  rounded-full
                  border border-white/15
                  bg-white/[0.035]
                  text-white/70
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:border-[#FDE01A]
                  hover:bg-[#FDE01A]
                  hover:text-black
                  hover:shadow-[0_6px_20px_rgba(253,224,26,0.12)]
                  active:scale-[0.94]
                "
                  >
                    <Icon
                      className="
                    h-[17px] w-[17px]
                    transition-transform duration-300
                    group-hover:scale-110
                  "
                    />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ============================================================
      BOTTOM BAR
      ============================================================ */}
      <div className="border-t border-white/[0.10]">
        <div
          className="
        container-x
        flex flex-col
        items-center
        gap-4
        py-5
        text-center
        text-xs
        text-white/40
        sm:flex-row
        sm:justify-between
        sm:py-6
        sm:text-left
      "
        >
          <p className="leading-5">{t("footer.rights")}</p>

          <div className="flex items-center gap-4 sm:gap-6">
            <Link
              to="/privacy"
              className="
            transition-colors duration-200
            hover:text-white
          "
            >
              {t("footer.privacy")}
            </Link>

            <span aria-hidden="true" className="h-3 w-px bg-white/15" />

            <Link
              to="/terms"
              className="
            transition-colors duration-200
            hover:text-white
          "
            >
              {t("footer.terms")}
            </Link>
          </div>
        </div>
      </div>
      {/* ============================================================
      BOTTOM ACCENT
      ============================================================ */}
      <div
        aria-hidden="true"
        className="
      h-px w-full
      bg-gradient-to-r
      from-transparent
      via-[#FDE01A]/40
      to-transparent
    "
      />
    </footer>
  );
}
