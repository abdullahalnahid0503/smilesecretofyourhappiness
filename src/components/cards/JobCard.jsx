import React from 'react';
import { MapPin, Briefcase, Building2, Check } from 'lucide-react';
import { useLang } from '@/lib/i18n';

export default function JobCard({ job, onApply }) {
  const { t, tx } = useLang();
  return (
    <article className="card-hc flex h-full flex-col p-7">
      <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-wider text-black/60">
        <span className="flex items-center gap-1 rounded-full bg-[#FDE01A] px-3 py-1 text-black"><Building2 className="h-3.5 w-3.5" /> {job.department}</span>
        <span className="flex items-center gap-1"><MapPin className="h-3.5 w-3.5" /> {tx(job.location)}</span>
        <span className="flex items-center gap-1"><Briefcase className="h-3.5 w-3.5" /> {tx(job.type)}</span>
      </div>
      <h3 className="mt-4 text-2xl font-extrabold leading-tight">{tx(job.title)}</h3>
      <p className="mt-3 text-black/70">{tx(job.desc)}</p>
      <ul className="mt-4 flex-1 space-y-1.5 text-sm">
        {job.requirements.map((r, i) => <li key={i} className="flex items-start gap-2"><Check className="mt-0.5 h-4 w-4 shrink-0 text-black" /> {tx(r)}</li>)}
      </ul>
      <button type="button" onClick={() => onApply(job)} className="btn-dark mt-6 w-full">{t('common.applyNow')}</button>
    </article>
  );
}