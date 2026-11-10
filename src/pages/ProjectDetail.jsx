import React, { useState } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { ArrowLeft, MapPin, CalendarDays, Users, Tag, Check } from 'lucide-react';
import { Image } from '@/components/ui/image';
import Reveal from '@/components/common/Reveal';
import ProjectCard from '@/components/cards/ProjectCard';
import Lightbox from '@/components/gallery/Lightbox';
import CTABand from '@/components/common/CTABand';
import { projects, projectCategories } from '@/data/projects';
import { useLang } from '@/lib/i18n';
import { usePageMeta } from '@/lib/usePageMeta';

const labels = {
  en: { overview: 'Overview', story: 'The Story', objectives: 'Objectives', activities: 'Activities', impact: 'Impact', gallery: 'Photo Gallery', related: 'Related Projects', support: 'Support work like this', supportBody: 'Projects happen because people give time and money. Both matter.' },
  bn: { overview: 'সারসংক্ষেপ', story: 'গল্প', objectives: 'উদ্দেশ্য', activities: 'কার্যক্রম', impact: 'প্রভাব', gallery: 'ছবির গ্যালারি', related: 'সম্পর্কিত প্রজেক্ট', support: 'এমন কাজে সহায়তা করুন', supportBody: 'মানুষ সময় ও অর্থ দেয় বলেই প্রজেক্ট হয়। দুটোই গুরুত্বপূর্ণ।' },
};

export default function ProjectDetail() {
  const { slug } = useParams();
  const { t, tx, lang } = useLang();
  const L = labels[lang] || labels.en;
  const [lb, setLb] = useState(null);
  const project = projects.find((p) => p.slug === slug);
  usePageMeta(project ? tx(project.title) : t('nav.projects'), project ? tx(project.excerpt) : '');
  if (!project) return <Navigate to="/about/projects" replace />;

  const cat = projectCategories.find((c) => c.id === project.category);
  const related = projects.filter((p) => p.slug !== project.slug && p.category === project.category).concat(projects.filter((p) => p.slug !== project.slug && p.category !== project.category)).slice(0, 3);
  const galleryItems = project.gallery.map((src, i) => ({ id: i, src, alt: `${tx(project.title)} - ${i + 1}`, project: tx(project.title), branch: tx(project.location), year: project.year }));

  return (
    <>
      <section className="relative">
        <Image src={project.image} alt={tx(project.title)} className="h-[55vh] min-h-[380px] w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
        <div className="container-x absolute inset-x-0 bottom-0 pb-12 text-white">
          <Link to="/about/projects" className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-white/80 hover:text-white"><ArrowLeft className="h-4 w-4" /> {t('common.backTo')} {t('nav.projects')}</Link>
          <span className="block w-fit rounded-full bg-[#FDE01A] px-3 py-1 text-xs font-bold uppercase tracking-wider text-black">{tx(cat?.label)}</span>
          <h1 className="mt-4 max-w-4xl text-4xl font-extrabold leading-[1.02] sm:text-5xl lg:text-6xl">{tx(project.title)}</h1>
        </div>
      </section>

      <section className="border-b-2 border-black bg-[#FDE01A]">
        <div className="container-x grid grid-cols-2 gap-y-4 py-6 text-sm font-semibold sm:grid-cols-4">
          <span className="flex items-center gap-2"><CalendarDays className="h-4 w-4" /> {project.date}</span>
          <span className="flex items-center gap-2"><MapPin className="h-4 w-4" /> {tx(project.location)}</span>
          <span className="flex items-center gap-2"><Tag className="h-4 w-4" /> {tx(cat?.label)}</span>
          <span className="flex items-center gap-2"><Users className="h-4 w-4" /> {project.reached.toLocaleString()} {t('common.peopleReached')}</span>
        </div>
      </section>

      <article className="container-x grid gap-14 py-16 lg:grid-cols-12 lg:py-24">
        <div className="space-y-14 lg:col-span-7">
          <Reveal><h2 className="eyebrow mb-4">{L.overview}</h2><p className="text-xl leading-relaxed text-black/80">{tx(project.overview)}</p></Reveal>
          <Reveal><h2 className="eyebrow mb-4">{L.story}</h2><p className="text-lg leading-relaxed text-black/75">{tx(project.story)}</p></Reveal>
          <Reveal><h2 className="eyebrow mb-4">{L.impact}</h2><p className="rounded-3xl border-2 border-black bg-[#F5F5F5] p-7 text-lg font-semibold leading-relaxed">{tx(project.impact)}</p></Reveal>
        </div>
        <aside className="space-y-8 lg:col-span-4 lg:col-start-9">
          <Reveal className="card-hc p-7"><h2 className="text-lg font-extrabold">{L.objectives}</h2><ul className="mt-4 space-y-2.5">{project.objectives.map((o, i) => <li key={i} className="flex gap-2 text-black/75"><Check className="mt-1 h-4 w-4 shrink-0" /> {tx(o)}</li>)}</ul></Reveal>
          <Reveal className="card-hc p-7"><h2 className="text-lg font-extrabold">{L.activities}</h2><ul className="mt-4 space-y-2.5">{project.activities.map((o, i) => <li key={i} className="flex gap-2 text-black/75"><span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#FDE01A] ring-2 ring-black" /> {tx(o)}</li>)}</ul></Reveal>
        </aside>
      </article>

      <section className="bg-[#F5F5F5] py-16 lg:py-24">
        <div className="container-x">
          <h2 className="eyebrow mb-8">{L.gallery}</h2>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
            {galleryItems.map((g, i) => (
              <button key={g.id} type="button" onClick={() => setLb(i)} className="group overflow-hidden rounded-3xl border-2 border-black text-left">
                <Image src={g.src} alt={g.alt} className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </button>
            ))}
          </div>
        </div>
        <Lightbox items={galleryItems} index={lb} onClose={() => setLb(null)} onIndex={setLb} />
      </section>

      <section className="py-16 lg:py-24">
        <div className="container-x">
          <h2 className="eyebrow mb-8">{L.related}</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{related.map((p) => <ProjectCard key={p.slug} project={p} />)}</div>
        </div>
      </section>

      <CTABand variant="black" title={L.support} body={L.supportBody} primary={{ to: '/donate', label: t('common.donateNow') }} secondary={{ to: '/connect/volunteer', label: t('hero.cta1') }} />
    </>
  );
}