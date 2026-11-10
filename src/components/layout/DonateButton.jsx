import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';
import { useLang } from '@/lib/i18n';
import { cn } from '@/lib/utils';

// Magnetic pull toward the cursor (desktop only)
export default function DonateButton({ className }) {
  const { t } = useLang();
  const ref = useRef(null);

  const onMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const dx = e.clientX - (r.left + r.width / 2);
    const dy = e.clientY - (r.top + r.height / 2);
    el.style.transform = `translate(${dx * 0.18}px, ${dy * 0.18}px)`;
  };
  const onLeave = () => { if (ref.current) ref.current.style.transform = 'translate(0,0)'; };

  return (
    <Link
      ref={ref}
      to="/donate"
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={cn('inline-flex h-11 items-center gap-2 rounded-full bg-[#FDE01A] px-5 text-sm font-bold text-black border-2 border-[#FDE01A] shadow-[0_4px_14px_rgba(0,0,0,0.12)] transition-[background-color,color,border-color,transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:bg-black hover:text-white hover:border-black hover:shadow-[0_10px_24px_rgba(0,0,0,0.20)] active:translate-y-0 active:scale-[0.98]', className)}
    >
      <Heart className="h-4 w-4" aria-hidden="true" />
      {t('nav.donate')}
    </Link>
  );
}