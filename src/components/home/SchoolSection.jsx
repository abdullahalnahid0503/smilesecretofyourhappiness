import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Heart } from 'lucide-react';
import { Image } from '@/components/ui/image';
import Reveal from '@/components/common/Reveal';
import { images } from '@/data/images';
import { useLang } from '@/lib/i18n';

export default function SchoolSection() {
  const { t } = useLang();
  return (
    <section className="bg-black py-20 text-white lg:py-28" id="school">
      <div className="container-x grid items-center gap-12 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <Reveal><p className="eyebrow mb-4 text-white">{t('home.school.eyebrow')}</p></Reveal>
          <Reveal delay={0.05}><h2 className="font-heading text-4xl font-extrabold leading-[1.1] sm:text-5xl lg:text-6xl">{t('home.school.title')}</h2></Reveal>
          <Reveal delay={0.1}><p className="mt-6 max-w-xl text-lg leading-relaxed text-white/75">{t('home.school.body')}</p></Reveal>
          <Reveal delay={0.15} className="mt-8 flex flex-wrap gap-3">
            <Link to="/about/primary-school" className="btn-primary">{t('home.school.cta')} <ArrowRight className="h-4 w-4" /></Link>
            <Link to="/about/primary-school#donate" className="btn-outline-light"><Heart className="h-4 w-4" /> {t('home.school.cta2')}</Link>
          </Reveal>
        </div>
        <Reveal className="grid grid-cols-5 gap-4 lg:col-span-6">
          <Image src={images.schoolClassroom} alt="Children in the classroom" className="col-span-3 aspect-[4/3] w-full self-end overflow-hidden rounded-3xl border-2 border-white/20 object-cover" />
          <Image src={images.childPortrait} alt="A young student holding a notebook" className="col-span-2 aspect-[4/5] w-full overflow-hidden rounded-3xl border-2 border-[#FDE01A] object-cover" />
        </Reveal>
      </div>
    </section>
  );
}