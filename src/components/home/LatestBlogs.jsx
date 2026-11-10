import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SectionHeading from '@/components/common/SectionHeading';
import Reveal from '@/components/common/Reveal';
import BlogCard from '@/components/cards/BlogCard';
import { blogs } from '@/data/blogs';
import { useLang } from '@/lib/i18n';

export default function LatestBlogs() {
  const { t } = useLang();
  const latest = [...blogs].sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 3);
  return (
    <section className="py-20 lg:py-28" id="blogs">
      <div className="container-x">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading eyebrow={t('home.blogs.eyebrow')} title={t('home.blogs.title')} />
          <Reveal><Link to="/blogs" className="btn-outline">{t('home.blogs.cta')} <ArrowRight className="h-4 w-4" /></Link></Reveal>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {latest.map((p, i) => <Reveal key={p.slug} delay={i * 0.08} className="h-full"><BlogCard post={p} /></Reveal>)}
        </div>
      </div>
    </section>
  );
}