import React from 'react';
import { motion } from 'framer-motion';
import { Image } from '@/components/ui/image';
import { cn } from '@/lib/utils';

// Inner-page hero. dark=true renders black background; image renders a split composition.
export default function PageHero({ eyebrow, title, sub, image, imageAlt = '', dark = false, children }) {
  return (
    <section className={cn('relative overflow-hidden', dark ? 'bg-black text-white' : 'bg-white text-black')}>
      <div className={cn('container-x grid items-center gap-10 py-16 lg:py-24', image && 'lg:grid-cols-12')}>
        <div className={cn(image ? 'lg:col-span-7' : 'max-w-4xl')}>
          {eyebrow && <motion.p initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }} className={cn('eyebrow mb-5', dark && 'text-white')}>{eyebrow}</motion.p>}
          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.05 }} className="text-4xl font-extrabold leading-[1.02] sm:text-5xl lg:text-6xl">
            {title}
          </motion.h1>
          {sub && <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }} className={cn('mt-6 max-w-2xl text-lg leading-relaxed', dark ? 'text-white/70' : 'text-black/65')}>{sub}</motion.p>}
          {children && <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.25 }} className="mt-8 flex flex-wrap gap-3">{children}</motion.div>}
        </div>
        {image && (
          <motion.div initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="lg:col-span-5">
            <div className="relative">
              <div className="absolute -left-3 -top-3 h-full w-full rounded-3xl bg-[#FDE01A]" aria-hidden="true" />
              <Image src={image} alt={imageAlt} className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border-2 border-black object-cover" />
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}