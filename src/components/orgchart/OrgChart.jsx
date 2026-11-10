import React from 'react';
import { motion } from 'framer-motion';
import OrgNode from '@/components/orgchart/OrgNode';
import { useLang } from '@/lib/i18n';

// Hierarchical organizational chart. `tiers` = [{ label: {en,bn}, members: [...] }] rendered top → bottom,
// connected by a vertical yellow spine. Members in one tier sit side by side and stack on mobile.
export default function OrgChart({ tiers, detailed = false }) {
  const { tx } = useLang();
  return (
    <div className="relative mx-auto max-w-6xl">
      <div className="absolute left-1/2 top-0 hidden h-full w-[3px] -translate-x-1/2 bg-[#FDE01A] sm:block" aria-hidden="true" />
      <ol className="relative space-y-12">
        {tiers.map((tier, ti) => (
          <li key={ti} className="relative">
            <motion.div
              initial={{ opacity: 0, scaleX: 0.6 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
              className="relative z-10 mx-auto mb-6 w-fit rounded-full border-2 border-black bg-white px-5 py-1.5 text-xs font-bold uppercase tracking-[0.18em]"
            >
              {tx(tier.label)}
            </motion.div>
            <div className="relative z-10 flex flex-wrap items-stretch justify-center gap-5">
              {tier.members.map((m, mi) => (
                <OrgNode key={m.name + mi} member={m} detailed={detailed} emphasis={ti === 0} index={mi} />
              ))}
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}