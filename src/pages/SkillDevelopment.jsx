import React, { useState } from "react";

import PageHero from "@/components/common/PageHero";
import SectionHeading from "@/components/common/SectionHeading";
import Reveal from "@/components/common/Reveal";
import FilterChips from "@/components/common/FilterChips";
import ProgramCard from "@/components/cards/ProgramCard";
import CTABand from "@/components/common/CTABand";

import { programs, skillAreas } from "@/data/programs";
import { images } from "@/data/images";
import { icons } from "@/lib/icons";
import { useLang } from "@/lib/i18n";
import { usePageMeta } from "@/lib/usePageMeta";

const copy = {
  en: {
    title: "Skill Development",
    sub: "Practical programs that help young people move forward - in work, leadership and life. Free or low-cost, run by volunteers and partner professionals.",
    areas: "What we cover",
    why: "Why it matters",
    whyTitle: "Talent is everywhere. Opportunity is not.",
    whyBody:
      "Many young people in Bangladesh finish school with ambition but without the practical skills employers and universities expect - or the confidence to use them. A short, well-run program can change what a young person believes is possible for them. That is why every Smile branch is asked to run at least one skill program a year.",
    programs: "Programs",
    cta: "Build Your Skills. Build Your Future.",
    ctaBody: "Applications for open programs take five minutes.",
  },

  bn: {
    title: "দক্ষতা উন্নয়ন",
    sub: "তরুণদের কাজ, নেতৃত্ব ও জীবনে এগিয়ে যেতে সহায়ক বাস্তব প্রোগ্রাম। বিনামূল্যে বা স্বল্প খরচে, স্বেচ্ছাসেবক ও অংশীদার পেশাজীবীদের পরিচালনায়।",
    areas: "আমরা যা কভার করি",
    why: "কেন গুরুত্বপূর্ণ",
    whyTitle: "প্রতিভা সবখানে। সুযোগ নয়।",
    whyBody:
      "বাংলাদেশের অনেক তরুণ উচ্চাকাঙ্ক্ষা নিয়ে স্কুল শেষ করে, কিন্তু নিয়োগদাতা ও বিশ্ববিদ্যালয়ের প্রত্যাশিত বাস্তব দক্ষতা - বা সেগুলো ব্যবহারের আত্মবিশ্বাস - ছাড়া। একটি ছোট, সুপরিচালিত প্রোগ্রাম একজন তরুণের নিজের সম্ভাবনা সম্পর্কে বিশ্বাস বদলে দিতে পারে। এজন্যই প্রতিটি Smile শাখাকে বছরে অন্তত একটি দক্ষতা প্রোগ্রাম চালাতে বলা হয়।",
    programs: "প্রোগ্রামসমূহ",
    cta: "দক্ষতা গড়ুন। ভবিষ্যৎ গড়ুন।",
    ctaBody: "চলমান প্রোগ্রামে আবেদন করতে পাঁচ মিনিট লাগে।",
  },
};

const statuses = [
  {
    value: "open",
    label: {
      en: "Open",
      bn: "চলমান",
    },
  },
  {
    value: "upcoming",
    label: {
      en: "Upcoming",
      bn: "আসছে",
    },
  },
  {
    value: "closed",
    label: {
      en: "Closed",
      bn: "বন্ধ",
    },
  },
];

export default function SkillDevelopment() {
  const { t, tx, lang } = useLang();
  const c = copy[lang] || copy.en;

  const [status, setStatus] = useState("all");

  usePageMeta(t("nav.skills"), c.sub);

  const list = programs.filter((p) => status === "all" || p.status === status);

  return (
    <>
      {/* ========================================================
          HERO
          ======================================================== */}

      <PageHero
        eyebrow={t("nav.about")}
        title={c.title}
        sub={c.sub}
        image={images.skillsWorkshop}
        imageAlt="Hands at a laptop in a workshop"
      />

      {/* ========================================================
          SKILL AREAS
          ======================================================== */}

      <section className="pb-16">
        <div className="container-x">
          <p className="eyebrow mb-6">{c.areas}</p>

          <ul className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {skillAreas.map((a, i) => {
              const Icon = icons[a.icon];

              return (
                <Reveal
                  key={a.icon}
                  delay={i * 0.04}
                  as="li"
                  className="relative"
                >
                  <div className="relative">
                    {/* ==================================================
                        SHADOW
                        Light mode = BLACK
                        Dark mode  = WHITE
                        !important is required because global CSS has:
                        .dark .bg-white { background-color: #131316; }
                        ================================================== */}

                    <div
                      className="
                        absolute
                        inset-0
                        translate-x-[4px]
                        translate-y-[4px]
                        rounded-2xl
                        !bg-black
                        dark:!bg-white
                      "
                    />

                    {/* ==================================================
                        MAIN BOX
                        ================================================== */}

                    <div
                      className="
                        relative
                        z-10
                        flex
                        items-center
                        gap-3
                        rounded-2xl
                        border-2
                        !border-black
                        !bg-white
                        px-4
                        py-3
                        font-semibold
                        !text-black
                        transition-all
                        duration-200

                        hover:-translate-y-0.5
                        hover:!bg-[#FDE01A]

                        dark:!border-white
                        dark:!bg-[#181920]
                        dark:!text-white

                        dark:hover:!bg-[#FDE01A]
                        dark:hover:!text-black
                      "
                    >
                      <Icon className="h-5 w-5 shrink-0" />

                      {tx(a.label)}
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </ul>
        </div>
      </section>

      {/* ========================================================
          WHY IT MATTERS
          ======================================================== */}

      <section className="bg-black py-20 text-white lg:py-24">
        <div className="container-x grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-5">
            <SectionHeading dark eyebrow={c.why} title={c.whyTitle} />
          </div>

          <Reveal className="lg:col-span-7">
            <p className="text-lg leading-relaxed text-white/75 lg:text-xl">
              {c.whyBody}
            </p>
          </Reveal>
        </div>
      </section>

      {/* ========================================================
          PROGRAMS
          ======================================================== */}

      <section className="py-20 lg:py-28" id="programs">
        <div className="container-x">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading eyebrow={c.programs} title={c.programs} />

            <FilterChips
              allLabel={t("common.all")}
              value={status}
              onChange={setStatus}
              options={statuses.map((s) => ({
                value: s.value,
                label: tx(s.label),
              }))}
            />
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {list.map((p, i) => (
              <Reveal key={p.id} delay={(i % 3) * 0.06} className="h-full">
                <ProgramCard program={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          CTA
          Light mode → Yellow background + Black text
          Dark mode  → White background + Black text
          ======================================================== */}

      <CTABand
        variant="skill"
        title={c.cta}
        body={c.ctaBody}
        primary={{
          to: "/connect/volunteer",
          label: t("common.applyNow"),
        }}
        secondary={{
          to: "/contact",
          label: t("nav.contact"),
        }}
      />
    </>
  );
}
