const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// rules: { fieldName: 'required' | 'email' | 'consent' }
export function validate(values, rules, t) {
  const errors = {};
  Object.entries(rules).forEach(([field, rule]) => {
    const v = values[field];
    if (rule === 'consent' && !v) errors[field] = t('form.consentRequired');
    else if (rule === 'required' && (v === undefined || v === '' || (Array.isArray(v) && v.length === 0))) errors[field] = t('form.required');
    else if (rule === 'email') {
      if (!v) errors[field] = t('form.required');
      else if (!emailRe.test(v)) errors[field] = t('form.invalidEmail');
    }
  });
  return errors;
}

// Placeholder submission — swap for a real backend/entity call later.
export const fakeSubmit = () => new Promise((resolve) => setTimeout(resolve, 900));