import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import { Image } from "@/components/ui/image";
import Reveal from "@/components/common/Reveal";
import { images } from "@/data/images";
import { skillAreas } from "@/data/programs";
import { icons } from "@/lib/icons";
import { useLang } from "@/lib/i18n";

export default function SkillSection() {
  const { t, tx } = useLang();

  return (
    <section className="py-20 lg:py-28" id="skills">
      <div className="container-x grid items-center gap-12 lg:grid-cols-12">
        {/* Image */}
        <Reveal className="order-2 lg:order-1 lg:col-span-5">
          <div className="relative">
            <div
              className="
                absolute
                -left-3
                -top-3
                h-full
                w-full
                rounded-[2rem]
                bg-[#FDE01A]
              "
              aria-hidden="true"
            />

            <div className="group relative overflow-hidden rounded-[2rem] border-2 border-black dark:border-white/15">
              <Image
                src={images.skillsWorkshop}
                alt="Hands typing during a digital skills workshop"
                className="
                  aspect-[3/2]
                  w-full
                  object-cover
                  transition-transform
                  duration-700
                  group-hover:scale-[1.025]
                "
              />
            </div>
          </div>
        </Reveal>

        {/* Content */}
        <div className="order-1 lg:order-2 lg:col-span-6 lg:col-start-7">
          <Reveal>
            <p className="eyebrow mb-4">{t("home.skills.eyebrow")}</p>
          </Reveal>

          <Reveal delay={0.05}>
            <h2
              className="
                max-w-2xl
                text-3xl
                font-extrabold
                leading-[1.05]
                sm:text-4xl
                lg:text-5xl
              "
            >
              {t("home.skills.title")}
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p
              className="
                mt-6
                max-w-xl
                text-lg
                leading-relaxed
                text-black/70
                dark:text-white/70
              "
            >
              {t("home.skills.body")}
            </p>
          </Reveal>

          {/* Skills */}
          <Reveal delay={0.15}>
            <ul
              className="
                mt-8
                grid
                grid-cols-2
                gap-2.5
                sm:grid-cols-4
                lg:grid-cols-2
                xl:grid-cols-4
              "
            >
              {skillAreas.map((a) => {
                const Icon = icons[a.icon];

                return (
                  <li
                    key={a.icon}
                    className="
                      group
                      flex
                      min-h-[52px]
                      w-full
                      items-center
                      justify-center
                      gap-2
                      rounded-full
                      border-2
                      border-black
                      bg-white
                      px-3
                      py-2.5
                      text-center
                      text-xs
                      font-semibold
                      leading-tight
                      text-black
                      transition-all
                      duration-200
                      hover:-translate-y-0.5
                      hover:bg-[#FDE01A]
                      hover:shadow-[3px_3px_0_0_#000]
                      dark:border-white/20
                      dark:bg-[#181920]
                      dark:text-[#f4f4f2]
                      dark:hover:bg-[#FDE01A]
                      dark:hover:text-black
                      dark:hover:shadow-[3px_3px_0_0_#FDE01A]
                    "
                  >
                    <Icon
                      className="
                        h-4
                        w-4
                        shrink-0
                        transition-colors
                        duration-200
                      "
                    />

                    <span className="whitespace-normal break-words">
                      {tx(a.label)}
                    </span>
                  </li>
                );
              })}
            </ul>
          </Reveal>

          {/* CTA */}
          <Reveal delay={0.2}>
            <Link
              to="/about/skill-development"
              className="
                btn-dark
                group
                mt-8
              "
            >
              {t("home.skills.cta")}

              <ArrowRight
                className="
                  h-4
                  w-4
                  transition-transform
                  duration-200
                  group-hover:translate-x-1
                "
              />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
