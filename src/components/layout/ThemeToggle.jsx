import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/lib/theme';
import { cn } from '@/lib/utils';

// Round icon button. In dark mode the global overrides flip border-black / text-black to light,
// and hover:text-black beats the flip via :hover specificity → black icon on yellow hover.
export default function ThemeToggle({ className }) {
  const { theme, toggle } = useTheme();
  const isDark = theme === 'dark';
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Light mode' : 'Dark mode'}
      className={cn('inline-flex h-11 w-11 items-center justify-center rounded-full border-2 border-black text-black shadow-[0_2px_10px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#FDE01A] hover:text-black hover:shadow-[0_8px_20px_rgba(0,0,0,0.18)] active:translate-y-0 active:scale-[0.96]', className)}
    >
      <span className="relative flex h-5 w-5 items-center justify-center">
        <Sun className={cn('absolute h-5 w-5 transition-all duration-300', isDark ? 'rotate-0 scale-100 opacity-100' : 'rotate-90 scale-0 opacity-0')} />
        <Moon className={cn('absolute h-5 w-5 transition-all duration-300', isDark ? '-rotate-90 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100')} />
      </span>
    </button>
  );
}