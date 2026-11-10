import React from 'react';
import { Mail, Phone, MapPin, ArrowRight, Facebook, Instagram, Youtube, Linkedin } from 'lucide-react';
import PageHero from '@/components/common/PageHero';
import Reveal from '@/components/common/Reveal';
import FormField from '@/components/forms/FormField';
import FormSuccess from '@/components/forms/FormSuccess';
import { useForm } from '@/components/forms/useForm';
import { site } from '@/data/site';
import { useLang } from '@/lib/i18n';
import { usePageMeta } from '@/lib/usePageMeta';

const copy = {
  en: { title: 'Contact Us', sub: 'Questions, partnership ideas, press, or just want to say hello - we read everything and reply within a few days.', map: 'Map placeholder - embed a map once the office address is confirmed.', office: 'Office', follow: 'Follow us', subjects: ['General inquiry', 'Volunteering', 'Donations & membership', 'Partnership', 'Press & media', 'Other'] },
  bn: { title: 'যোগাযোগ করুন', sub: 'প্রশ্ন, অংশীদারিত্বের ধারণা, প্রেস, বা শুধু হ্যালো বলতে চান - আমরা সব পড়ি এবং কয়েক দিনের মধ্যে উত্তর দিই।', map: 'মানচিত্র প্লেসহোল্ডার - অফিসের ঠিকানা নিশ্চিত হলে মানচিত্র যোগ করুন।', office: 'অফিস', follow: 'আমাদের অনুসরণ করুন', subjects: ['সাধারণ অনুসন্ধান', 'স্বেচ্ছাসেবা', 'দান ও সদস্যপদ', 'অংশীদারিত্ব', 'প্রেস ও মিডিয়া', 'অন্যান্য'] },
};

const socials = [[Facebook, site.socials.facebook, 'Facebook'], [Instagram, site.socials.instagram, 'Instagram'], [Youtube, site.socials.youtube, 'YouTube'], [Linkedin, site.socials.linkedin, 'LinkedIn']];

export default function Contact() {
  const { t, tx, lang } = useLang();
  const c = copy[lang] || copy.en;
  usePageMeta(t('nav.contact'), c.sub);
  const form = useForm({ name: '', email: '', phone: '', subject: '', message: '' }, { name: 'required', email: 'email', subject: 'required', message: 'required' });
  const { values: v, errors: e, onChange } = form;

  return (
    <>
      <PageHero eyebrow={t('nav.contact')} title={c.title} sub={c.sub} />
      <section className="pb-20 lg:pb-28">
        <div className="container-x grid gap-10 lg:grid-cols-12">
          <div className="space-y-6 lg:col-span-5">
            <Reveal className="card-hc p-7">
              <h2 className="text-xs font-bold uppercase tracking-[0.18em]">{c.office}</h2>
              <ul className="mt-4 space-y-4">
                <li className="flex items-start gap-3"><span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#FDE01A]"><MapPin className="h-5 w-5" /></span><span className="text-black/75">{tx(site.address)}</span></li>
                <li className="flex items-center gap-3"><span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#FDE01A]"><Mail className="h-5 w-5" /></span><a href={`mailto:${site.email}`} className="font-semibold hover:underline">{site.email}</a></li>
                <li className="flex items-center gap-3"><span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#FDE01A]"><Phone className="h-5 w-5" /></span><a href="tel:+8801000000000" className="font-semibold hover:underline">{site.phone}</a></li>
              </ul>
              <h2 className="mt-8 text-xs font-bold uppercase tracking-[0.18em]">{c.follow}</h2>
              <div className="mt-3 flex gap-2">
                {socials.map(([Icon, href, label]) => <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label} className="inline-flex h-11 w-11 items-center justify-center rounded-full border-2 border-black transition-colors hover:bg-black hover:text-white"><Icon className="h-5 w-5" /></a>)}
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="flex aspect-[4/3] items-center justify-center rounded-3xl border-2 border-dashed border-black bg-[repeating-linear-gradient(45deg,#F5F5F5_0_12px,#FFFFFF_12px_24px)] p-8 text-center" role="img" aria-label={c.map}>
                <div><MapPin className="mx-auto h-10 w-10" /><p className="mt-3 max-w-xs text-sm font-medium text-black/60">{c.map}</p></div>
              </div>
            </Reveal>
          </div>

          <Reveal className="lg:col-span-7">
            {form.status === 'success' ? <FormSuccess onReset={form.reset} /> : (
              <form onSubmit={form.submit} noValidate className="card-hc grid gap-6 p-7 sm:grid-cols-2 sm:p-10">
                <FormField label={t('form.name')} name="name" value={v.name} onChange={onChange} error={e.name} required />
                <FormField label={t('form.email')} name="email" type="email" value={v.email} onChange={onChange} error={e.email} required />
                <FormField label={t('form.phone')} name="phone" type="tel" value={v.phone} onChange={onChange} />
                <FormField label={t('form.subject')} name="subject" type="select" value={v.subject} onChange={onChange} error={e.subject} required options={[{ value: '', label: t('form.select'), disabled: true }, ...c.subjects.map((s) => ({ value: s, label: s }))]} />
                <FormField label={t('form.message')} name="message" type="textarea" value={v.message} onChange={onChange} error={e.message} required className="sm:col-span-2" />
                <button type="submit" disabled={form.status === 'submitting'} className="btn-dark sm:col-span-2 disabled:opacity-60">{form.status === 'submitting' ? t('common.submitting') : t('common.submit')} <ArrowRight className="h-4 w-4" /></button>
              </form>
            )}
          </Reveal>
        </div>
      </section>
    </>
  );
}