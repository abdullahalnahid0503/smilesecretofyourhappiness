import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, MapPin, CalendarDays, Users } from 'lucide-react';
import { Image } from '@/components/ui/image';
import { projectCategories } from '@/data/projects';
import { useLang } from '@/lib/i18n';

export default function ProjectCard({ project }) {
  const { t, tx } = useLang();
  const cat = projectCategories.find((c) => c.id === project.category);
  return (
    <article className="card-hc group flex h-full flex-col overflow-hidden">
      <Link to={`/about/projects/${project.slug}`} className="block overflow-hidden" tabIndex={-1} aria-hidden="true">
        <Image src={project.image} alt={tx(project.title)} className="aspect-[3/2] w-full object-cover transition-transform duration-700 group-hover:scale-105" />
      </Link>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center justify-between gap-3 text-xs font-semibold uppercase tracking-wider">
          <span className="rounded-full bg-[#FDE01A] px-3 py-1">{tx(cat?.label)}</span>
          <span className="flex items-center gap-1 text-black/55"><CalendarDays className="h-3.5 w-3.5" /> {project.date}</span>
        </div>
        <h3 className="mt-4 text-xl font-bold leading-snug"><Link to={`/about/projects/${project.slug}`} className="hover:underline decoration-[#FDE01A] decoration-[3px] underline-offset-4">{tx(project.title)}</Link></h3>
        <p className="mt-2 flex items-center gap-1 text-sm text-black/55"><MapPin className="h-3.5 w-3.5" /> {tx(project.location)}</p>
        <p className="mt-3 flex-1 text-[15px] leading-relaxed text-black/70">{tx(project.excerpt)}</p>
        <div className="mt-5 flex items-center justify-between border-t-2 border-black/10 pt-4">
          <span className="flex items-center gap-1.5 text-sm font-semibold"><Users className="h-4 w-4" /> {project.reached.toLocaleString()} {t('common.peopleReached')}</span>
          <Link to={`/about/projects/${project.slug}`} className="inline-flex items-center gap-1 text-sm font-bold group-hover:text-black">{t('common.viewProject')} <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></Link>
        </div>
      </div>
    </article>
  );
}