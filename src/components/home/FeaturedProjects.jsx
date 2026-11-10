import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SectionHeading from '@/components/common/SectionHeading';
import Reveal from '@/components/common/Reveal';
import ProjectCard from '@/components/cards/ProjectCard';
import { projects } from '@/data/projects';
import { useLang } from '@/lib/i18n';

export default function FeaturedProjects() {
  const { t } = useLang();
  const featured = projects.filter((p) => p.featured).slice(0, 3);
  return (
    <section className="py-20 lg:py-28" id="projects">
      <div className="container-x">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading eyebrow={t('home.projects.eyebrow')} title={t('home.projects.title')} />
          <Reveal><Link to="/about/projects" className="btn-outline">{t('home.projects.cta')} <ArrowRight className="h-4 w-4" /></Link></Reveal>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featured.map((p, i) => <Reveal key={p.slug} delay={i * 0.08} className="h-full"><ProjectCard project={p} /></Reveal>)}
        </div>
      </div>
    </section>
  );
}