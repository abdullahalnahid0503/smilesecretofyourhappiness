import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Image } from "@/components/ui/image";
import { useLang } from "@/lib/i18n";
import heroImage from "@/photos/hero.jpg";

const up = {
  hidden: { opacity: 0, y: 40 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: 0.1 + i * 0.12,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export default function Hero() {
  const { t } = useLang();

  return (
    <section className="relative overflow-hidden bg-white">
      <div className="container-x grid min-h-[calc(100vh-5rem)] items-center gap-10 py-14 lg:grid-cols-12 lg:gap-6 lg:py-0">
        <div className="lg:col-span-7 lg:pr-10">
          <motion.p
            variants={up}
            initial="hidden"
            animate="show"
            custom={0}
            className="eyebrow mb-6"
          >
            {t("hero.badge")}
          </motion.p>

          <h1 className="font-heading text-[2.9rem] font-black leading-[0.98] tracking-tight sm:text-6xl lg:text-7xl xl:text-[5.4rem]">
            <motion.span
              variants={up}
              initial="hidden"
              animate="show"
              custom={1}
              className="block"
            >
              {t("hero.title1")}
            </motion.span>

            <motion.span
              variants={up}
              initial="hidden"
              animate="show"
              custom={2}
              className="relative mt-1 block"
            >
              <span className="relative z-10">{t("hero.title2")}</span>

              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{
                  duration: 0.7,
                  delay: 0.9,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="absolute bottom-[0.08em] left-0 -z-0 h-[0.2em] w-[min(100%,14ch)] origin-left -skew-x-[20deg] bg-[#FDE01A] dark:bottom-0 dark:h-[0.12em] dark:rounded-full"
                aria-hidden="true"
              />
            </motion.span>
          </h1>

          <motion.p
            variants={up}
            initial="hidden"
            animate="show"
            custom={3}
            className="mt-8 max-w-xl text-lg leading-relaxed text-black/70 lg:text-xl"
          >
            {t("hero.sub")}
          </motion.p>

          <motion.div
            variants={up}
            initial="hidden"
            animate="show"
            custom={4}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Link
              to="/connect/volunteer"
              className="btn-primary btn-pulse text-base"
            >
              {t("hero.cta1")}
              <ArrowRight className="h-4 w-4" />
            </Link>

            <Link to="/donate" className="btn-outline text-base">
              {t("hero.cta2")}
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.9,
            delay: 0.3,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative lg:col-span-5"
        >
          <div
            className="absolute -bottom-4 -right-4 h-full w-full rounded-[2rem] bg-black dark:bg-[#f4f4f2]"
            aria-hidden="true"
          />

          <div
            className="absolute -left-4 -top-4 h-24 w-24 rounded-full bg-[#FDE01A] lg:h-32 lg:w-32"
            aria-hidden="true"
          />

          <motion.div
            initial={{ scale: 1.05 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.4 }}
            className="relative overflow-hidden rounded-[2rem] border-2 border-black"
          >
            <Image
              src={heroImage}
              alt="Young volunteers working together in a community"
              className="aspect-[4/5] w-full object-cover"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
