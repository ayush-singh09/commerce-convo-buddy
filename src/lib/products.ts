
export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  featured: boolean;
};

export const products: Product[] = [
  {
    id: "1",
    name: "Premium Wireless Headphones",
    description: "Experience crystal-clear sound with our premium wireless headphones. Featuring noise cancellation technology and 40-hour battery life.",
    price: 299.99,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800",
    category: "audio",
    featured: true
  },
  {
    id: "2",
    name: "Ultra-Thin Laptop",
    description: "The thinnest and lightest laptop on the market. Powered by next-gen processors and featuring a stunning Retina display.",
    price: 1299.99,
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=800",
    category: "computers",
    featured: true
  },
  {
    id: "3",
    name: "Smart Watch Series 7",
    description: "Stay connected and monitor your health with our latest smartwatch. Water-resistant and packed with fitness tracking features.",
    price: 399.99,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=800",
    category: "wearables",
    featured: false
  },
  {
    id: "4",
    name: "Wireless Charging Pad",
    description: "Charge your devices without the hassle of cables. Compatible with all Qi-enabled devices.",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1622959784762-8b699372a77d?q=80&w=800",
    category: "accessories",
    featured: false
  },
  {
    id: "5",
    name: "Professional Camera",
    description: "Capture stunning photos and videos with our professional-grade camera. Features a 48MP sensor and 8K video recording.",
    price: 1499.99,
    image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=800",
    category: "cameras",
    featured: true
  },
  {
    id: "6",
    name: "Smart Home Speaker",
    description: "A voice-controlled speaker that uses advanced AI to play music, answer questions, and control your smart home devices.",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1589003077984-894e133dabab?q=80&w=800",
    category: "audio",
    featured: false
  },
  {
    id: "7",
    name: "Ergonomic Gaming Chair",
    description: "Designed for maximum comfort during extended gaming sessions. Features adjustable armrests and lumbar support.",
    price: 249.99,
    image: "https://images.unsplash.com/photo-1598257006463-7c64a5bb0928?q=80&w=800",
    category: "gaming",
    featured: false
  },
  {
    id: "8",
    name: "Portable External SSD",
    description: "Ultra-fast external SSD with 1TB capacity. Perfect for backing up your files or expanding your storage.",
    price: 179.99,
    image: "https://images.unsplash.com/photo-1633523236918-89fc49aea79b?q=80&w=800",
    category: "storage",
    featured: false
  },
  {
    id: "9",
    name: "Virtual Reality Headset",
    description: "Immerse yourself in virtual worlds with our state-of-the-art VR headset. Features high-resolution displays and precise motion tracking.",
    price: 499.99,
    image: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?q=80&w=800",
    category: "gaming",
    featured: true
  },
  {
    id: "10",
    name: "Smart Home Security System",
    description: "Keep your home safe with our comprehensive security system. Includes cameras, motion sensors, and mobile app integration.",
    price: 349.99,
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=800",
    category: "smart-home",
    featured: false
  },
  {
    id: "11",
    name: "Professional Microphone",
    description: "Studio-quality microphone perfect for podcasting, streaming, and music recording. Captures crystal-clear audio with minimal background noise.",
    price: 149.99,
    image: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=800",
    category: "audio",
    featured: false
  },
  {
    id: "12",
    name: "4K Ultra HD Monitor",
    description: "Experience stunning visuals with our 32-inch 4K monitor. Perfect for creative professionals and gaming enthusiasts.",
    price: 449.99,
    image: "https://images.unsplash.com/photo-1527443060795-0402a218dbf0?q=80&w=800",
    category: "computers",
    featured: true
  },
  {
    id: "13",
    name: "Mechanical Gaming Keyboard",
    description: "Responsive mechanical switches with customizable RGB lighting. Designed for precision and durability.",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1561112078-7d24e04c3407?q=80&w=800",
    category: "accessories",
    featured: false
  },
  {
    id: "14",
    name: "Smart Fitness Tracker",
    description: "Track your workouts, sleep, and health metrics with our advanced fitness band. Includes heart rate monitoring and GPS.",
    price: 89.99,
    image: "https://images.unsplash.com/photo-1576243345690-4e4b79b63288?q=80&w=800",
    category: "wearables",
    featured: true
  },
  {
    id: "15",
    name: "Wireless Earbuds",
    description: "Compact and comfortable earbuds with exceptional sound quality and active noise cancellation. Get up to 24 hours of battery life.",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1631176093617-63490a3d785a?q=80&w=800",
    category: "audio",
    featured: false
  },
  {
    id: "16",
    name: "Digital Drawing Tablet",
    description: "Professional drawing tablet with pressure sensitivity and tilt recognition. Perfect for digital artists and designers.",
    price: 229.99,
    image: "https://images.unsplash.com/photo-1569145487063-11277bc9f182?q=80&w=800",
    category: "accessories",
    featured: false
  }
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.featured);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};

export const getAllCategories = (): string[] => {
  const categories = products.map(product => product.category);
  return [...new Set(categories)];
};
