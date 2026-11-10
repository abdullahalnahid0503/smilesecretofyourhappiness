import React from 'react';
import PageHero from '@/components/common/PageHero';
import OrgChart from '@/components/orgchart/OrgChart';
import CTABand from '@/components/common/CTABand';
import { nationalCommittee } from '@/data/leaders';
import { useLang } from '@/lib/i18n';
import { usePageMeta } from '@/lib/usePageMeta';

const copy = {
  en: { eyebrow: 'National Committee', title: 'Our Leadership', sub: 'The National Committee is elected by branch representatives every two years. Most members started as field volunteers - leadership at Smile is earned by showing up.', cta: 'Meet the branch committees', ctaBody: 'Each of our branches publishes its own committee structure.' },
  bn: { eyebrow: 'জাতীয় কমিটি', title: 'আমাদের নেতৃত্ব', sub: 'জাতীয় কমিটি প্রতি দুই বছরে শাখা প্রতিনিধিদের দ্বারা নির্বাচিত হয়। অধিকাংশ সদস্য মাঠ পর্যায়ের স্বেচ্ছাসেবক হিসেবে শুরু করেছেন - Smile-এ নেতৃত্ব অর্জিত হয় পাশে দাঁড়ানোর মাধ্যমে।', cta: 'শাখা কমিটির সাথে পরিচিত হোন', ctaBody: 'আমাদের প্রতিটি শাখা নিজেদের কমিটি কাঠামো প্রকাশ করে।' },
};

export default function Leadership() {
  const { t, lang } = useLang();
  const c = copy[lang] || copy.en;
  usePageMeta(t('nav.leadership'), c.sub);
  return (
    <>
      <PageHero dark eyebrow={c.eyebrow} title={c.title} sub={c.sub} />
      <section className="py-20 lg:py-28">
        <div className="container-x">
          <OrgChart tiers={nationalCommittee} detailed />
        </div>
      </section>
      <CTABand variant="yellow" title={c.cta} body={c.ctaBody} primary={{ to: '/about/branches', label: t('nav.branches') }} />
    </>
  );
}