export interface Product {
  id: string;
  title: string;
  priceNGN: number;
  category: string;
  description: string;
  paystackUrl: string;
  badge?: string;
}

export const products: Product[] = [
  {
    id: 'jss1-plans',
    title: 'JSS1 English Language Lesson Plans',
    priceNGN: 5000,
    category: 'Lesson Plans',
    description: 'Comprehensive term-by-term lesson plans, curriculum guide, and exercises tailored for JSS1 instruction.',
    paystackUrl: 'https://paystack.com/pay/bettydiction-jss1'
  },
  {
    id: 'jss2-plans',
    title: 'JSS2 English Language Lesson Plans',
    priceNGN: 5000,
    category: 'Lesson Plans',
    description: 'Structured scheme of work, grammar breakdowns, and practical worksheets for JSS2 English classes.',
    paystackUrl: 'https://paystack.com/pay/bettydiction-jss2'
  },
  {
    id: 'jss3-plans',
    title: 'JSS3 English Language Lesson Plans',
    priceNGN: 5000,
    category: 'Lesson Plans',
    description: 'BECE exam prep, advanced grammar modules, and systematic diction drills for JSS3 students.',
    paystackUrl: 'https://paystack.com/pay/bettydiction-jss3'
  },
  {
    id: 'sss1-plans',
    title: 'SSS1 English Language Lesson Plans',
    priceNGN: 6000,
    category: 'Lesson Plans',
    description: 'Senior secondary curriculum covering phonetics, essay writing, and oral English fundamentals.',
    paystackUrl: 'https://paystack.com/pay/bettydiction-sss1'
  },
  {
    id: 'sss2-plans',
    title: 'SSS2 English Language Lesson Plans',
    priceNGN: 6000,
    category: 'Lesson Plans',
    description: 'In-depth comprehension, summary writing techniques, and advanced speech work for SSS2.',
    paystackUrl: 'https://paystack.com/pay/bettydiction-sss2'
  },
  {
    id: 'sss3-plans',
    title: 'SSS3 English Language Lesson Plans',
    priceNGN: 6500,
    category: 'Lesson Plans',
    description: 'WAEC/NECO/JAMB past question guides, diction perfection, and intensive revision modules.',
    paystackUrl: 'https://paystack.com/pay/bettydiction-sss3'
  },
  {
    id: 'grade-1-6-bundle',
    title: 'Complete Grade 1–6 Diction eBook Bundle',
    priceNGN: 16000,
    category: 'Diction eBooks',
    badge: 'Best Value',
    description: 'Full primary school diction series (Grades 1 to 6). Phonetic drills, audio support guides, and practice modules.',
    paystackUrl: 'https://paystack.com/pay/bettydiction-bundle'
  },
  {
    id: 'school-licence',
    title: 'School Licence (Grade 1–6 Bundle)',
    priceNGN: 75000,
    category: 'Institutional',
    badge: 'Multi-User',
    description: 'Multi-user institution rights for all Grade 1–6 Diction materials across your entire school campus.',
    paystackUrl: 'https://paystack.com/pay/bettydiction-school-licence'
  }
];