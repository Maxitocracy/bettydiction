export interface Product {
  id: string;
  title: string;
  category: string;
  price: string;
  paystackUrl: string;
  description?: string; // Add optional description
  badge?: string;       // Add optional badge
}

export const products: Product[] = [
  {
    id: 'jss1',
    title: 'JSS1 English Lesson Plan',
    category: 'Lesson Plans',
    price: '₦100',
    paystackUrl: 'https://paystack.shop/pay/f1i3jtde5w',
    description: 'A comprehensive English lesson plan for JSS1 students.'
  },
  {
    id: 'jss2',
    title: 'JSS2 English Lesson Plan',
    category: 'Lesson Plans',
    price: '₦100',
    paystackUrl: 'https://paystack.shop/pay/x4e06wp6hn',
    description: 'A comprehensive English lesson plan for JSS2 students.'
  },
    {
    id: 'jss3',
    title: 'JSS3 English Lesson Plan',
    category: 'Lesson Plans',
    price: '₦100',
    paystackUrl: 'https://paystack.shop/pay',
    description: 'A comprehensive English lesson plan for JSS3 students.'
  },
  {
    id: 'sss1',
    title: 'SSS1 English Lesson Plan',
    category: 'Lesson Plans',
    price: '₦100',
    paystackUrl: 'https://paystack.shop/pay',
    description: 'A comprehensive English lesson plan for SSS1 students.'
  }
  ,
    {
    id: 'sss2',
    title: 'SSS2 English Lesson Plan',
    category: 'Lesson Plans',
    price: '₦100',
    paystackUrl: 'https://paystack.shop/pay',
    description: 'A comprehensive English lesson plan for SSS2 students.'
  },
  {
    id: 'sss3',
    title: 'SSS3 English Lesson Plan',
    category: 'Lesson Plans',
    price: '₦100',
    paystackUrl: 'https://paystack.shop/pay',
    description: 'A comprehensive English lesson plan for SSS3 students.'
  }
];
