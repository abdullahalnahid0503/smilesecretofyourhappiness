import React from 'react';
import { HandHeart, CalendarCheck, Award, Briefcase } from 'lucide-react';
import PageHero from '@/components/common/PageHero';
import OptionCard from '@/components/cards/OptionCard';
import { images } from '@/data/images';
import { useLang } from '@/lib/i18n';
import { usePageMeta } from '@/lib/usePageMeta';

const copy = {
  en: { title: 'Connect With Us', sub: 'Four ways to be part of Smile - with your time, your monthly support, a lifetime commitment, or your career.', v: 'Give your time, on the field or remotely.', r: 'Support us monthly or yearly and stay close to the work.', l: 'A lifetime commitment to the mission, from ৳100,000.', c: 'Work with Smile as opportunities open up.' },
  bn: { title: 'আমাদের সাথে যুক্ত হোন', sub: 'Smile-এর অংশ হওয়ার চারটি পথ - আপনার সময়, মাসিক সহায়তা, আজীবন অঙ্গীকার, বা ক্যারিয়ার দিয়ে।', v: 'মাঠে অথবা দূর থেকে আপনার সময় দিন।', r: 'মাসিক বা বার্ষিক সহায়তা করুন এবং কাজের কাছে থাকুন।', l: '৳১,০০,০০০ থেকে লক্ষ্যের প্রতি আজীবন অঙ্গীকার।', c: 'সুযোগ আসলে Smile-এর সাথে কাজ করুন।' },
};

export default function Connect() {
  const { t, lang } = useLang();
  const c = copy[lang] || copy.en;
  usePageMeta(t('nav.connect'), c.sub);
  const options = [
    { to: '/connect/volunteer', title: t('nav.volunteer'), desc: c.v, image: images.hero, icon: HandHeart },
    { to: '/connect/regular-member', title: t('nav.regular'), desc: c.r, image: images.whoWeAre, icon: CalendarCheck },
    { to: '/connect/lifetime-member', title: t('nav.lifetime'), desc: c.l, image: images.leadershipWorkshop, icon: Award },
    { to: '/connect/career', title: t('nav.career'), desc: c.c, image: images.skillsWorkshop, icon: Briefcase },
  ];
  return (
    <>
      <PageHero eyebrow={t('nav.connect')} title={c.title} sub={c.sub} />
      <section className="pb-20 lg:pb-28">
        <div className="container-x grid gap-6 md:grid-cols-2">
          {options.map((o, i) => <OptionCard key={o.to} {...o} index={i} />)}
        </div>
      </section>
    </>
  );
}