import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Linkedin } from 'lucide-react';
import Avatar from '@/components/common/Avatar';
import { useLang } from '@/lib/i18n';
import { cn } from '@/lib/utils';

// One person in an organizational chart. `detailed` shows biography + links (national committee).
export default function OrgNode({ member, detailed = false, emphasis = false, index = 0 }) {
  const { tx } = useLang();
  return (
    <motion.article
      initial={{ opacity: 0, y: 20, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
      className={cn('card-hc group flex flex-col items-center p-6 text-center', emphasis ? 'w-full max-w-sm bg-[#FDE01A]' : detailed ? 'w-full max-w-xs' : 'w-full max-w-[220px]')}
    >
      <Avatar name={member.name} photo={member.photo} size={emphasis ? 'lg' : detailed ? 'md' : 'sm'} className={emphasis ? 'bg-white' : ''} />
      <h3 className={cn('mt-4 font-heading font-bold leading-tight', emphasis ? 'text-2xl' : 'text-lg')}>{member.name}</h3>
      <p className={cn('mt-1 text-sm font-semibold uppercase tracking-wide', emphasis ? 'text-black/70' : 'text-black/55')}>{tx(member.position)}</p>
      {detailed && member.bio && <p className="mt-3 text-sm leading-relaxed text-black/70">{tx(member.bio)}</p>}
      {detailed && member.links && (member.links.facebook || member.links.linkedin) && (
        <div className="mt-4 flex gap-2">
          {member.links.facebook && <a href={member.links.facebook} target="_blank" rel="noreferrer" aria-label={`${member.name} on Facebook`} className="rounded-full border-2 border-black p-2 transition-colors hover:bg-black hover:text-white"><Facebook className="h-4 w-4" /></a>}
          {member.links.linkedin && <a href={member.links.linkedin} target="_blank" rel="noreferrer" aria-label={`${member.name} on LinkedIn`} className="rounded-full border-2 border-black p-2 transition-colors hover:bg-black hover:text-white"><Linkedin className="h-4 w-4" /></a>}
        </div>
      )}
    </motion.article>
  );
}