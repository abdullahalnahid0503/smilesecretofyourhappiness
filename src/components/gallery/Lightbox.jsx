import React, { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Lightbox({ items, index, onClose, onIndex }) {
  const open = index !== null && index >= 0;
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onIndex((index + 1) % items.length);
      if (e.key === 'ArrowLeft') onIndex((index - 1 + items.length) % items.length);
    };
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => { window.removeEventListener('keydown', onKey); document.body.style.overflow = ''; };
  }, [open, index, items.length, onClose, onIndex]);

  const item = open ? items[index] : null;
  return (
    <AnimatePresence>
      {open && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4" role="dialog" aria-modal="true" aria-label={item.alt} onClick={onClose}>
          <button type="button" onClick={onClose} aria-label="Close" className="absolute right-4 top-4 rounded-full bg-white p-2.5 text-black hover:bg-[#FDE01A]"><X className="h-5 w-5" /></button>
          <button type="button" onClick={(e) => { e.stopPropagation(); onIndex((index - 1 + items.length) % items.length); }} aria-label="Previous" className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white p-2.5 text-black hover:bg-[#FDE01A] sm:left-6"><ChevronLeft className="h-5 w-5" /></button>
          <button type="button" onClick={(e) => { e.stopPropagation(); onIndex((index + 1) % items.length); }} aria-label="Next" className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white p-2.5 text-black hover:bg-[#FDE01A] sm:right-6"><ChevronRight className="h-5 w-5" /></button>
          <motion.figure key={item.id} initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.25 }} className="max-h-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
            <img src={item.src} alt={item.alt} className="max-h-[80vh] w-auto rounded-2xl border-2 border-white/20 object-contain" />
            <figcaption className="mt-3 flex flex-wrap items-center justify-between gap-2 text-sm text-white/80">
              <span>{item.alt}</span>
              <span className="text-[#FDE01A]">{item.project} · {item.branch} · {item.year}</span>
            </figcaption>
          </motion.figure>
        </motion.div>
      )}
    </AnimatePresence>
  );
}