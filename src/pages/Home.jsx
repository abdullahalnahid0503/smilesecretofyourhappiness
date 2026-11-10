import React from 'react';
import { usePageMeta } from '@/lib/usePageMeta';
import { useLang } from '@/lib/i18n';
import Hero from '@/components/home/Hero';
import StatsBand from '@/components/common/StatsBand';
import WhoWeAre from '@/components/home/WhoWeAre';
import WhatWeDo from '@/components/home/WhatWeDo';
import FeaturedProjects from '@/components/home/FeaturedProjects';
import SchoolSection from '@/components/home/SchoolSection';
import SkillSection from '@/components/home/SkillSection';
import CTABand from '@/components/common/CTABand';
import LatestBlogs from '@/components/home/LatestBlogs';
import GalleryPreview from '@/components/home/GalleryPreview';

export default function Home() {
  const { t } = useLang();
  usePageMeta(null, t('hero.sub'));
  return (
    <>
      <Hero />
      <StatsBand />
      <WhoWeAre />
      <WhatWeDo />
      <FeaturedProjects />
      <SchoolSection />
      <SkillSection />
      <CTABand variant="yellow" title={t('home.volunteer.title')} body={t('home.volunteer.body')} primary={{ to: '/connect/volunteer', label: t('hero.cta1') }} secondary={{ to: '/connect', label: t('common.connectWithUs') }} />
      <CTABand variant="black" title={t('home.donate.title')} body={t('home.donate.body')} primary={{ to: '/donate', label: t('home.donate.cta') }} secondary={{ to: '/connect/regular-member', label: t('nav.regular') }} />
      <LatestBlogs />
      <GalleryPreview />
      <CTABand variant="white" title={t('home.final.title')} body={t('home.final.body')} primary={{ to: '/connect/volunteer', label: t('hero.cta1') }} secondary={{ to: '/donate', label: t('common.donateNow') }} />
    </>
  );
}