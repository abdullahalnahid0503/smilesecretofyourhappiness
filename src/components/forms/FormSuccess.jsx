import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { useLang } from '@/lib/i18n';

export default function FormSuccess({ title, body, onReset }) {
  const { t } = useLang();
  return (
    <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} className="card-hc flex flex-col items-center p-10 text-center" role="status">
      <span className="flex h-20 w-20 items-center justify-center rounded-full bg-[#FDE01A]"><Check className="h-10 w-10" strokeWidth={3} /></span>
      <h3 className="mt-6 text-3xl font-extrabold">{title || t('form.successTitle')}</h3>
      <p className="mt-3 max-w-md text-black/70">{body || t('form.successBody')}</p>
      {onReset && <button type="button" onClick={onReset} className="btn-outline mt-8">{t('form.sendAnother')}</button>}
    </motion.div>
  );
}