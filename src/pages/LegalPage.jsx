import React from "react";
import PageHero from "@/components/common/PageHero";
import { useLang } from "@/lib/i18n";
import { usePageMeta } from "@/lib/usePageMeta";

const copy = {
  privacy: {
    en: {
      title: "Privacy Policy",
      body: [
        "This is a placeholder for the official Privacy Policy of Smile-Secret of Your Happiness. The final text will be published here once approved by the National Committee.",
        "In short: we collect only the information you give us through forms on this site (such as your name, email and phone number), we use it solely to respond to you or to process your volunteering, membership or donation request, and we never sell or share it with third parties for marketing.",
        "You may ask us to view, correct or delete your information at any time by contacting us.",
      ],
    },
    bn: {
      title: "গোপনীয়তা নীতি",
      body: [
        "এটি Smile-Secret of Your Happiness-এর আনুষ্ঠানিক গোপনীয়তা নীতির প্লেসহোল্ডার। জাতীয় কমিটির অনুমোদনের পর চূড়ান্ত পাঠ এখানে প্রকাশিত হবে।",
        "সংক্ষেপে: আমরা কেবল এই সাইটের ফর্মে আপনার দেওয়া তথ্য (নাম, ইমেইল, ফোন) সংগ্রহ করি, শুধু আপনাকে উত্তর দিতে বা আপনার স্বেচ্ছাসেবা, সদস্যপদ বা দানের অনুরোধ প্রক্রিয়া করতে ব্যবহার করি, এবং কখনো বিপণনের জন্য তৃতীয় পক্ষের কাছে বিক্রি বা শেয়ার করি না।",
        "আপনি যেকোনো সময় যোগাযোগ করে আপনার তথ্য দেখতে, সংশোধন বা মুছতে অনুরোধ করতে পারেন।",
      ],
    },
  },
  terms: {
    en: {
      title: "Terms & Conditions",
      body: [
        "This is a placeholder for the official Terms & Conditions governing the use of this website and participation in Smile-Secret of Your Happiness programs. The final text will be published here once approved.",
        "Content on this site is provided for information. Figures, dates and names shown as placeholders will be replaced with verified organizational data.",
        "Membership and donation terms - including contribution amounts, recognition and benefits - are defined by the organization’s membership policy and may be updated from time to time.",
      ],
    },
    bn: {
      title: "শর্তাবলী",
      body: [
        "এটি এই ওয়েবসাইট ব্যবহার ও Smile-Secret of Your Happiness কার্যক্রমে অংশগ্রহণের আনুষ্ঠানিক শর্তাবলীর প্লেসহোল্ডার। অনুমোদনের পর চূড়ান্ত পাঠ এখানে প্রকাশিত হবে।",
        "এই সাইটের বিষয়বস্তু তথ্যের জন্য প্রদত্ত। প্লেসহোল্ডার হিসেবে দেখানো সংখ্যা, তারিখ ও নাম যাচাইকৃত সাংগঠনিক তথ্য দিয়ে প্রতিস্থাপিত হবে।",
        "সদস্যপদ ও দানের শর্ত - অনুদানের পরিমাণ, স্বীকৃতি ও সুবিধাসহ - সংগঠনের সদস্যপদ নীতি দ্বারা নির্ধারিত এবং সময়ে সময়ে হালনাগাদ হতে পারে।",
      ],
    },
  },
};

export default function LegalPage({ type = "privacy" }) {
  const { lang } = useLang();
  const c = copy[type][lang] || copy[type].en;
  usePageMeta(c.title);
  return (
    <>
      <PageHero eyebrow="Smile-Secret of Your Happiness" title={c.title} />
      <section className="pb-20 lg:pb-28">
        <div className="mx-auto max-w-3xl space-y-6 px-5 text-lg leading-relaxed text-black/75 sm:px-8">
          {c.body.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </section>
    </>
  );
}
