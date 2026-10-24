import { $, $$ } from '@/utils/dom';
import { submitLead } from '@/utils/customer-io';

export default function init() {
  $$<HTMLFormElement>('[data-contact-form]').forEach((form) => {
    const submit = $<HTMLButtonElement>('[data-contact-submit]', form);
    const status = $('[data-contact-status]', form);
    if (!submit || !status) return;

    let submissionId = crypto.randomUUID();
    form.addEventListener('submit', async (event) => {
      event.preventDefault();
      if (submit.disabled || !form.reportValidity()) return;

      const values = Object.fromEntries(new FormData(form).entries());
      if (values.website) return;

      submit.disabled = true;
      submit.setAttribute('aria-busy', 'true');
      status.className = 'mt-5 min-h-6 text-sm text-mute';
      status.textContent = 'Sending...';

      try {
        await submitLead(values, submissionId);
      } catch {
        submit.disabled = false;
        submit.removeAttribute('aria-busy');
        status.className = 'mt-5 min-h-6 text-sm text-signal';
        status.textContent = 'We could not send your request. Please call (602) 834-4239.';
        return;
      }

      const firstName = String(values.name).trim().split(/\s+/)[0];
      form.reset();
      submissionId = crypto.randomUUID();
      submit.removeAttribute('aria-busy');
      status.className = 'mt-5 min-h-6 text-sm text-bone';
      status.textContent = `Thanks, ${firstName}. Your request has been recorded.`;
      window.setTimeout(() => (submit.disabled = false), 1500);
    });
  });
}
