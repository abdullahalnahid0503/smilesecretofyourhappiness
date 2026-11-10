import { useState } from 'react';
import { validate, fakeSubmit } from '@/lib/validate';
import { useLang } from '@/lib/i18n';

// Small form state helper shared by every form on the site.
export function useForm(initial, rules) {
  const { t } = useLang();
  const [values, setValues] = useState(initial);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | submitting | success

  const onChange = (e) => {
    const { name, type, checked, value } = e.target;
    setValues((v) => ({ ...v, [name]: type === 'checkbox' ? checked : value }));
    if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }));
  };
  const setValue = (name, value) => setValues((v) => ({ ...v, [name]: value }));

  const check = (subset) => {
    const r = subset ? Object.fromEntries(Object.entries(rules).filter(([k]) => subset.includes(k))) : rules;
    const er = validate(values, r, t);
    setErrors(er);
    return Object.keys(er).length === 0;
  };

  const submit = async (e) => {
    e?.preventDefault();
    if (!check()) return false;
    setStatus('submitting');
    await fakeSubmit(values);
    setStatus('success');
    return true;
  };

  const reset = () => { setValues(initial); setErrors({}); setStatus('idle'); };

  return { values, errors, status, onChange, setValue, check, submit, reset };
}