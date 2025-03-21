
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
    image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?q=80&w=800",
    category: "audio",
    featured: true
  },
  {
    id: "2",
    name: "Ultra-Thin Laptop",
    description: "The thinnest and lightest laptop on the market. Powered by next-gen processors and featuring a stunning Retina display.",
    price: 1299.99,
    image: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?q=80&w=800",
    category: "computers",
    featured: true
  },
  {
    id: "3",
    name: "Smart Watch Series 7",
    description: "Stay connected and monitor your health with our latest smartwatch. Water-resistant and packed with fitness tracking features.",
    price: 399.99,
    image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?q=80&w=800",
    category: "wearables",
    featured: false
  },
  {
    id: "4",
    name: "Wireless Charging Pad",
    description: "Charge your devices without the hassle of cables. Compatible with all Qi-enabled devices.",
    price: 59.99,
    image: "https://images.unsplash.com/photo-1585338677857-7f88b5fcd11c?q=80&w=800",
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
