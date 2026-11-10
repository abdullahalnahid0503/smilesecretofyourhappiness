import React, { useState } from 'react';
import { Search } from 'lucide-react';
import PageHero from '@/components/common/PageHero';
import FilterChips from '@/components/common/FilterChips';
import Reveal from '@/components/common/Reveal';
import BlogCard from '@/components/cards/BlogCard';
import { blogs, blogCategories } from '@/data/blogs';
import { useLang } from '@/lib/i18n';
import { usePageMeta } from '@/lib/usePageMeta';

const copy = {
  en: { title: 'Blogs', sub: 'Stories, reflections and honest reports from volunteers, teachers and the people we work with.' },
  bn: { title: 'ব্লগ', sub: 'স্বেচ্ছাসেবক, শিক্ষক এবং যাদের সাথে আমরা কাজ করি - তাদের গল্প, ভাবনা ও সৎ প্রতিবেদন।' },
};

export default function Blogs() {
  const { t, tx, lang } = useLang();
  const c = copy[lang] || copy.en;
  const [cat, setCat] = useState('all');
  const [q, setQ] = useState('');
  usePageMeta(t('nav.blogs'), c.sub);
  const list = blogs
    .filter((b) => cat === 'all' || b.category === cat)
    .filter((b) => { const s = q.trim().toLowerCase(); return !s || tx(b.title).toLowerCase().includes(s) || tx(b.excerpt).toLowerCase().includes(s) || b.author.toLowerCase().includes(s); })
    .sort((a, b) => new Date(b.date) - new Date(a.date));

  return (
    <>
      <PageHero eyebrow={t('nav.blogs')} title={c.title} sub={c.sub} />
      <section className="pb-20 lg:pb-28">
        <div className="container-x">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <FilterChips allLabel={t('common.all')} value={cat} onChange={setCat} options={blogCategories.map((b) => ({ value: b, label: b }))} />
            <label className="relative block w-full lg:max-w-xs">
              <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-black/50" />
              <input type="search" value={q} onChange={(e) => setQ(e.target.value)} placeholder={t('common.search')} className="w-full rounded-full border-2 border-black bg-white py-2.5 pl-11 pr-4 text-sm placeholder:text-black/40 focus:outline-none" />
            </label>
          </div>
          {list.length === 0 ? <p className="mt-16 text-center text-lg text-black/60">{t('common.noResults')}</p> : (
            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {list.map((b, i) => <Reveal key={b.slug} delay={(i % 3) * 0.06} className="h-full"><BlogCard post={b} /></Reveal>)}
            </div>
          )}
        </div>
      </section>
    </>
  );
}