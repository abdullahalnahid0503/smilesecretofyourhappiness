import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Video } from 'lucide-react';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { Image } from '@/components/ui/image';
import PageHero from '@/components/common/PageHero';
import Reveal from '@/components/common/Reveal';
import VideoCard from '@/components/cards/VideoCard';
import { videos } from '@/data/gallery';
import { useLang } from '@/lib/i18n';
import { usePageMeta } from '@/lib/usePageMeta';

export default function GalleryVideos() {
  const { t, tx } = useLang();
  const [active, setActive] = useState(null);
  usePageMeta(t('common.videos'));
  return (
    <>
      <PageHero eyebrow={t('nav.gallery')} title={t('common.videos')}>
        <Link to="/gallery" className="btn-outline"><ArrowLeft className="h-4 w-4" /> {t('common.backTo')} {t('nav.gallery')}</Link>
        <Link to="/gallery/pictures" className="btn-dark">{t('common.pictures')}</Link>
      </PageHero>
      <section className="pb-20 lg:pb-28">
        <div className="container-x grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {videos.map((v, i) => <Reveal key={v.id} delay={(i % 3) * 0.06} className="h-full"><VideoCard video={v} onPlay={setActive} /></Reveal>)}
        </div>
      </section>

      <Dialog open={!!active} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent className="max-w-4xl border-2 border-black p-0 overflow-hidden">
          {active && (
            <>
              <DialogTitle className="sr-only">{tx(active.title)}</DialogTitle>
              {active.url ? (
                <iframe src={active.url} title={tx(active.title)} className="aspect-video w-full" allow="autoplay; fullscreen" allowFullScreen />
              ) : (
                <div className="relative aspect-video w-full bg-black">
                  <Image src={active.thumbnail} alt="" className="h-full w-full object-cover opacity-40" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6 text-center text-white">
                    <Video className="h-12 w-12 text-[#FDE01A]" />
                    <p className="text-xl font-bold">{tx(active.title)}</p>
                    <p className="max-w-md text-sm text-white/70">{t('common.placeholder')}</p>
                  </div>
                </div>
              )}
              <div className="p-6"><p className="text-black/70">{tx(active.desc)}</p></div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}