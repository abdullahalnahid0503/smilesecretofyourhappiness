import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Image } from '@/components/ui/image';
import Reveal from '@/components/common/Reveal';
import { images } from '@/data/images';
import { site } from '@/data/site';
import { useLang } from '@/lib/i18n';

export default function WhoWeAre() {
  const { t } = useLang();
  return (
    <section className="py-20 lg:py-28" id="who-we-are">
      <div className="container-x grid items-center gap-12 lg:grid-cols-12">
        <Reveal className="relative lg:col-span-5">
          <motion.div initial={{ scale: 1.0 }} whileInView={{ scale: 1.03 }} viewport={{ once: true }} transition={{ duration: 1.2 }} className="overflow-hidden rounded-[2rem] border-2 border-black">
            <Image src={images.whoWeAre} alt="Volunteers planning a community event" className="aspect-[4/3] w-full object-cover" />
          </motion.div>
          <div className="absolute -bottom-6 -right-2 rounded-2xl border-2 border-black bg-[#FDE01A] px-5 py-3 shadow-[6px_6px_0_0_#000] sm:right-6">
            <p className="font-heading text-3xl font-black leading-none">{new Date().getFullYear() - site.founded}+</p>
            <p className="text-xs font-semibold uppercase tracking-wider">years of service</p>
          </div>
        </Reveal>
        <div className="lg:col-span-6 lg:col-start-7">
          <Reveal><p className="eyebrow mb-4">{t('home.who.eyebrow')}</p></Reveal>
          <Reveal delay={0.05}><h2 className="text-3xl font-extrabold leading-[1.05] sm:text-4xl lg:text-5xl">{t('home.who.title')}</h2></Reveal>
          <Reveal delay={0.1}><p className="mt-6 text-lg leading-relaxed text-black/70">{t('home.who.body1')}</p></Reveal>
          <Reveal delay={0.15}><p className="mt-4 text-lg leading-relaxed text-black/70">{t('home.who.body2')}</p></Reveal>
          <Reveal delay={0.2}><Link to="/about" className="btn-dark mt-8">{t('home.who.cta')} <ArrowRight className="h-4 w-4" /></Link></Reveal>
        </div>
      </div>
    </section>
  );
}