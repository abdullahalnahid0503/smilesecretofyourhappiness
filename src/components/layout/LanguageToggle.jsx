import React from "react";

import { useLang } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export default function LanguageToggle({ className }) {
  const { lang, setLang } = useLang();

  const isEnglish = lang === "en";
  const isBengali = lang === "bn";

  return (
    <div
      role="group"
      aria-label="Language"
      className={cn("language-toggle", className)}
    >
      {/* English */}
      <button
        type="button"
        onClick={() => setLang("en")}
        aria-pressed={isEnglish}
        className={cn(
          "language-toggle-button",
          isEnglish && "language-toggle-button-active",
        )}
      >
        EN
      </button>

      {/* Bengali */}
      <button
        type="button"
        onClick={() => setLang("bn")}
        aria-pressed={isBengali}
        className={cn(
          "language-toggle-button",
          isBengali && "language-toggle-button-active",
        )}
      >
        বাং
      </button>
    </div>
  );
}
