import React from 'react';
import { Image } from '@/components/ui/image';
import { cn } from '@/lib/utils';

const initials = (name = '') => name.split(' ').filter(Boolean).slice(0, 2).map((n) => n[0]).join('').toUpperCase();

// Circular portrait with black border; falls back to initials on yellow when no photo is set.
export default function Avatar({ name, photo, size = 'md', className }) {
  const sizes = { sm: 'h-14 w-14 text-base', md: 'h-20 w-20 text-xl', lg: 'h-28 w-28 text-3xl' };
  return photo ? (
    <Image src={photo} alt={name} className={cn('overflow-hidden rounded-full border-2 border-black object-cover', sizes[size], className)} />
  ) : (
    <div aria-hidden="true" className={cn('flex items-center justify-center rounded-full border-2 border-black bg-[#FDE01A] font-heading font-extrabold text-black', sizes[size], className)}>
      {initials(name)}
    </div>
  );
}