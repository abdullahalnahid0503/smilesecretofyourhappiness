import React, { useEffect, useState } from "react";

import { Link, NavLink, useLocation } from "react-router-dom";

import { navItems } from "@/data/navigation";
import { useLang } from "@/lib/i18n";
import { cn } from "@/lib/utils";

import NavDropdown from "@/components/layout/NavDropdown";
import MobileMenu from "@/components/layout/MobileMenu";
import LanguageToggle from "@/components/layout/LanguageToggle";
import DonateButton from "@/components/layout/DonateButton";
import ThemeToggle from "@/components/layout/ThemeToggle";

import smileLogo from "@/photos/Smile.png";

const linkClass =
  "relative inline-flex items-center px-3 py-2 text-[15px] font-semibold " +
  "text-black/75 transition-all duration-200 hover:text-black " +
  "dark:text-white/75 dark:hover:text-white " +
  "after:absolute after:left-3 after:right-3 after:-bottom-0.5 " +
  "after:h-[3px] after:w-0 after:bg-[#FDE01A] " +
  "after:transition-all after:duration-200 " +
  "hover:after:w-[calc(100%-1.5rem)]";

export default function Navbar() {
  const { t } = useLang();

  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const location = useLocation();

  /*
   * ============================================================
   * SCROLL STATE
   * ============================================================
   */

  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 12);
          ticking = false;
        });

        ticking = true;
      }
    };

    onScroll();

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  /*
   * ============================================================
   * CLOSE MOBILE MENU WHEN ROUTE CHANGES
   * ============================================================
   */

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 w-full",

        // Glass surface
        "bg-white/[0.42] backdrop-blur-2xl backdrop-saturate-150",
        "dark:bg-black/[0.38]",

        // Glass border
        "border-b border-black/[0.08]",
        "dark:border-white/[0.10]",

        // Smooth glass transition
        "transition-all duration-300 ease-out",

        // Scrolled glass state
        scrolled && [
          "bg-white/[0.58]",
          "shadow-[0_8px_30px_rgba(0,0,0,0.06)]",

          "dark:bg-black/[0.52]",
          "dark:shadow-[0_8px_30px_rgba(0,0,0,0.28)]",
        ],
      )}
    >
      {/* ========================================================
          GLASS HIGHLIGHT
          ======================================================== */}

      <div
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute inset-x-0 top-0 h-px",
          "bg-gradient-to-r from-transparent via-black/[0.12] to-transparent",
          "dark:via-white/[0.18]",
        )}
      />

      <div
        className={cn(
          "container-x relative flex w-full items-center justify-between",
          "min-h-[64px] sm:min-h-[68px] lg:min-h-[72px]",
          "gap-2 sm:gap-4",
        )}
      >
        {/* ======================================================
            BRAND
            Always English
            ====================================================== */}

        <Link
          to="/"
          className="flex min-w-0 shrink-0 items-center gap-2 sm:gap-3"
          aria-label="Smile - Secret of Your Happiness"
        >
          <img
            src={smileLogo}
            alt="Smile"
            className={cn(
              "shrink-0 rounded-full border-2 border-black object-cover",
              "dark:border-white",
              "transition-[width,height] duration-300",
              "h-9 w-9 sm:h-10 sm:w-10 lg:h-11 lg:w-11",
              scrolled && "sm:h-9 sm:w-9 lg:h-10 lg:w-10",
            )}
          />

          <span className="flex min-w-0 flex-col leading-none">
            <span
              className={cn(
                "font-heading font-black tracking-tight",
                "text-black dark:text-white",
                "text-[20px] sm:text-[22px] lg:text-2xl",
                "whitespace-nowrap",
              )}
            >
              SMILE
            </span>

            <span
              className={cn(
                "whitespace-nowrap",
                "font-sans text-[8px] font-medium italic leading-tight",
                "text-black/60 dark:text-white/60",
                "sm:text-[9px] lg:text-[10px]",
              )}
            >
              Secret of Your Happiness
            </span>
          </span>
        </Link>

        {/* ======================================================
            DESKTOP NAVIGATION
            ====================================================== */}

        <nav
          className={cn(
            "absolute left-1/2 top-1/2 hidden",
            "-translate-x-1/2 -translate-y-1/2",
            "items-center gap-0.5 xl:flex",
          )}
          aria-label="Main navigation"
        >
          {navItems.map((item) =>
            item.children ? (
              <NavDropdown key={item.key} item={item} linkClass={linkClass} />
            ) : (
              <NavLink
                key={item.key}
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) =>
                  cn(
                    linkClass,
                    isActive &&
                      "text-black dark:text-white after:w-[calc(100%-1.5rem)]",
                  )
                }
              >
                {t(item.key)}
              </NavLink>
            ),
          )}
        </nav>

        {/* ======================================================
            RIGHT-SIDE CONTROLS
            ====================================================== */}

        <div
          className={cn(
            "flex shrink-0 items-center",
            "gap-1.5 sm:gap-2 lg:gap-2.5 xl:gap-3",
          )}
        >
          <ThemeToggle />

          {/* Language Toggle */}
          <LanguageToggle className="hidden sm:inline-flex" />

          <DonateButton className="hidden md:inline-flex" />

          <MobileMenu open={mobileOpen} setOpen={setMobileOpen} />
        </div>
      </div>

      {/* ========================================================
          BOTTOM GLASS EDGE
          ======================================================== */}

      <div
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute inset-x-0 bottom-0 h-px",
          "bg-gradient-to-r from-transparent via-black/[0.10] to-transparent",
          "dark:via-white/[0.12]",
          scrolled && "via-[#FDE01A]/40",
        )}
      />
    </header>
  );
}
