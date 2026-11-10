import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { navItems } from '@/data/navigation';
import { useLang } from '@/lib/i18n';
import LanguageToggle from '@/components/layout/LanguageToggle';
import DonateButton from '@/components/layout/DonateButton';

export default function MobileMenu({ open, setOpen }) {
  const { t } = useLang();
  const close = () => setOpen(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <button type="button" className="lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-full border-2 border-black text-black shadow-[0_2px_10px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#FDE01A] hover:text-black hover:shadow-[0_8px_20px_rgba(0,0,0,0.18)] active:translate-y-0 active:scale-[0.96]" aria-label={t('nav.menu')}>
          <Menu className="h-5 w-5" />
        </button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[88vw] max-w-sm overflow-y-auto border-l-2 border-black p-0">
        <SheetTitle className="sr-only">{t('nav.menu')}</SheetTitle>
        <div className="flex items-center justify-between border-b-2 border-black px-6 py-5">
          <span className="font-heading text-xl font-black tracking-tight">SMILE</span>
          <LanguageToggle />
        </div>
        <nav className="px-4 py-4" aria-label="Mobile">
          <Accordion type="multiple" className="space-y-1">
            {navItems.map((item) =>
              item.children ? (
                <AccordionItem key={item.key} value={item.key} className="border-0">
                  <AccordionTrigger className="rounded-xl px-3 py-3 text-lg font-semibold hover:bg-black/5 hover:no-underline">
                    {t(item.key)}
                  </AccordionTrigger>
                  <AccordionContent className="pb-1">
                    <ul className="ml-3 border-l-2 border-[#FDE01A] pl-3">
                      <li><Link to={item.to} onClick={close} className="block rounded-lg px-3 py-2 text-base text-black/70 hover:bg-black/5">{t(item.key)} - {t('common.viewAll')}</Link></li>
                      {item.children.map((c) => (
                        <li key={c.to}><Link to={c.to} onClick={close} className="block rounded-lg px-3 py-2 text-base font-medium hover:bg-black/5">{t(c.key)}</Link></li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ) : (
                <NavLink key={item.key} to={item.to} onClick={close} className={({ isActive }) => `block rounded-xl px-3 py-3 text-lg font-semibold hover:bg-black/5 ${isActive ? 'bg-[#FDE01A]' : ''}`}>
                  {t(item.key)}
                </NavLink>
              )
            )}
          </Accordion>
        </nav>
        <div className="px-6 pb-8 pt-2" onClick={close}>
          <DonateButton className="w-full justify-center py-3.5 text-base" />
        </div>
      </SheetContent>
    </Sheet>
  );
}