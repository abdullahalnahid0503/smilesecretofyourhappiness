import React from 'react';
import { Camera, Video } from 'lucide-react';
import PageHero from '@/components/common/PageHero';
import OptionCard from '@/components/cards/OptionCard';
import { images } from '@/data/images';
import { pictures, videos } from '@/data/gallery';
import { useLang } from '@/lib/i18n';
import { usePageMeta } from '@/lib/usePageMeta';

const copy = {
  en: { title: 'Gallery', sub: 'Moments from the field - photographed with permission, shared with pride.', pics: 'Photographs from projects, branches and events.', vids: 'Short films and highlights from our work.', count: (n, w) => `${n} ${w}` },
  bn: { title: 'গ্যালারি', sub: 'মাঠের মুহূর্ত - অনুমতি নিয়ে তোলা, গর্বের সাথে শেয়ার করা।', pics: 'প্রজেক্ট, শাখা ও ইভেন্টের ছবি।', vids: 'আমাদের কাজের স্বল্পদৈর্ঘ্য চলচ্চিত্র ও হাইলাইটস।', count: (n, w) => `${n} ${w}` },
};

export default function Gallery() {
  const { t, lang } = useLang();
  const c = copy[lang] || copy.en;
  usePageMeta(t('nav.gallery'), c.sub);
  return (
    <>
      <PageHero dark eyebrow={t('nav.gallery')} title={c.title} sub={c.sub} />
      <section className="py-16 lg:py-24">
        <div className="container-x grid gap-6 md:grid-cols-2">
          <OptionCard to="/gallery/pictures" title={t('common.pictures')} desc={`${c.pics} · ${c.count(pictures.length, t('common.pictures'))}`} image={images.schoolSupplies} icon={Camera} index={0} />
          <OptionCard to="/gallery/videos" title={t('common.videos')} desc={`${c.vids} · ${c.count(videos.length, t('common.videos'))}`} image={images.volunteerStories} icon={Video} index={1} />
        </div>
      </section>
    </>
  );
}