import React from "react";
import { Link } from "react-router-dom";
import { Check, ArrowRight } from "lucide-react";
import PageHero from "@/components/common/PageHero";
import Reveal from "@/components/common/Reveal";
import SectionHeading from "@/components/common/SectionHeading";
import CTABand from "@/components/common/CTABand";
import { useLang } from "@/lib/i18n";
import { usePageMeta } from "@/lib/usePageMeta";
import { cn } from "@/lib/utils";

const copy = {
  en: {
    title: "Regular Membership",
    sub: "Regular Members give a fixed contribution every month or year. It is the steady income that lets us plan, pay teachers on time, keep relief stock ready, and run programs without waiting for a campaign.",

    monthly: "Monthly Membership",
    monthlyDesc: "A recurring monthly contribution.",
    yearly: "Yearly Membership",
    yearlyDesc: "A single annual contribution.",

    contribution: "Contribution",
    priceNote: "Membership contribution by member category.",

    generalMember: "General Member",
    committeeMember: "Committee Member",
    donorMember: "Donor Member",
    minimum: "minimum",

    choose: "Choose",
    popular: "Most Flexible",
    bestValue: "Best for Planning",

    benefitsTitle: "What Membership Includes",

    monthlyBenefits: [
      "Members’ Letters & Regular Updates",
      "Recognition in Annual Report",
      "Field Participation Invitations",
      "Members’ Community Access",
      "Annual Gathering Invitation",
      "Priority for Selected Workshops",
    ],

    yearlyBenefits: [
      "Members’ Letters & Exclusive Updates",
      "Enhanced Recognition in Annual Report",
      "Priority Field Participation",
      "Members-Only Community Access",
      "Annual Gathering with Special Recognition",
      "Early Access & Priority for Selected Workshops",
    ],

    cta: "Ready to Become a Regular Member?",
    ctaBody:
      "Choose monthly or yearly membership — either way, you stay close to the work.",
  },

  bn: {
    title: "নিয়মিত সদস্যপদ",
    sub: "নিয়মিত সদস্যরা প্রতি মাসে বা বছরে একটি নির্দিষ্ট অনুদান প্রদান করেন। এই স্থির আয় আমাদের পরিকল্পনা করতে, সময়মতো শিক্ষকদের বেতন দিতে, ত্রাণসামগ্রী প্রস্তুত রাখতে এবং কোনো ক্যাম্পেইনের অপেক্ষা না করে বিভিন্ন কার্যক্রম পরিচালনা করতে সহায়তা করে।",

    monthly: "মাসিক সদস্যপদ",
    monthlyDesc: "প্রতি মাসে একটি নির্দিষ্ট অনুদান।",
    yearly: "বার্ষিক সদস্যপদ",
    yearlyDesc: "বছরে একবার একটি নির্দিষ্ট অনুদান।",

    contribution: "অনুদানের পরিমাণ",
    priceNote: "সদস্যের ধরন অনুযায়ী সদস্যপদ অনুদান।",

    generalMember: "সাধারণ সদস্য",
    committeeMember: "কমিটি সদস্য",
    donorMember: "দাতা সদস্য",
    minimum: "ন্যূনতম",

    choose: "বেছে নিন",
    popular: "সবচেয়ে নমনীয়",
    bestValue: "পরিকল্পনার জন্য সেরা",

    benefitsTitle: "সদস্যপদে যা অন্তর্ভুক্ত",

    monthlyBenefits: [
      "সদস্যদের চিঠি ও নিয়মিত আপডেট",
      "বার্ষিক প্রতিবেদনে সদস্য হিসেবে স্বীকৃতি",
      "মাঠপর্যায়ের কার্যক্রমে অংশগ্রহণের আমন্ত্রণ",
      "সদস্য কমিউনিটিতে প্রবেশাধিকার",
      "বার্ষিক সমাবেশে আমন্ত্রণ",
      "নির্বাচিত কর্মশালায় অগ্রাধিকার",
    ],

    yearlyBenefits: [
      "সদস্যদের চিঠি ও বিশেষ আপডেট",
      "বার্ষিক প্রতিবেদনে বিশেষভাবে সদস্য স্বীকৃতি",
      "মাঠপর্যায়ের কার্যক্রমে অগ্রাধিকারমূলক অংশগ্রহণ",
      "শুধুমাত্র সদস্যদের জন্য কমিউনিটিতে প্রবেশাধিকার",
      "বিশেষ স্বীকৃতিসহ বার্ষিক সমাবেশে আমন্ত্রণ",
      "নির্বাচিত কর্মশালায় আগাম প্রবেশাধিকার ও অগ্রাধিকার",
    ],

    cta: "নিয়মিত সদস্য হতে প্রস্তুত?",
    ctaBody:
      "মাসিক বা বার্ষিক সদস্যপদ বেছে নিন — যেভাবেই হোক, আপনি আমাদের কাজের আরও কাছে থাকবেন।",
  },
};

export default function RegularMember() {
  const { t, lang } = useLang();
  const c = copy[lang] || copy.en;

  usePageMeta(t("nav.regular"), c.sub);

  const isBangla = lang === "bn";

  const plans = [
    {
      id: "monthly",
      h: c.monthly,
      p: c.monthlyDesc,
      tag: c.popular,
      dark: false,
      benefits: c.monthlyBenefits,
      prices: isBangla
        ? [
            { label: c.generalMember, amount: "৳ ৫০" },
            { label: c.committeeMember, amount: "৳ ১০০" },
            { label: c.donorMember, amount: "৳ ৩০০", note: `(${c.minimum})` },
          ]
        : [
            { label: c.generalMember, amount: "৳ 50" },
            { label: c.committeeMember, amount: "৳ 100" },
            { label: c.donorMember, amount: "৳ 300", note: `(${c.minimum})` },
          ],
    },
    {
      id: "yearly",
      h: c.yearly,
      p: c.yearlyDesc,
      tag: c.bestValue,
      dark: true,
      benefits: c.yearlyBenefits,
      prices: isBangla
        ? [
            { label: c.generalMember, amount: "৳ ৫০০" },
            { label: c.committeeMember, amount: "৳ ১,০০০" },
            { label: c.donorMember, amount: "৳ ৩,০০০", note: `(${c.minimum})` },
          ]
        : [
            { label: c.generalMember, amount: "৳ 500" },
            { label: c.committeeMember, amount: "৳ 1,000" },
            { label: c.donorMember, amount: "৳ 3,000", note: `(${c.minimum})` },
          ],
    },
  ];

  return (
    <>
      <PageHero eyebrow={t("nav.connect")} title={c.title} sub={c.sub} />

      <section className="pb-20">
        <div className="container-x grid gap-6 md:grid-cols-2">
          {plans.map((pl, i) => (
            <Reveal key={pl.id} delay={i * 0.08} className="h-full">
              <article
                className={cn(
                  "card-hc flex h-full flex-col p-8 lg:p-10",
                  pl.dark
                    ? "bg-black text-white dark:bg-[#171717] dark:border-2 dark:border-white/25 dark:shadow-[0_0_0_1px_rgba(255,255,255,0.06),8px_8px_0_0_#FDE01A]"
                    : "bg-white dark:bg-[#0A0A0A]",
                  "hover:!shadow-[8px_8px_0_0_#FDE01A]",
                  "dark:hover:!shadow-[8px_8px_0_0_#FFFFFF]",
                )}
              >
                {/* Plan Tag */}
                <span
                  className={cn(
                    "w-fit rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider",
                    pl.dark
                      ? "bg-[#FDE01A] text-black"
                      : "border-2 border-black",
                  )}
                >
                  {pl.tag}
                </span>

                {/* Plan Title */}
                <h2 className="mt-5 text-3xl font-extrabold">{pl.h}</h2>

                {/* Plan Description */}
                <p
                  className={cn(
                    "mt-2",
                    pl.dark ? "text-white/70" : "text-black/65",
                  )}
                >
                  {pl.p}
                </p>

                {/* Contribution */}
                <div
                  className={cn(
                    "mt-8 rounded-2xl border-2 border-dashed p-5",
                    pl.dark ? "border-white/30" : "border-black/30",
                  )}
                >
                  <p className="font-heading text-lg font-black">
                    {c.contribution}
                  </p>

                  <div className="mt-4 space-y-3">
                    {pl.prices.map((price) => (
                      <div
                        key={price.label}
                        className={cn(
                          "flex items-center justify-between gap-4 border-b pb-3 last:border-b-0 last:pb-0",
                          pl.dark ? "border-white/10" : "border-black/10",
                        )}
                      >
                        <span className="text-sm font-semibold">
                          {price.label}
                        </span>

                        <span className="font-heading text-xl font-black whitespace-nowrap">
                          {price.amount}
                          {price.note && (
                            <span className="ml-1 text-xs font-semibold opacity-70">
                              {price.note}
                            </span>
                          )}
                        </span>
                      </div>
                    ))}
                  </div>

                  <p
                    className={cn(
                      "mt-4 text-xs",
                      pl.dark ? "text-white/55" : "text-black/50",
                    )}
                  >
                    {c.priceNote}
                  </p>
                </div>

                {/* Benefits */}
                <ul className="mt-8 flex-1 space-y-3">
                  {pl.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-2.5">
                      <span
                        className={cn(
                          "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full",
                          pl.dark
                            ? "bg-[#FDE01A] text-black"
                            : "bg-black text-white",
                        )}
                      >
                        <Check className="h-3 w-3" strokeWidth={3} />
                      </span>

                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>

                {/* Choose Button */}
                <Link
                  to={`/donate?plan=${pl.id}`}
                  className={cn(
                    "mt-10 w-full",
                    pl.dark ? "btn-primary" : "btn-dark",
                  )}
                >
                  {c.choose} {pl.h}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-[#F5F5F5] py-20 dark:bg-[#111111] lg:py-28">
        <div className="container-x">
          <SectionHeading eyebrow={t("nav.regular")} title={c.benefitsTitle} />

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {(isBangla ? c.monthlyBenefits : c.monthlyBenefits).map(
              (benefit, i) => (
                <Reveal key={benefit} delay={i * 0.05}>
                  <div className="card-hc h-full p-6">
                    <span className="font-heading text-3xl font-black text-black/15 dark:text-white/15">
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    <h3 className="mt-3 text-xl font-bold">{benefit}</h3>

                    <p className="mt-2 text-black/65 dark:text-white/65">
                      {isBangla ? c.monthlyBenefits[i] : c.monthlyBenefits[i]}
                    </p>
                  </div>
                </Reveal>
              ),
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTABand
        variant="yellow"
        title={c.cta}
        body={c.ctaBody}
        primary={{
          to: "/donate?plan=monthly",
          label: c.monthly,
        }}
        secondary={{
          to: "/donate?plan=yearly",
          label: c.yearly,
        }}
      />
    </>
  );
}
