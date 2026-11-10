import React, { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';
import { site } from '@/data/site';
import { useLang } from '@/lib/i18n';
import { cn } from '@/lib/utils';

function Counter({ value, suffix }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const tick = (now) => {
      const p = Math.min((now - start) / 1400, 1);
      setN(Math.round(value * (1 - Math.pow(1 - p, 3))));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, value]);
  return <span ref={ref}>{n.toLocaleString('en-US')}{suffix}</span>;
}

export default function StatsBand({ dark = true, className }) {
  const { t } = useLang();
  const line = dark ? 'border-white/15' : 'border-black/10';
  return (
    <section className={cn(dark ? 'bg-black text-white' : 'bg-white text-black border-y-2 border-black', className)} aria-label={t('home.impact.eyebrow')}>
      <div className="container-x grid grid-cols-2 lg:grid-cols-4">
        {site.stats.map((s, i) => (
          <div
            key={s.key}
            className={cn(
              'flex flex-col items-center justify-center px-6 py-12 text-center lg:px-8 lg:py-16',
              line,
              i % 2 === 1 && 'border-l-2',
              i >= 2 && 'border-t-2',
              'lg:border-t-0',
              i !== 0 && 'lg:border-l-2',
            )}
          >
            <span className="font-heading text-4xl font-black leading-none lg:text-6xl"><Counter value={s.value} suffix={s.suffix} /></span>
            <span className={cn('mt-3 text-xs font-semibold uppercase tracking-[0.18em] lg:text-sm', dark ? 'text-[#FDE01A]' : 'text-black/60')}>{t(s.key)}</span>
          </div>
        ))}
      </div>
    </section>
  );
}