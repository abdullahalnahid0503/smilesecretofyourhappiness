import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, UserCheck } from 'lucide-react';
import { useLang } from '@/lib/i18n';
import { cn } from '@/lib/utils';

const statusStyle = { open: 'bg-[#FDE01A] text-black', upcoming: 'bg-black text-white', closed: 'bg-black/10 text-black/60' };
const statusLabel = { open: { en: 'Open', bn: 'চলমান' }, upcoming: { en: 'Upcoming', bn: 'আসছে' }, closed: { en: 'Closed', bn: 'বন্ধ' } };

export default function ProgramCard({ program }) {
  const { t, tx } = useLang();
  return (
    <article className="card-hc flex h-full flex-col p-6">
      <div className="flex items-center justify-between gap-3">
        <span className="text-xs font-semibold uppercase tracking-wider text-black/55">{program.area}</span>
        <span className={cn('rounded-full px-3 py-1 text-xs font-bold', statusStyle[program.status])}>{tx(statusLabel[program.status])}</span>
      </div>
      <h3 className="mt-3 text-xl font-bold leading-snug">{tx(program.title)}</h3>
      <p className="mt-3 flex-1 text-[15px] leading-relaxed text-black/70">{tx(program.desc)}</p>
      <ul className="mt-5 space-y-1.5 text-sm text-black/70">
        <li className="flex items-center gap-2"><Clock className="h-4 w-4" /> {tx(program.duration)}</li>
        <li className="flex items-center gap-2"><UserCheck className="h-4 w-4" /> {tx(program.eligibility)}</li>
      </ul>
      <Link to={program.status === 'closed' ? '/contact' : `/connect/volunteer?program=${program.id}`} className={cn('mt-6 w-full', program.status === 'open' ? 'btn-dark' : 'btn-outline')}>
        {program.status === 'open' ? t('common.applyNow') : t('common.learnMore')}
      </Link>
    </article>
  );
}