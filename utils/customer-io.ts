export type CustomerIoData = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    _cio?: {
      identify: (attributes: CustomerIoData) => void;
      track: (event: string, data?: CustomerIoData) => void;
    };
  }
}

export const leadData = (values: Record<string, FormDataEntryValue>, pageUrl: string) => {
  const name = String(values.name ?? '').trim();
  const [firstName, ...lastName] = name.split(/\s+/);

  return {
    profile: {
      id: String(values.email ?? '')
        .trim()
        .toLowerCase(),
      email: String(values.email ?? '')
        .trim()
        .toLowerCase(),
      first_name: firstName,
      last_name: lastName.join(' ') || undefined,
      phone: String(values.phone ?? '').trim() || undefined,
      company: String(values.company ?? '').trim() || undefined,
      service_interest: String(values.service_interest ?? 'general'),
    },
    event: {
      name,
      email: String(values.email ?? '')
        .trim()
        .toLowerCase(),
      phone: String(values.phone ?? '').trim(),
      company: String(values.company ?? '').trim(),
      service_interest: String(values.service_interest ?? 'general'),
      message: String(values.message ?? '').trim(),
      page_url: pageUrl,
      form_name: String(values.form_name ?? 'website'),
    },
  };
};

export const track = (event: string, data?: CustomerIoData) => {
  if (!window._cio?.track) return false;
  window._cio.track(event, data);
  return true;
};

// The browser never triggers the nurture campaign. A server receipt is required.
export const submitLead = async (values: Record<string, FormDataEntryValue>, submissionId: string) => {
  const response = await fetch('/api/contact', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ ...values, submission_id: submissionId, page_url: window.location.href }),
  });
  const receipt = await response.json();
  if (!response.ok || receipt.submission_id !== submissionId) throw new Error('Intake not confirmed');
  return receipt;
};

export const subscribe = (email: string) => {
  if (!window._cio?.identify || !window._cio?.track) return false;
  const normalizedEmail = email.trim().toLowerCase();
  window._cio.identify({ id: normalizedEmail, email: normalizedEmail, newsletter_subscriber: true });
  window._cio.track('newsletter_signup', { email: normalizedEmail, page_url: window.location.href });
  return true;
};
