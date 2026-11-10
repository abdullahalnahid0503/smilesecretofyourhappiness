import React from 'react';
import { Link } from 'react-router-dom';
import { School, LifeBuoy, GraduationCap, ArrowRight } from 'lucide-react';
import PageHero from '@/components/common/PageHero';
import Reveal from '@/components/common/Reveal';
import DonationWidget from '@/components/donation/DonationWidget';
import { useLang } from '@/lib/i18n';
import { usePageMeta } from '@/lib/usePageMeta';

const copy = {
  en: { plan: { monthly: 'Monthly Membership', yearly: 'Yearly Membership' }, causes: [
    { icon: School, h: 'ইচ্ছের হাসি প্রাথমিক বিদ্যালয়', p: 'Teachers, books, snacks and uniforms for 112 children.', to: '/about/primary-school' },
    { icon: LifeBuoy, h: 'Humanitarian relief', p: 'Ready stock for floods, winters and emergencies.', to: '/about/projects' },
    { icon: GraduationCap, h: 'Skill programs', p: 'Free workshops and training for young people.', to: '/about/skill-development' },
  ], breakdown: [{ label: 'Programs & relief', amount: 80 }, { label: 'School operations', amount: 15 }, { label: 'Administration', amount: 5 }], breakdownTitle: 'How each ৳100 is used (indicative)' },
  bn: { plan: { monthly: 'মাসিক সদস্যপদ', yearly: 'বার্ষিক সদস্যপদ' }, causes: [
    { icon: School, h: 'ইচ্ছের হাসি প্রাথমিক বিদ্যালয়', p: '১১২ শিশুর জন্য শিক্ষক, বই, নাস্তা ও ইউনিফর্ম।', to: '/about/primary-school' },
    { icon: LifeBuoy, h: 'মানবিক ত্রাণ', p: 'বন্যা, শীত ও জরুরি অবস্থার জন্য প্রস্তুত মজুত।', to: '/about/projects' },
    { icon: GraduationCap, h: 'দক্ষতা প্রোগ্রাম', p: 'তরুণদের জন্য বিনামূল্যের ওয়ার্কশপ ও প্রশিক্ষণ।', to: '/about/skill-development' },
  ], breakdown: [{ label: 'প্রোগ্রাম ও ত্রাণ', amount: 80 }, { label: 'বিদ্যালয় পরিচালনা', amount: 15 }, { label: 'প্রশাসন', amount: 5 }], breakdownTitle: 'প্রতি ৳১০০ যেভাবে ব্যবহৃত হয় (নির্দেশক)' },
};

export default function Donate() {
  const { t, lang } = useLang();
  const c = copy[lang] || copy.en;
  const plan = new URLSearchParams(window.location.search).get('plan');
  usePageMeta(t('nav.donate'), t('donate.sub'));
  return (
    <>
      <PageHero dark eyebrow={t('nav.donate')} title={t('donate.title')} sub={t('donate.sub')} />
      <section className="py-16 lg:py-24">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-7"><DonationWidget purpose={plan && c.plan[plan] ? c.plan[plan] : undefined} breakdown={c.breakdown} /></Reveal>
          <div className="space-y-4 lg:col-span-5">
            <p className="eyebrow">{t('donate.where')}</p>
            {c.causes.map(({ icon: Icon, h, p, to }, i) => (
              <Reveal key={h} delay={i * 0.07}>
                <Link to={to} className="card-hc group flex items-start gap-4 p-6">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#FDE01A]"><Icon className="h-6 w-6" /></span>
                  <span className="flex-1"><span className="block text-lg font-extrabold">{h}</span><span className="block text-sm text-black/65">{p}</span></span>
                  <ArrowRight className="mt-1 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Reveal>
            ))}
            <Reveal delay={0.25}>
              <div className="rounded-3xl bg-black p-6 text-white">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#FDE01A]">{c.breakdownTitle}</p>
                <div className="mt-4 flex h-4 w-full overflow-hidden rounded-full border-2 border-white/30">
                  {c.breakdown.map((b, i) => <span key={b.label} style={{ width: `${b.amount}%` }} className={['bg-[#FDE01A]', 'bg-white/80', 'bg-white/40'][i]} />)}
                </div>
                <ul className="mt-3 space-y-1 text-sm">{c.breakdown.map((b) => <li key={b.label} className="flex justify-between"><span className="text-white/75">{b.label}</span><span className="font-bold">{b.amount}%</span></li>)}</ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}