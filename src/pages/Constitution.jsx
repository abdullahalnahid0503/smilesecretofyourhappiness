import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import PageHero from '@/components/common/PageHero';
import Reveal from '@/components/common/Reveal';
import CTABand from '@/components/common/CTABand';
import { constitution } from '@/data/constitution';
import { useLang } from '@/lib/i18n';
import { usePageMeta } from '@/lib/usePageMeta';

export default function Constitution() {
  const { t, tx } = useLang();
  usePageMeta(t('nav.constitution'), tx(constitution.orgName));

  return (
    <>
      <PageHero
        dark
        eyebrow={t('nav.about')}
        title={tx(constitution.title)}
        sub={`${tx(constitution.orgName)} — "${tx(constitution.slogan)}"`}
      >
        <Link to="/about" className="btn-outline-light"><ArrowLeft className="h-4 w-4" /> {t('nav.about')}</Link>
      </PageHero>

      <section className="py-16 lg:py-24">
        <div className="container-x">
          <Reveal className="mb-12">
            <p className="eyebrow mb-4">{t('nav.constitution')}</p>
            <div className="flex flex-wrap gap-2">
              {constitution.sections.map((s, i) => (
                <a
                  key={i}
                  href={`#sec-${i + 1}`}
                  className="inline-flex items-center gap-2 rounded-full border-2 border-black/15 px-4 py-2 text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 hover:border-[#FDE01A] hover:bg-[#FDE01A] hover:text-black"
                >
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#FDE01A] font-heading text-xs font-black text-black">
                    {tx(s.num)}
                  </span>
                  {tx(s.title)}
                </a>
              ))}
            </div>
          </Reveal>

          <div className="space-y-6">
            {constitution.sections.map((s, i) => (
              <Reveal key={i} delay={Math.min(i * 0.03, 0.3)}>
                <article id={`sec-${i + 1}`} className="card-hc scroll-mt-28 p-7 lg:p-9">
                  <div className="flex items-start gap-5">
                    <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#FDE01A] font-heading text-2xl font-black text-black sm:h-16 sm:w-16 sm:text-3xl">
                      {tx(s.num)}
                    </span>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-black/55">{tx(s.number)}</p>
                      <h2 className="mt-1 text-2xl font-extrabold sm:text-3xl">{tx(s.title)}</h2>
                    </div>
                  </div>
                  <p className="mt-6 whitespace-pre-line text-lg leading-relaxed text-black/80">{tx(s.body)}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABand variant="yellow" title={t('home.final.title')} body={t('home.final.body')} primary={{ to: '/connect/volunteer', label: t('hero.cta1') }} secondary={{ to: '/about', label: t('nav.about') }} />
    </>
  );
}