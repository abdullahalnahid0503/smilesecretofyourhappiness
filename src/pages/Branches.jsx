import React from 'react';
import PageHero from '@/components/common/PageHero';
import Reveal from '@/components/common/Reveal';
import CTABand from '@/components/common/CTABand';
import BranchCard from '@/components/cards/BranchCard';
import { branches } from '@/data/branches';
import { images } from '@/data/images';
import { useLang } from '@/lib/i18n';
import { usePageMeta } from '@/lib/usePageMeta';

const copy = {
  en: { title: 'Our Branches', sub: 'Smile is organised through local branches, each with its own elected committee. Every branch knows its community best - and each committee is published here for transparency.', cta: 'Want to start a branch in your area?', ctaBody: 'We help new committees with training, structure and a starter fund.' },
  bn: { title: 'আমাদের শাখাসমূহ', sub: 'Smile স্থানীয় শাখার মাধ্যমে সংগঠিত, প্রতিটির নিজস্ব নির্বাচিত কমিটি রয়েছে। প্রতিটি শাখা নিজের কমিউনিটিকে সবচেয়ে ভালো জানে - এবং স্বচ্ছতার জন্য প্রতিটি কমিটি এখানে প্রকাশিত।', cta: 'আপনার এলাকায় একটি শাখা শুরু করতে চান?', ctaBody: 'নতুন কমিটিকে আমরা প্রশিক্ষণ, কাঠামো ও প্রারম্ভিক তহবিল দিয়ে সহায়তা করি।' },
};

export default function Branches() {
  const { t, lang } = useLang();
  const c = copy[lang] || copy.en;
  usePageMeta(t('nav.branches'), c.sub);
  return (
    <>
      <PageHero eyebrow={t('nav.about')} title={c.title} sub={c.sub} image={images.ruralBranch} imageAlt="Volunteers with a village community" />
      <section className="pb-20 lg:pb-28">
        <div className="container-x space-y-8">
          {branches.map((b, i) => <Reveal key={b.slug} delay={i * 0.05}><BranchCard branch={b} /></Reveal>)}
        </div>
      </section>
      <CTABand variant="yellow" title={c.cta} body={c.ctaBody} primary={{ to: '/contact', label: t('nav.contact') }} secondary={{ to: '/connect/volunteer', label: t('hero.cta1') }} />
    </>
  );
}