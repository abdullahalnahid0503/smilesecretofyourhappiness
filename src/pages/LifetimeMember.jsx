import React from 'react';
import { Award, ArrowRight } from 'lucide-react';
import PageHero from '@/components/common/PageHero';
import Reveal from '@/components/common/Reveal';
import SectionHeading from '@/components/common/SectionHeading';
import FormField from '@/components/forms/FormField';
import FormSuccess from '@/components/forms/FormSuccess';
import { useForm } from '@/components/forms/useForm';
import { useLang } from '@/lib/i18n';
import { usePageMeta } from '@/lib/usePageMeta';

const copy = {
  en: {
    title: 'Become a Lifetime Member', sub: 'A one-time commitment that stays with the organization for good. Lifetime Members form the foundation that lets Smile plan for decades, not campaigns.', min: 'Minimum contribution', minNote: 'One-time. Payable in instalments by arrangement.',
    benefitsTitle: 'What Lifetime Membership includes',
    benefits: [
      { h: 'Lifetime recognition', p: 'Your name permanently listed among our Lifetime Members, with your permission.' },
      { h: 'Lifetime membership certificate', p: 'An official certificate and member number issued by the National Committee.' },
      { h: 'Special recognition within the organization', p: 'Acknowledged at the annual gathering and in the annual report.' },
      { h: 'Invitations to selected events', p: 'Invitations to national events, the annual gathering and project inaugurations.' },
      { h: 'Support strategic initiatives', p: 'The option to direct your contribution toward a long-term initiative such as the school building fund.' },
      { h: 'Member community access', p: 'Lifetime access to the members’ community, updates and regional meetups.' },
      { h: 'Other official benefits', p: 'Additional benefits as defined in the organization’s membership policy.' },
    ],
    formTitle: 'Membership inquiry', formSub: 'Tell us a little about yourself. Our Treasurer will contact you to complete the process.',
  },
  bn: {
    title: 'আজীবন সদস্য হোন', sub: 'একটি এককালীন অঙ্গীকার যা চিরকাল সংগঠনের সাথে থাকে। আজীবন সদস্যরাই সেই ভিত্তি, যা Smile-কে ক্যাম্পেইন নয়, দশকের পরিকল্পনা করতে দেয়।', min: 'ন্যূনতম অনুদান', minNote: 'এককালীন। ব্যবস্থা অনুসারে কিস্তিতে প্রদানযোগ্য।',
    benefitsTitle: 'আজীবন সদস্যপদে যা অন্তর্ভুক্ত',
    benefits: [
      { h: 'আজীবন স্বীকৃতি', p: 'আপনার অনুমতিতে আমাদের আজীবন সদস্যদের মধ্যে আপনার নাম স্থায়ীভাবে তালিকাভুক্ত।' },
      { h: 'আজীবন সদস্যপদ সনদ', p: 'জাতীয় কমিটি প্রদত্ত আনুষ্ঠানিক সনদ ও সদস্য নম্বর।' },
      { h: 'সংগঠনে বিশেষ স্বীকৃতি', p: 'বার্ষিক সমাবেশ ও বার্ষিক প্রতিবেদনে স্বীকৃতি।' },
      { h: 'নির্বাচিত ইভেন্টে আমন্ত্রণ', p: 'জাতীয় ইভেন্ট, বার্ষিক সমাবেশ ও প্রজেক্ট উদ্বোধনে আমন্ত্রণ।' },
      { h: 'কৌশলগত উদ্যোগে সহায়তা', p: 'বিদ্যালয় ভবন তহবিলের মতো দীর্ঘমেয়াদি উদ্যোগে আপনার অনুদান নির্দেশ করার সুযোগ।' },
      { h: 'সদস্য কমিউনিটিতে প্রবেশ', p: 'সদস্য কমিউনিটি, আপডেট ও আঞ্চলিক মিটআপে আজীবন প্রবেশাধিকার।' },
      { h: 'অন্যান্য আনুষ্ঠানিক সুবিধা', p: 'সংগঠনের সদস্যপদ নীতিতে নির্ধারিত অতিরিক্ত সুবিধা।' },
    ],
    formTitle: 'সদস্যপদ অনুসন্ধান', formSub: 'আপনার সম্পর্কে কিছু বলুন। প্রক্রিয়া সম্পন্ন করতে আমাদের কোষাধ্যক্ষ আপনার সাথে যোগাযোগ করবেন।',
  },
};

export default function LifetimeMember() {
  const { t, lang } = useLang();
  const c = copy[lang] || copy.en;
  usePageMeta(t('nav.lifetime'), c.sub);
  const form = useForm({ fullName: '', email: '', phone: '', organization: '', contribution: '100000', note: '' }, { fullName: 'required', email: 'email', phone: 'required', contribution: 'required' });
  const { values: v, errors: e, onChange } = form;

  return (
    <>
      <PageHero dark eyebrow={t('nav.connect')} title={c.title} sub={c.sub}>
        <a href="#inquiry" className="btn-primary">{c.title} <ArrowRight className="h-4 w-4" /></a>
      </PageHero>

      <section className="border-b-2 border-black bg-[#FDE01A]">
        <div className="container-x flex flex-col items-start gap-4 py-10 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4"><Award className="h-12 w-12" /><div><p className="text-xs font-bold uppercase tracking-[0.18em]">{c.min}</p><p className="font-heading text-5xl font-black leading-none sm:text-6xl">৳100,000</p></div></div>
          <p className="max-w-xs text-sm font-medium text-black/70">{c.minNote}</p>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="container-x">
          <SectionHeading eyebrow={t('nav.lifetime')} title={c.benefitsTitle} />
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {c.benefits.map((b, i) => (
              <Reveal key={b.h} delay={i * 0.05}><div className="card-hc h-full p-6"><span className="font-heading text-3xl font-black text-black/15">{String(i + 1).padStart(2, '0')}</span><h3 className="mt-3 text-xl font-bold">{b.h}</h3><p className="mt-2 text-black/65">{b.p}</p></div></Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="inquiry" className="bg-black py-20 text-white lg:py-28">
        <div className="container-x grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5"><SectionHeading dark eyebrow={c.title} title={c.formTitle} sub={c.formSub} /></div>
          <Reveal className="text-black lg:col-span-7">
            {form.status === 'success' ? <FormSuccess onReset={form.reset} /> : (
              <form onSubmit={form.submit} noValidate className="card-hc grid gap-6 p-7 sm:grid-cols-2 sm:p-10">
                <FormField label={t('form.fullName')} name="fullName" value={v.fullName} onChange={onChange} error={e.fullName} required className="sm:col-span-2" />
                <FormField label={t('form.email')} name="email" type="email" value={v.email} onChange={onChange} error={e.email} required />
                <FormField label={t('form.phone')} name="phone" type="tel" value={v.phone} onChange={onChange} error={e.phone} required />
                <FormField label={t('form.organization')} name="organization" value={v.organization} onChange={onChange} />
                <FormField label={t('form.contribution')} name="contribution" type="number" value={v.contribution} onChange={onChange} error={e.contribution} required />
                <FormField label={t('form.note')} name="note" type="textarea" value={v.note} onChange={onChange} className="sm:col-span-2" />
                <button type="submit" disabled={form.status === 'submitting'} className="btn-primary sm:col-span-2 disabled:opacity-60">{form.status === 'submitting' ? t('common.submitting') : c.title} <ArrowRight className="h-4 w-4" /></button>
              </form>
            )}
          </Reveal>
        </div>
      </section>
    </>
  );
}