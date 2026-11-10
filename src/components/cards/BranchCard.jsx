import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { MapPin, ChevronDown } from 'lucide-react';
import { Image } from '@/components/ui/image';
import OrgChart from '@/components/orgchart/OrgChart';
import { useLang } from '@/lib/i18n';

export default function BranchCard({ branch }) {
  const { t, tx } = useLang();
  const [open, setOpen] = useState(false);
  return (
    <article className="card-hc overflow-hidden" id={branch.slug}>
      <div className="grid lg:grid-cols-12">
        <Image src={branch.image} alt={tx(branch.name)} className="aspect-[3/2] w-full object-cover lg:col-span-5 lg:aspect-auto lg:h-full" />
        <div className="flex flex-col p-7 lg:col-span-7 lg:p-10">
          <div className="flex flex-wrap items-center gap-3 text-sm font-semibold text-black/60">
            <span className="flex items-center gap-1"><MapPin className="h-4 w-4" /> {tx(branch.location)}</span>
            <span aria-hidden="true">·</span>
            <span>Est. {branch.founded}</span>
          </div>
          <h3 className="mt-3 text-3xl font-extrabold leading-tight">{tx(branch.name)}</h3>
          <p className="mt-4 text-black/70">{tx(branch.description)}</p>
          <p className="mt-6 text-xs font-bold uppercase tracking-[0.18em]">{t('common.keyActivities')}</p>
          <ul className="mt-2 flex flex-wrap gap-2">
            {branch.activities.map((a, i) => <li key={i} className="rounded-full bg-[#F5F5F5] px-3 py-1 text-sm font-medium">{tx(a)}</li>)}
          </ul>
          <button type="button" onClick={() => setOpen((o) => !o)} aria-expanded={open} aria-controls={`committee-${branch.slug}`} className="btn-dark mt-8 self-start">
            {open ? t('common.hideCommittee') : t('common.viewCommittee')} <ChevronDown className={`h-4 w-4 transition-transform ${open ? 'rotate-180' : ''}`} />
          </button>
        </div>
      </div>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div id={`committee-${branch.slug}`} initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.4 }} className="overflow-hidden border-t-2 border-black bg-[#F5F5F5]">
            <div className="px-6 py-12 lg:px-12">
              <OrgChart tiers={branch.committee} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </article>
  );
}