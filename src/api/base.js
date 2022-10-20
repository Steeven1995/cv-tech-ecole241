import Airtable from 'airtable';

// api keys are confidential
const base = new Airtable({ apiKey: 'key3OF9akvIC1jmC3' }).base(
  'appKcgq0bY2LZYJkZ'
);

export default base;