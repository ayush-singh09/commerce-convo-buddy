
import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Product } from '../lib/products';
import { formatCurrency } from '../lib/utils';
import { Button } from '@/components/ui/button';

type ProductCardProps = {
  product: Product;
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addItem } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1,
    });
  };

  return (
    <div 
      className="group relative rounded-xl overflow-hidden bg-white shadow-sm border border-gray-100 transition-all duration-300 hover:shadow-md animate-scale-in"
    >
      <Link to={`/product/${product.id}`} className="block">
        <div className="aspect-square overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            loading="lazy"
          />
        </div>
        
        <div className="p-4">
          <h3 className="text-base font-medium mb-1 line-clamp-1">
            {product.name}
          </h3>
          <p className="text-lg font-semibold mb-2">
            {formatCurrency(product.price)}
          </p>
          <p className="text-gray-500 text-sm mb-4 line-clamp-2">
            {product.description}
          </p>
          
          <Button
            onClick={handleAddToCart}
            className="w-full flex items-center justify-center gap-2 bg-black hover:bg-gray-800 text-white"
          >
            <ShoppingBag size={16} />
            <span>Add to Cart</span>
          </Button>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
