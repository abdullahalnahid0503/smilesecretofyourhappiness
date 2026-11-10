import React from "react";
import Reveal from "@/components/common/Reveal";
import { cn } from "@/lib/utils";

export default function SectionHeading({
  eyebrow,
  title,
  sub,
  dark = false,
  center = false,
  className,
}) {
  return (
    <Reveal
      className={cn("max-w-3xl", center && "mx-auto text-center", className)}
    >
      {eyebrow && (
        <p className={cn("eyebrow mb-4", dark && "text-white")}>{eyebrow}</p>
      )}
      <h2
        className={cn(
          "text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-[1.05]",
          dark ? "text-white" : "text-black",
        )}
      >
        {title}
      </h2>
      {sub && (
        <p
          className={cn(
            "mt-5 text-lg leading-relaxed",
            dark ? "text-white/70" : "text-black/65",
          )}
        >
          {sub}
        </p>
      )}
    </Reveal>
  );
}
