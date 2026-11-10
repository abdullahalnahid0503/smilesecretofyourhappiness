import React, { useState } from 'react';
import PageHero from '@/components/common/PageHero';
import FilterChips from '@/components/common/FilterChips';
import Reveal from '@/components/common/Reveal';
import ProjectCard from '@/components/cards/ProjectCard';
import CTABand from '@/components/common/CTABand';
import { projects, projectCategories } from '@/data/projects';
import { useLang } from '@/lib/i18n';
import { usePageMeta } from '@/lib/usePageMeta';

const copy = {
  en: { title: 'Projects & Activities', sub: 'Every project we have carried out, with what we set out to do and what actually happened. We publish the numbers even when they are smaller than we hoped.', cta: 'Have a project idea for your community?', ctaBody: 'Branches fund small proposals from volunteers every quarter.' },
  bn: { title: 'প্রজেক্ট ও কার্যক্রম', sub: 'আমরা যত প্রজেক্ট করেছি - কী করতে চেয়েছিলাম এবং বাস্তবে কী হয়েছে। সংখ্যা আশার চেয়ে ছোট হলেও আমরা প্রকাশ করি।', cta: 'আপনার কমিউনিটির জন্য কোনো প্রজেক্টের ধারণা আছে?', ctaBody: 'শাখাগুলো প্রতি ত্রৈমাসিকে স্বেচ্ছাসেবকদের ছোট প্রস্তাবে অর্থায়ন করে।' },
};

export default function Projects() {
  const { t, tx, lang } = useLang();
  const c = copy[lang] || copy.en;
  const [cat, setCat] = useState('all');
  usePageMeta(t('nav.projects'), c.sub);
  const list = projects.filter((p) => cat === 'all' || p.category === cat).sort((a, b) => b.year - a.year);
  return (
    <>
      <PageHero eyebrow={t('nav.about')} title={c.title} sub={c.sub} />
      <section className="pb-20 lg:pb-28">
        <div className="container-x">
          <FilterChips label={t('common.category')} allLabel={t('common.all')} value={cat} onChange={setCat} options={projectCategories.map((pc) => ({ value: pc.id, label: tx(pc.label) }))} />
          {list.length === 0 ? (
            <p className="mt-16 text-center text-lg text-black/60">{t('common.noResults')}</p>
          ) : (
            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {list.map((p, i) => <Reveal key={p.slug} delay={(i % 3) * 0.06} className="h-full"><ProjectCard project={p} /></Reveal>)}
            </div>
          )}
        </div>
      </section>
      <CTABand variant="black" title={c.cta} body={c.ctaBody} primary={{ to: '/contact', label: t('nav.contact') }} secondary={{ to: '/connect/volunteer', label: t('hero.cta1') }} />
    </>
  );
}