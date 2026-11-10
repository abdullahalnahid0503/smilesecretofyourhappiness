import React from "react";
import { Image } from "@/components/ui/image";
import PageHero from "@/components/common/PageHero";
import Reveal from "@/components/common/Reveal";
import SectionHeading from "@/components/common/SectionHeading";
import DonationWidget from "@/components/donation/DonationWidget";
import CTABand from "@/components/common/CTABand";
import { images } from "@/data/images";
import { useLang } from "@/lib/i18n";
import { usePageMeta } from "@/lib/usePageMeta";

const copy = {
  en: {
    eyebrow: "Our School",
    sub: 'A free primary school run by Smile-Secret of Your Happiness for children whose families cannot afford one. The name means "the smile of a wish".',
    sections: [
      {
        h: "Why it began",
        p: "In 2020, while distributing food in a low-income neighbourhood on the edge of Dhaka, our volunteers kept meeting the same children - at ten in the morning, on a weekday, not in school. The nearest free school was a forty-minute walk. Parents asked us, more than once, whether we could do something. In 2021 we rented a room, found two volunteer teachers and opened with forty children.",
      },
      {
        h: "The children we serve",
        p: "Today 112 children from Pre-primary to Class 5 attend. Most are the first in their family to go to school. Many of their parents work in garment factories, drive rickshaws or do household work. We provide uniforms, books, a daily snack and - as importantly - a place that expects them every morning.",
      },
      {
        h: "The community",
        p: "The school belongs to its neighbourhood. Parents sit on the management committee. Local shopkeepers donate the snack once a month. Older students from the community volunteer as reading buddies. We are guests here, and we try to behave like it.",
      },
      {
        h: "What a school day looks like",
        p: 'Assembly at 8:30 with a song and the day’s plan. Bangla, English, maths and general studies follow the national curriculum. Afternoons are for art, storytelling, sport and - once a week - a "smile hour" where children simply play. Teachers hold a parent circle every month.',
      },
      {
        h: "Where we are going",
        p: "Our goal is modest and clear: a permanent building with proper classrooms, a library and a playground; five qualified teachers on fair salaries; and a scholarship fund so that every graduate can continue to secondary school. We publish progress against these goals every six months.",
      },
    ],
    story: "Faces of the school",
    storySub:
      "Replaceable placeholders - photographs of our real children and teachers will be added with consent.",
    donateTitle: "Help a Child Keep Smiling",
    donateSub:
      "Your gift covers what keeps a child in school: a teacher’s salary, books, a snack, a uniform. Choose an amount below.",
    breakdown: [
      { label: "One month of books & stationery for a child", amount: 500 },
      { label: "One month of daily snacks for a child", amount: 1000 },
      { label: "A full uniform set", amount: 2500 },
      { label: "One week of a teacher’s salary", amount: 5000 },
      { label: "One child’s full year at school", amount: 10000 },
    ],
    support: "Other ways to support the school",
    supportBody:
      "Volunteer as a teaching assistant, donate books, or sponsor the monthly snack.",
  },
  bn: {
    eyebrow: "আমাদের বিদ্যালয়",
    sub: "যাদের পরিবার স্কুলের খরচ বহন করতে পারে না, সেই শিশুদের জন্য Smile-Secret of Your Happiness পরিচালিত একটি বিনামূল্যের প্রাথমিক বিদ্যালয়।",
    sections: [
      {
        h: "কেন শুরু হলো",
        p: "২০২০ সালে ঢাকার প্রান্তে একটি নিম্ন-আয়ের এলাকায় খাবার বিতরণের সময় আমাদের স্বেচ্ছাসেবকরা বারবার একই শিশুদের দেখত - সকাল দশটায়, কর্মদিবসে, স্কুলে নয়। নিকটতম বিনামূল্যের স্কুল ছিল চল্লিশ মিনিটের হাঁটা পথ। অভিভাবকরা একাধিকবার জিজ্ঞেস করেছেন, আমরা কিছু করতে পারি কি না। ২০২১ সালে আমরা একটি ঘর ভাড়া নিই, দুজন স্বেচ্ছাসেবক শিক্ষক খুঁজি এবং চল্লিশ শিশু নিয়ে শুরু করি।",
      },
      {
        h: "যে শিশুদের সেবা করি",
        p: "আজ প্রাক-প্রাথমিক থেকে ৫ম শ্রেণি পর্যন্ত ১১২ শিশু পড়ে। অধিকাংশই পরিবারের প্রথম স্কুলে যাওয়া সদস্য। তাদের অভিভাবকদের অনেকে গার্মেন্টসে কাজ করেন, রিকশা চালান বা গৃহকর্মী। আমরা ইউনিফর্ম, বই, দৈনিক নাস্তা দিই - এবং সমান গুরুত্বপূর্ণ, একটি জায়গা যা প্রতিদিন সকালে তাদের প্রতীক্ষা করে।",
      },
      {
        h: "কমিউনিটি",
        p: "বিদ্যালয়টি এলাকার নিজের। অভিভাবকরা ম্যানেজমেন্ট কমিটিতে আছেন। স্থানীয় দোকানিরা মাসে একবার নাস্তা দেন। কমিউনিটির বড় শিক্ষার্থীরা রিডিং বাডি হিসেবে স্বেচ্ছাসেবা করে। আমরা এখানে অতিথি, এবং সেভাবেই আচরণ করার চেষ্টা করি।",
      },
      {
        h: "একটি স্কুলদিন যেমন",
        p: 'সকাল ৮:৩০-এ গান ও দিনের পরিকল্পনা নিয়ে সমাবেশ। বাংলা, ইংরেজি, গণিত ও সাধারণ বিষয় জাতীয় পাঠ্যক্রম অনুসরণ করে। বিকেল শিল্প, গল্প, খেলা এবং সপ্তাহে একবার "হাসির ঘণ্টা" - যখন শিশুরা কেবল খেলে। শিক্ষকরা প্রতি মাসে অভিভাবক সভা করেন।',
      },
      {
        h: "আমরা যেদিকে যাচ্ছি",
        p: "আমাদের লক্ষ্য বিনয়ী ও স্পষ্ট: যথাযথ শ্রেণিকক্ষ, লাইব্রেরি ও খেলার মাঠসহ একটি স্থায়ী ভবন; ন্যায্য বেতনে পাঁচজন যোগ্য শিক্ষক; এবং একটি বৃত্তি তহবিল যেন প্রতিটি স্নাতক মাধ্যমিকে যেতে পারে। প্রতি ছয় মাসে আমরা অগ্রগতি প্রকাশ করি।",
      },
    ],
    story: "বিদ্যালয়ের মুখগুলো",
    storySub:
      "প্রতিস্থাপনযোগ্য প্লেসহোল্ডার - সম্মতি নিয়ে আমাদের প্রকৃত শিশু ও শিক্ষকদের ছবি যোগ হবে।",
    donateTitle: "একটি শিশুর হাসি ধরে রাখুন",
    donateSub:
      "আপনার দান একটি শিশুকে স্কুলে রাখে: শিক্ষকের বেতন, বই, নাস্তা, ইউনিফর্ম। নিচে একটি পরিমাণ বেছে নিন।",
    breakdown: [
      { label: "একটি শিশুর এক মাসের বই ও স্টেশনারি", amount: 500 },
      { label: "একটি শিশুর এক মাসের দৈনিক নাস্তা", amount: 1000 },
      { label: "একটি পূর্ণ ইউনিফর্ম সেট", amount: 2500 },
      { label: "একজন শিক্ষকের এক সপ্তাহের বেতন", amount: 5000 },
      { label: "একটি শিশুর পূর্ণ এক বছরের স্কুল", amount: 10000 },
    ],
    support: "বিদ্যালয়কে সহায়তার অন্য উপায়",
    supportBody:
      "শিক্ষা সহকারী হিসেবে স্বেচ্ছাসেবা করুন, বই দান করুন, বা মাসিক নাস্তার পৃষ্ঠপোষক হোন।",
  },
};

const photos = [
  {
    src: images.schoolClassroom,
    alt: "Children in the classroom",
    caption: { en: "Morning lessons", bn: "সকালের পাঠ" },
  },
  {
    src: images.childPortrait,
    alt: "A student with her notebook",
    caption: { en: "A student", bn: "একজন শিক্ষার্থী" },
    tall: true,
  },
  {
    src: images.teacherStudent,
    alt: "A teacher helping a student",
    caption: { en: "Our teachers", bn: "আমাদের শিক্ষকরা" },
  },
  {
    src: images.schoolSupplies,
    alt: "Children receiving school bags",
    caption: { en: "Community activities", bn: "কমিউনিটি কার্যক্রম" },
  },
];

export default function PrimarySchool() {
  const { t, tx, lang } = useLang();
  const c = copy[lang] || copy.en;
  usePageMeta("ইচ্ছের হাসি প্রাথমিক বিদ্যালয়", c.sub);
  return (
    <>
      <PageHero
        eyebrow={c.eyebrow}
        title="ইচ্ছের হাসি প্রাথমিক বিদ্যালয়"
        sub={c.sub}
        image={images.schoolClassroom}
        imageAlt="Children in a classroom"
      >
        <a href="#donate" className="btn-primary">
          {c.donateTitle}
        </a>
      </PageHero>

      <section className="py-16 lg:py-24">
        <div className="mx-auto w-full max-w-3xl px-5 sm:px-8">
          {c.sections.map((s, i) => (
            <Reveal key={i} className="mb-14">
              <h2 className="text-2xl font-extrabold sm:text-3xl">
                <span className="smile-stroke">{s.h}</span>
              </h2>
              <p className="mt-5 text-lg leading-[1.75] text-black/75">{s.p}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-[#F5F5F5] py-16 lg:py-24">
        <div className="container-x">
          <SectionHeading eyebrow={c.story} title={c.story} sub={c.storySub} />
          <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
            {photos.map((p, i) => (
              <Reveal
                key={i}
                delay={i * 0.06}
                className={p.tall ? "row-span-2" : ""}
              >
                <figure className="h-full overflow-hidden rounded-3xl border-2 border-black bg-white">
                  <Image
                    src={p.src}
                    alt={p.alt}
                    className={`w-full object-cover ${p.tall ? "aspect-[3/4] md:h-full" : "aspect-[4/3]"}`}
                  />
                  <figcaption className="px-4 py-3 text-sm font-semibold">
                    {tx(p.caption)}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="donate" className="bg-black py-20 text-white lg:py-28">
        <div className="container-x grid gap-12 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="eyebrow mb-4 text-white">{t("nav.donate")}</p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="text-4xl font-extrabold leading-[1.05] sm:text-5xl">
                {c.donateTitle}
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 text-lg leading-relaxed text-white/70">
                {c.donateSub}
              </p>
            </Reveal>
          </div>
          <Reveal className="text-black lg:col-span-7">
            <DonationWidget breakdown={c.breakdown} />
          </Reveal>
        </div>
      </section>

      <CTABand
        variant="yellow"
        title={c.support}
        body={c.supportBody}
        primary={{ to: "/connect/volunteer", label: t("hero.cta1") }}
        secondary={{ to: "/contact", label: t("nav.contact") }}
      />
    </>
  );
}
