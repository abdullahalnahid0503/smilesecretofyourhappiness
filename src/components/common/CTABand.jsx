import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/common/Reveal";
import { cn } from "@/lib/utils";

// variant: 'yellow' | 'black' | 'white'
export default function CTABand({
  title,
  body,
  primary,
  secondary,
  variant = "yellow",
}) {
  const styles = {
    yellow: {
      wrap: "bg-[#FDE01A] text-black",
      p: "btn-dark",
      s: "btn-outline",
      body: "text-black/75",
    },
    black: {
      wrap: "bg-black text-white",
      p: "btn-primary",
      s: "btn-outline-light",
      body: "text-white/70",
    },
    white: {
      wrap: "bg-white text-black border-y-2 border-black",
      p: "btn-primary",
      s: "btn-outline",
      body: "text-black/65",
    },
  }[variant];

  return (
    <section className={cn("py-20 lg:py-28", styles.wrap)}>
      <Reveal className="container-x flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-2xl">
          <h2
            className={cn(
              "text-4xl font-extrabold leading-[1.05] sm:text-5xl lg:text-6xl",
              variant === "yellow" && "!text-black",
              variant === "black" && "!text-white dark:!text-black",
              variant === "white" && "!text-black dark:!text-[#f4f4f2]",
            )}
          >
            {title}
          </h2>
          {body && (
            <p
              className={cn(
                "mt-5 max-w-2xl text-lg leading-relaxed",
                variant === "yellow" && "!text-black/75",
                variant === "black" && "!text-white dark:!text-black",
                variant === "white" && "!text-black/65 dark:!text-white/65",
              )}
            >
              {body}
            </p>
          )}
        </div>
        <div className="flex flex-wrap gap-3">
          {primary && (
            <Link to={primary.to} className={styles.p}>
              {primary.label} <ArrowRight className="h-4 w-4" />
            </Link>
          )}
          {secondary && (
            <Link to={secondary.to} className={styles.s}>
              {secondary.label}
            </Link>
          )}
        </div>
      </Reveal>
    </section>
  );
}
