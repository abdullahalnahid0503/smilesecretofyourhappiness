import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { Image } from '@/components/ui/image';
import SectionHeading from '@/components/common/SectionHeading';
import Reveal from '@/components/common/Reveal';
import { pictures } from '@/data/gallery';
import { useLang } from '@/lib/i18n';
import { cn } from '@/lib/utils';

export default function GalleryPreview() {
  const { t } = useLang();
  const items = pictures.slice(0, 5);
  return (
    <section className="bg-[#F5F5F5] py-20 lg:py-28" id="gallery">
      <div className="container-x">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading eyebrow={t('home.gallery.eyebrow')} title={t('home.gallery.title')} />
          <Reveal><Link to="/gallery" className="btn-dark">{t('home.gallery.cta')} <ArrowUpRight className="h-4 w-4" /></Link></Reveal>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-4 md:h-[620px] md:grid-cols-4 md:grid-rows-2">
          {items.map((p, i) => (
            <Reveal key={p.id} delay={i * 0.05} className={cn('h-full', i === 0 ? 'col-span-2 md:col-span-2 md:row-span-2' : '')}>
              <Link to="/gallery/pictures" className="group relative block h-full overflow-hidden rounded-3xl border-2 border-black">
                <Image src={p.src} alt={p.alt} className={cn('h-full w-full object-cover transition-transform duration-700 group-hover:scale-105', i === 0 ? 'aspect-[16/9] md:aspect-auto' : 'aspect-square md:aspect-auto')} />
                <span className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <span className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-2 p-4 opacity-0 translate-y-2 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <span className="text-sm font-semibold text-white">{p.event}</span>
                  <span className="shrink-0 rounded-full bg-[#FDE01A] px-2.5 py-0.5 text-xs font-bold text-black">{p.year}</span>
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}