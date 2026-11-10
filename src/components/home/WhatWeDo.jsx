import React from 'react';
import SectionHeading from '@/components/common/SectionHeading';
import Reveal from '@/components/common/Reveal';
import { site } from '@/data/site';
import { icons } from '@/lib/icons';
import { useLang } from '@/lib/i18n';

export default function WhatWeDo() {
  const { t, tx } = useLang();
  return (
    <section className="bg-[#F5F5F5] py-20 lg:py-28" id="what-we-do">
      <div className="container-x">
        <SectionHeading eyebrow={t('home.what.eyebrow')} title={t('home.what.title')} />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {site.whatWeDo.map((item, i) => {
            const Icon = icons[item.icon];
            return (
              <Reveal key={item.icon} delay={i * 0.06} className="h-full">
                <article className="card-hc group flex h-full flex-col p-7">
                  <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl border-2 border-black bg-white transition-colors duration-300 group-hover:bg-[#FDE01A]">
                    <Icon className="h-7 w-7" />
                  </span>
                  <h3 className="mt-6 text-2xl font-extrabold leading-tight">{tx(item.title)}</h3>
                  <p className="mt-3 text-black/65">{tx(item.desc)}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}