
export interface User {
  id: string;
  name: string;
  email: string;
  profileImage?: string;
  role: 'buyer' | 'seller' | 'admin';
}

export interface Product {
  id: string;
  userId: string;
  name: string;
  description: string;
  price: number;
  images: string[];
  category: 'books' | 'electronics' | 'furniture' | 'clothing' | 'other';
  condition: 'new' | 'like new' | 'good' | 'fair' | 'poor';
  hashtags: string[];
  createdAt: string;
  expiresAt: string;
  location: string;
}

export const mockUsers: User[] = [
  {
    id: '1',
    name: 'John Doe',
    email: 'john.doe@college.edu',
    profileImage: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36',
    role: 'seller',
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane.smith@college.edu',
    profileImage: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
    role: 'buyer',
  },
  {
    id: '3',
    name: 'Admin User',
    email: 'admin@college.edu',
    role: 'admin',
  },
];

export const mockProducts: Product[] = [
  {
    id: '1',
    userId: '1',
    name: 'Introduction to Computer Science Textbook',
    description: 'Perfect condition CS101 textbook, barely used. Includes online access code (unused).',
    price: 45.99,
    images: ['https://images.unsplash.com/photo-1544947950-fa07a98d237f'],
    category: 'books',
    condition: 'like new',
    hashtags: ['textbook', 'computerscience', 'cs101'],
    createdAt: '2023-04-15T12:00:00Z',
    expiresAt: '2023-05-15T12:00:00Z',
    location: 'University Library',
  },
  {
    id: '2',
    userId: '1',
    name: 'Apple MacBook Pro 2021',
    description: 'M1 Pro, 16GB RAM, 512GB SSD. Includes charger and protective case. In excellent condition.',
    price: 1299.99,
    images: ['https://images.unsplash.com/photo-1517336714731-489689fd1ca8'],
    category: 'electronics',
    condition: 'good',
    hashtags: ['macbook', 'laptop', 'apple'],
    createdAt: '2023-04-10T09:30:00Z',
    expiresAt: '2023-05-10T09:30:00Z',
    location: 'Campus Center',
  },
  {
    id: '3',
    userId: '2',
    name: 'Desk Lamp',
    description: 'Adjustable desk lamp with multiple brightness settings. Works perfectly.',
    price: 19.99,
    images: ['https://images.unsplash.com/photo-1534381341970-9fe8eecd5be9'],
    category: 'furniture',
    condition: 'good',
    hashtags: ['lamp', 'desk', 'study'],
    createdAt: '2023-04-12T15:45:00Z',
    expiresAt: '2023-05-12T15:45:00Z',
    location: 'Dorm Building A',
  },
  {
    id: '4',
    userId: '2',
    name: 'Organic Chemistry Set',
    description: 'Complete set of organic chemistry textbooks and study guides. Some highlighting inside.',
    price: 75.00,
    images: ['https://images.unsplash.com/photo-1532153975070-2e9ab71f1b14'],
    category: 'books',
    condition: 'good',
    hashtags: ['chemistry', 'textbook', 'organic'],
    createdAt: '2023-04-14T10:15:00Z',
    expiresAt: '2023-05-14T10:15:00Z',
    location: 'Science Building',
  },
  {
    id: '5',
    userId: '1',
    name: 'Wireless Headphones',
    description: 'Sony WH-1000XM4 Noise Cancelling Headphones. Great condition, includes case.',
    price: 199.99,
    images: ['https://images.unsplash.com/photo-1546435770-a3e426bf472b'],
    category: 'electronics',
    condition: 'like new',
    hashtags: ['headphones', 'sony', 'wireless'],
    createdAt: '2023-04-08T16:20:00Z',
    expiresAt: '2023-05-08T16:20:00Z',
    location: 'Student Union',
  },
  {
    id: '6',
    userId: '1',
    name: 'Calculus Textbook',
    description: 'Calculus: Early Transcendentals, 8th Edition. Some wear but all pages intact.',
    price: 50.00,
    images: ['https://images.unsplash.com/photo-1621351183012-e2f9972dd9bf'],
    category: 'books',
    condition: 'fair',
    hashtags: ['calculus', 'math', 'textbook'],
    createdAt: '2023-04-09T13:10:00Z',
    expiresAt: '2023-05-09T13:10:00Z',
    location: 'Math Department',
  }
];
