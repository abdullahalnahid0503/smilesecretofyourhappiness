import React from 'react';
import { cn } from '@/lib/utils';

// options: [{ value, label }] — includes an "All" option when allLabel is given
export default function FilterChips({ options, value, onChange, allLabel, label }) {
  const opts = allLabel ? [{ value: 'all', label: allLabel }, ...options] : options;
  return (
    <div role="group" aria-label={label} className="flex flex-wrap gap-2">
      {opts.map((o) => (
        <button key={o.value} type="button" onClick={() => onChange(o.value)} aria-pressed={value === o.value}
          className={cn('rounded-full border-2 border-black px-4 py-1.5 text-sm font-semibold transition-colors', value === o.value ? 'bg-black text-white' : 'bg-white hover:bg-[#FDE01A]')}>
          {o.label}
        </button>
      ))}
    </div>
  );
}