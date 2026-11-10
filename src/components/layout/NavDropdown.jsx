import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { useLang } from '@/lib/i18n';
import { cn } from '@/lib/utils';

export default function NavDropdown({ item, linkClass }) {
  const { t } = useLang();
  const [open, setOpen] = useState(false);

  return (
    <div className="relative" onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <NavLink
        to={item.to}
        className={({ isActive }) => cn(linkClass, isActive && 'text-black after:w-full')}
        aria-haspopup="true"
        aria-expanded={open}
        onFocus={() => setOpen(true)}
        onBlur={(e) => { if (!e.currentTarget.parentElement.contains(e.relatedTarget)) setOpen(false); }}
      >
        {t(item.key)}
        <ChevronDown className={cn('ml-1 inline h-3.5 w-3.5 transition-transform duration-300', open && 'rotate-180')} aria-hidden="true" />
      </NavLink>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.18 }}
            className="absolute left-1/2 top-full z-50 -translate-x-1/2 pt-3"
          >
            <ul className="min-w-[230px] rounded-2xl border-2 border-black bg-white p-2 shadow-[6px_6px_0_0_#FDE01A]" role="menu">
              {item.children.map((c) => (
                <li key={c.to} role="none">
                  <Link
                    role="menuitem"
                    to={c.to}
                    onClick={() => setOpen(false)}
                    onBlur={(e) => { if (!e.currentTarget.closest('.relative').contains(e.relatedTarget)) setOpen(false); }}
                    className="block rounded-xl px-4 py-2.5 text-sm font-medium text-black transition-colors hover:bg-[#FDE01A]"
                  >
                    {t(c.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}