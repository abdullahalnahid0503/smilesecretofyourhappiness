import React, { useState } from 'react';
import { Facebook, Linkedin, Twitter, Link2, Check } from 'lucide-react';
import { useLang } from '@/lib/i18n';

export default function ShareButtons({ title }) {
  const { t } = useLang();
  const [copied, setCopied] = useState(false);
  const url = typeof window !== 'undefined' ? window.location.href : '';
  const enc = encodeURIComponent;
  const links = [
    { icon: Facebook, label: 'Facebook', href: `https://www.facebook.com/sharer/sharer.php?u=${enc(url)}` },
    { icon: Twitter, label: 'X', href: `https://twitter.com/intent/tweet?url=${enc(url)}&text=${enc(title)}` },
    { icon: Linkedin, label: 'LinkedIn', href: `https://www.linkedin.com/sharing/share-offsite/?url=${enc(url)}` },
  ];
  const copy = async () => { await navigator.clipboard.writeText(url); setCopied(true); setTimeout(() => setCopied(false), 1800); };
  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="mr-1 text-xs font-bold uppercase tracking-[0.18em]">{t('common.share')}</span>
      {links.map(({ icon: Icon, label, href }) => (
        <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={`Share on ${label}`} className="inline-flex h-10 w-10 items-center justify-center rounded-full border-2 border-black transition-colors hover:bg-black hover:text-white"><Icon className="h-4 w-4" /></a>
      ))}
      <button type="button" onClick={copy} aria-label="Copy link" className="inline-flex h-10 w-10 items-center justify-center rounded-full border-2 border-black transition-colors hover:bg-[#FDE01A]">{copied ? <Check className="h-4 w-4" /> : <Link2 className="h-4 w-4" />}</button>
    </div>
  );
}