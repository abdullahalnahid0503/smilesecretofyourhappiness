import React from "react";

import { Link } from "react-router-dom";
import { ArrowUpRight, Target, Eye } from "lucide-react";

import PageHero from "@/components/common/PageHero";
import SectionHeading from "@/components/common/SectionHeading";
import Reveal from "@/components/common/Reveal";
import StatsBand from "@/components/common/StatsBand";
import CTABand from "@/components/common/CTABand";

import { Image } from "@/components/ui/image";

import { site } from "@/data/site";
import { images } from "@/data/images";

import { useLang } from "@/lib/i18n";
import { usePageMeta } from "@/lib/usePageMeta";

/* ============================================================
   SMILE — About Us
   Bilingual content: English + Bangla
   Design/layout intentionally unchanged
   ============================================================ */

const copy = {
  en: {
    eyebrow: "About Us",

    title:
      "A youth-led social organization built on service, solidarity and a smile.",

    sub: "Smile-Secret of your happiness (SMILE) was established on 1 August 2018 in Ghorashal, Palash, Narsingdi. What began as a community-focused initiative has grown into a volunteer-driven organization working in social service, education, health awareness, humanitarian support and youth engagement.",

    story: "Our Story",

    storyBody:
      "SMILE was founded with a simple belief: meaningful change begins when people choose to stand beside one another. Established in Ghorashal, Palash, Narsingdi in 2018, the organization was created to bring together young and socially conscious people who want to contribute to their communities. Since then, SMILE has continued to work through volunteering, community initiatives, education, humanitarian support and creative social activities — with dignity, responsibility and a spirit of togetherness.",

    mission: "Our Mission",

    missionBody:
      "To organize and empower young people and socially conscious citizens to serve their communities through social work, education, health awareness, humanitarian action, environmental responsibility and creative initiatives.",

    vision: "Our Vision",

    visionBody:
      "A more caring and responsible society where young people actively contribute to their communities, education and social wellbeing, while no one is left without support in times of need.",

    values: "Our Values",

    believe: "What We Believe",

    believeBody:
      "We believe that service begins with responsibility toward one another. We believe young people can create meaningful change when they are organized, empowered and given the opportunity to contribute. We believe education, compassion, dignity and collective action can strengthen communities — and that sometimes, a simple smile can be the beginning of something much bigger.",

    journey: "Our Journey",

    explore: "Explore",

    impact: "Our Impact",
  },

  bn: {
    eyebrow: "আমাদের সম্পর্কে",

    title:
      "সেবা, সহমর্মিতা ও হাসিকে ভিত্তি করে গড়ে ওঠা একটি তরুণ নেতৃত্বাধীন সামাজিক সংগঠন।",

    sub: "স্মাইল-সিক্রেট অফ ইউর হ্যাপিনেস (SMILE) ১ আগস্ট ২০১৮ সালে নরসিংদী জেলার পলাশ উপজেলার ঘোড়াশালে প্রতিষ্ঠিত হয়। একটি সমাজকেন্দ্রিক উদ্যোগ হিসেবে যাত্রা শুরু করে আজ এটি স্বেচ্ছাসেবী কার্যক্রম, শিক্ষা, স্বাস্থ্য সচেতনতা, মানবিক সহায়তা ও তরুণদের সম্পৃক্ততার মাধ্যমে মানুষের পাশে কাজ করে যাচ্ছে।",

    story: "আমাদের গল্প",

    storyBody:
      "SMILE-এর যাত্রা শুরু হয় একটি সহজ বিশ্বাস থেকে—মানুষ যখন একে অপরের পাশে দাঁড়ায়, তখনই অর্থবহ পরিবর্তনের সূচনা হয়। ২০১৮ সালে নরসিংদীর পলাশ উপজেলার ঘোড়াশালে প্রতিষ্ঠিত এই সংগঠনের মূল উদ্দেশ্য ছিল তরুণ ও সমাজসচেতন মানুষদের একত্রিত করে নিজ নিজ কমিউনিটির জন্য কাজ করার সুযোগ তৈরি করা। সেই শুরু থেকে SMILE স্বেচ্ছাসেবা, সামাজিক উদ্যোগ, শিক্ষা, মানবিক সহায়তা এবং সৃজনশীল কর্মকাণ্ডের মাধ্যমে মানুষের পাশে থাকার চেষ্টা করে আসছে—দায়িত্ববোধ, মর্যাদা ও পারস্পরিক সহযোগিতার চেতনায়।",

    mission: "আমাদের লক্ষ্য",

    missionBody:
      "সামাজিক কর্মকাণ্ড, শিক্ষা, স্বাস্থ্য সচেতনতা, মানবিক সহায়তা, পরিবেশ সংরক্ষণ ও সৃজনশীল উদ্যোগের মাধ্যমে তরুণ ও সমাজসচেতন মানুষদের সংগঠিত করে কমিউনিটির সেবায় সম্পৃক্ত করা।",

    vision: "আমাদের দৃষ্টি",

    visionBody:
      "এমন একটি মানবিক ও দায়িত্বশীল সমাজ গড়ে তোলা, যেখানে তরুণরা সক্রিয়ভাবে নিজেদের কমিউনিটি, শিক্ষা ও সামাজিক কল্যাণে অবদান রাখবে এবং প্রয়োজনে কোনো মানুষ সহায়তাহীন থাকবে না।",

    values: "আমাদের মূল্যবোধ",

    believe: "আমরা যা বিশ্বাস করি",

    believeBody:
      "আমরা বিশ্বাস করি, একে অপরের প্রতি দায়িত্ববোধ থেকেই সেবার শুরু। আমরা বিশ্বাস করি, তরুণদের সংগঠিত, সক্ষম ও সুযোগ দেওয়া হলে তারা সমাজে অর্থবহ পরিবর্তন আনতে পারে। আমরা বিশ্বাস করি শিক্ষা, মানবিকতা, মর্যাদা ও সম্মিলিত উদ্যোগ একটি কমিউনিটিকে আরও শক্তিশালী করে—আর কখনো কখনো একটি সাধারণ হাসিই হতে পারে আরও বড় কোনো পরিবর্তনের শুরু।",

    journey: "আমাদের যাত্রা",

    explore: "ঘুরে দেখুন",

    impact: "আমাদের প্রভাব",
  },
};

const subpages = [
  {
    to: "/about/branches",
    key: "nav.branches",
    image: images.cityBranch,
    desc: {
      en: "Our volunteer network and community-based committees.",
      bn: "আমাদের স্বেচ্ছাসেবী নেটওয়ার্ক ও কমিউনিটিভিত্তিক কমিটি।",
    },
  },

  {
    to: "/about/leadership",
    key: "nav.leadership",
    image: images.leadershipWorkshop,
    desc: {
      en: "The people who help guide our work.",
      bn: "যারা আমাদের কার্যক্রমকে এগিয়ে নিতে নেতৃত্ব দেন।",
    },
  },

  {
    to: "/about/projects",
    key: "nav.projects",
    image: images.floodRelief,
    desc: {
      en: "Our social, humanitarian and community initiatives.",
      bn: "আমাদের সামাজিক, মানবিক ও কমিউনিটি উদ্যোগসমূহ।",
    },
  },

  {
    to: "/about/primary-school",
    key: "nav.school",
    image: images.schoolClassroom,
    desc: {
      en: "ইচ্ছের হাসি প্রাথমিক বিদ্যালয়",
      bn: "ইচ্ছের হাসি প্রাথমিক বিদ্যালয়",
    },
  },

  {
    to: "/about/skill-development",
    key: "nav.skills",
    image: images.skillsWorkshop,
    desc: {
      en: "Creating opportunities through learning and skills.",
      bn: "শিক্ষা ও দক্ষতার মাধ্যমে সুযোগ তৈরি করা।",
    },
  },
];

export default function About() {
  const { t, tx, lang } = useLang();

  const c = copy[lang] || copy.en;

  usePageMeta(t("nav.about"), c.sub);

  return (
    <main className="about-page">
      {/* ========================================================
          HERO
          ======================================================== */}

      <PageHero
        eyebrow={c.eyebrow}
        title={c.title}
        sub={c.sub}
        image="/src/photos/aboutus.jpg"
        imageAlt="SMILE volunteers and community members"
      />

      {/* ========================================================
          OUR STORY
          ======================================================== */}

      <section className="py-20 lg:py-28">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading eyebrow={c.story} title={c.story} />
          </div>

          <Reveal className="lg:col-span-7">
            <p className="text-xl leading-relaxed text-black/75 dark:text-white/75">
              {c.storyBody}
            </p>
          </Reveal>
        </div>

        {/* ======================================================
            MISSION + VISION
            ====================================================== */}

        <div className="container-x mt-16 grid gap-6 md:grid-cols-2">
          {[
            {
              icon: Target,
              h: c.mission,
              p: c.missionBody,
              yellow: true,
            },

            {
              icon: Eye,
              h: c.vision,
              p: c.visionBody,
              yellow: false,
            },
          ].map(({ icon: Icon, h, p, yellow }, i) => (
            <Reveal key={h} delay={i * 0.08}>
              <article
                className={`card-hc h-full p-8 lg:p-10 ${
                  yellow
                    ? "bg-[#FDE01A] !text-black dark:bg-[#FDE01A] dark:!text-black hover:shadow-[8px_8px_0_0_#FDE01A] dark:hover:shadow-[8px_8px_0_0_#FFFFFF]"
                    : "bg-white text-black dark:bg-[#151515] dark:text-white"
                }`}
              >
                <Icon
                  className={`h-9 w-9 ${
                    yellow
                      ? "!text-black dark:!text-black"
                      : "text-black dark:text-white"
                  }`}
                />

                <h3
                  className={`mt-5 text-3xl font-extrabold ${
                    yellow
                      ? "!text-black dark:!text-black"
                      : "text-black dark:text-white"
                  }`}
                >
                  {h}
                </h3>

                <p
                  className={`mt-4 text-lg leading-relaxed ${
                    yellow
                      ? "!text-black/75 dark:!text-black/75"
                      : "text-black/75 dark:text-white/75"
                  }`}
                >
                  {p}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ========================================================
          JOURNEY
          ======================================================== */}

      <section className="bg-black py-20 text-white lg:py-28">
        <div className="container-x">
          <SectionHeading dark eyebrow={c.journey} title={c.journey} />

          <ol className="relative mt-14 border-l-[3px] border-[#FDE01A] pl-8 lg:grid lg:grid-cols-6 lg:gap-6 lg:border-l-0 lg:pl-0">
            <div
              className="absolute left-0 right-0 top-3 hidden h-[3px] bg-[#FDE01A] lg:block"
              aria-hidden="true"
            />

            {site.timeline.map((tl, i) => (
              <Reveal
                key={tl.year}
                delay={i * 0.08}
                as="li"
                className="relative mb-10 lg:mb-0 lg:pt-10"
              >
                <span
                  className="absolute -left-[2.45rem] top-1 h-5 w-5 rounded-full border-[3px] border-[#FDE01A] bg-black lg:left-0 lg:top-0.5"
                  aria-hidden="true"
                />

                <p className="font-heading text-3xl font-black text-[#FDE01A]">
                  {tl.year}
                </p>

                <h3 className="mt-2 text-lg font-bold">{tx(tl.title)}</h3>

                <p className="mt-2 text-sm leading-relaxed text-white/70">
                  {tx(tl.desc)}
                </p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ========================================================
          VALUES
          ======================================================== */}

      <section className="py-20 lg:py-28">
        <div className="container-x">
          <SectionHeading eyebrow={c.values} title={c.values} />

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {site.values.map((v, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <div className="flex gap-4 rounded-3xl border-2 border-black p-6 dark:border-white">
                  <span className="font-heading text-4xl font-black text-black/15 dark:text-white/15">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <div>
                    <h3 className="text-xl font-bold text-black dark:text-white">
                      {tx(v.title)}
                    </h3>

                    <p className="mt-1 text-black/65 dark:text-white/65">
                      {tx(v.desc)}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          WHAT WE BELIEVE
          ======================================================== */}

      <section className="about-believe bg-[#FDE01A] py-20 lg:py-24">
        <div className="container-x grid gap-8 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-4">
            <SectionHeading eyebrow={c.believe} title={c.believe} />
          </div>

          <Reveal className="lg:col-span-8">
            <p className="text-2xl font-semibold leading-snug !text-black lg:text-3xl">
              {c.believeBody}
            </p>
          </Reveal>
        </div>
      </section>

      {/* ========================================================
          IMPACT
          ======================================================== */}

      <section className="py-20 lg:py-24">
        <div className="container-x">
          <SectionHeading eyebrow={c.impact} title={c.impact} />
        </div>

        <StatsBand dark={false} className="mt-10" />
      </section>

      {/* ========================================================
          EXPLORE
          ======================================================== */}

      <section className="pb-20 lg:pb-28">
        <div className="container-x">
          <SectionHeading eyebrow={c.explore} title={t("nav.about")} />

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {subpages.map((s, i) => (
              <Reveal key={s.to} delay={i * 0.06} className="h-full">
                <Link
                  to={s.to}
                  className="card-hc group flex h-full flex-col overflow-hidden"
                >
                  <Image
                    src={s.image}
                    alt=""
                    className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  <div className="flex flex-1 items-start justify-between gap-2 p-5">
                    <div>
                      <h3 className="text-lg font-extrabold leading-tight text-black dark:text-white">
                        {t(s.key)}
                      </h3>

                      <p className="mt-1 text-sm text-black/60 dark:text-white/60">
                        {tx(s.desc)}
                      </p>
                    </div>

                    <ArrowUpRight className="h-5 w-5 shrink-0 text-black transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 dark:text-white" />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================
          CTA
          Same CTABand structure as Home page
          ======================================================== */}

      <CTABand
        variant="black"
        title={t("home.final.title")}
        body={t("home.final.body")}
        primary={{
          to: "/connect/volunteer",
          label: t("hero.cta1"),
        }}
        secondary={{
          to: "/donate",
          label: t("common.donateNow"),
        }}
      />
    </main>
  );
}
