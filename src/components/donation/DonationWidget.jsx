import React, { useState } from 'react';
import { ShieldCheck, ArrowRight } from 'lucide-react';
import { useLang } from '@/lib/i18n';
import { cn } from '@/lib/utils';
import FormField from '@/components/forms/FormField';
import FormSuccess from '@/components/forms/FormSuccess';
import { useForm } from '@/components/forms/useForm';

const presets = [500, 1000, 2500, 5000, 10000];

// Donation placeholder: records intent, no real payment gateway yet.
export default function DonationWidget({ purpose, breakdown = [] }) {
  const { t, tx } = useLang();
  const [amount, setAmount] = useState(1000);
  const [custom, setCustom] = useState('');
  const form = useForm({ name: '', email: '', phone: '' }, { name: 'required', email: 'email' });
  const finalAmount = custom ? Number(custom) : amount;

  if (form.status === 'success') return <FormSuccess body={`${t('form.successBody')} (৳${finalAmount.toLocaleString()})`} onReset={form.reset} />;

  return (
    <form onSubmit={form.submit} className="card-hc p-7 sm:p-9" noValidate>
      {purpose && <p className="eyebrow mb-4">{purpose}</p>}
      <div className="grid grid-cols-3 gap-2 sm:grid-cols-5">
        {presets.map((p) => (
          <button key={p} type="button" onClick={() => { setAmount(p); setCustom(''); }} aria-pressed={!custom && amount === p}
            className={cn('rounded-2xl border-2 border-black py-3 text-sm font-bold transition-colors', !custom && amount === p ? 'bg-black text-white' : 'bg-white hover:bg-[#FDE01A]')}>
            ৳{p.toLocaleString()}
          </button>
        ))}
      </div>
      <div className="mt-5">
        <label htmlFor="custom-amt" className="text-sm font-semibold uppercase tracking-wider text-black/70">{t('donate.custom')}</label>
        <input id="custom-amt" type="number" min="50" value={custom} onChange={(e) => setCustom(e.target.value)} placeholder="e.g. 3000" className="field-input" />
      </div>
      {breakdown.length > 0 && (
        <div className="mt-6 rounded-2xl bg-[#F5F5F5] p-5">
          <p className="text-xs font-bold uppercase tracking-wider">{t('donate.where')}</p>
          <ul className="mt-2 space-y-1 text-sm text-black/75">
            {breakdown.map((b, i) => <li key={i} className="flex justify-between gap-4"><span>{tx(b.label)}</span><span className="font-semibold">৳{b.amount.toLocaleString()}</span></li>)}
          </ul>
        </div>
      )}
      <div className="mt-6 grid gap-5 sm:grid-cols-3">
        <FormField label={t('form.name')} name="name" value={form.values.name} onChange={form.onChange} error={form.errors.name} required />
        <FormField label={t('form.email')} name="email" type="email" value={form.values.email} onChange={form.onChange} error={form.errors.email} required />
        <FormField label={t('form.phone')} name="phone" type="tel" value={form.values.phone} onChange={form.onChange} />
      </div>
      <button type="submit" disabled={form.status === 'submitting'} className="btn-primary mt-8 w-full text-base disabled:opacity-60">
        {form.status === 'submitting' ? t('common.submitting') : `${t('donate.cta')} · ৳${(finalAmount || 0).toLocaleString()}`} <ArrowRight className="h-4 w-4" />
      </button>
      <p className="mt-4 flex items-start gap-2 text-xs leading-relaxed text-black/60"><ShieldCheck className="mt-0.5 h-4 w-4 shrink-0" /> {t('donate.transparency')}</p>
    </form>
  );
}