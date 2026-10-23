import { track } from '@/utils/customer-io';

export default function init() {
  document.addEventListener('click', (event) => {
    const link = (event.target as Element).closest<HTMLAnchorElement>('a[href]');
    if (!link) return;

    if (link.href.startsWith('tel:')) {
      track('phone_click', {
        phone: link.href.slice(4),
        link_text: link.textContent?.trim(),
        page_url: window.location.href,
      });
    } else if (link.hostname === 'outlook.office.com' && link.pathname.startsWith('/book/')) {
      track('booking_click', { destination: link.href, page_url: window.location.href });
    }
  });
}
