import { $, $$ } from '@/utils/dom';
import { submitLead } from '@/utils/customer-io';

export default function init() {
  $$<HTMLFormElement>('[data-contact-form]').forEach((form) => {
    const submit = $<HTMLButtonElement>('[data-contact-submit]', form);
    const status = $('[data-contact-status]', form);
    if (!submit || !status) return;

    form.addEventListener('submit', (event) => {
      event.preventDefault();
      if (!form.reportValidity()) return;

      const values = Object.fromEntries(new FormData(form).entries());
      if (values.website) return;

      submit.disabled = true;
      submit.setAttribute('aria-busy', 'true');
      status.className = 'mt-5 min-h-6 text-sm text-mute';
      status.textContent = 'Sending...';

      if (!submitLead(values)) {
        submit.disabled = false;
        submit.removeAttribute('aria-busy');
        status.className = 'mt-5 min-h-6 text-sm text-signal';
        status.textContent = 'We could not send your request. Please call (602) 834-4239.';
        return;
      }

      const firstName = String(values.name).trim().split(/\s+/)[0];
      form.reset();
      submit.removeAttribute('aria-busy');
      status.className = 'mt-5 min-h-6 text-sm text-bone';
      status.textContent = `Thanks, ${firstName}. Check your inbox for next steps.`;
      window.setTimeout(() => (submit.disabled = false), 1500);
    });
  });
}
