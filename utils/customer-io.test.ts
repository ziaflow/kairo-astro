import assert from 'node:assert/strict';
import test from 'node:test';
import { leadData } from './customer-io.ts';

test('leadData matches the Customer.io form_submit contract', () => {
  const data = leadData(
    {
      name: '  Ada Lovelace  ',
      email: ' ADA@EXAMPLE.COM ',
      phone: '602-555-0100',
      service_interest: 'automation',
      message: 'Help us connect our systems.',
    },
    'https://ziaflow.com/contact',
  );

  assert.deepEqual(data.profile, {
    id: 'ada@example.com',
    email: 'ada@example.com',
    first_name: 'Ada',
    last_name: 'Lovelace',
    phone: '602-555-0100',
    company: undefined,
    service_interest: 'automation',
  });
  assert.equal(data.event.form_name, 'website');
  assert.equal(data.event.page_url, 'https://ziaflow.com/contact');
});
