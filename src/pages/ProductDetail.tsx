
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { getProductById } from '../lib/products';
import { useCart } from '../context/CartContext';
import { formatCurrency } from '../lib/utils';
import { MinusCircle, PlusCircle, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ProductGrid from '../components/ProductGrid';
import { getFeaturedProducts } from '../lib/products';
import { toast } from 'sonner';

const ProductDetail: React.FC = () => {
  const { productId } = useParams<{ productId: string }>();
  const navigate = useNavigate();
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);
  const product = productId ? getProductById(productId) : undefined;
  const relatedProducts = getFeaturedProducts().filter(p => p.id !== productId).slice(0, 4);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
            <p className="text-gray-600 mb-6">The product you're looking for doesn't exist or has been removed.</p>
            <Button onClick={() => navigate('/products')}>
              Browse Products
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const handleQuantityChange = (amount: number) => {
    const newQuantity = quantity + amount;
    if (newQuantity >= 1 && newQuantity <= 10) {
      setQuantity(newQuantity);
    }
  };

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity,
    });
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-32 px-4 pb-16 animate-fade-in">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Product Image */}
            <div className="rounded-xl overflow-hidden bg-white shadow-sm border border-gray-100">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover aspect-square"
              />
            </div>
            
            {/* Product Details */}
            <div className="flex flex-col">
              <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
              <p className="text-2xl font-semibold mb-6">{formatCurrency(product.price)}</p>
              
              <div className="border-t border-b border-gray-200 py-6 mb-6">
                <p className="text-gray-700 leading-relaxed">
                  {product.description}
                </p>
              </div>
              
              <div className="mb-8">
                <div className="flex items-center mb-6">
                  <span className="mr-4">Quantity:</span>
                  <div className="flex items-center">
                    <button
                      onClick={() => handleQuantityChange(-1)}
                      disabled={quantity <= 1}
                      className="text-gray-500 hover:text-black disabled:opacity-50 transition-colors"
                    >
                      <MinusCircle size={20} />
                    </button>
                    <span className="mx-4 w-8 text-center">{quantity}</span>
                    <button
                      onClick={() => handleQuantityChange(1)}
                      disabled={quantity >= 10}
                      className="text-gray-500 hover:text-black disabled:opacity-50 transition-colors"
                    >
                      <PlusCircle size={20} />
                    </button>
                  </div>
                </div>
                
                <Button
                  onClick={handleAddToCart}
                  className="w-full py-6 bg-black hover:bg-gray-800 text-white flex items-center justify-center gap-2"
                >
                  <ShoppingBag size={18} />
                  <span>Add to Cart</span>
                </Button>
              </div>
              
              <div className="mt-auto">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex flex-col">
                    <span className="font-medium mb-1">Free Shipping</span>
                    <span className="text-gray-500">For orders over $50</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-medium mb-1">Secure Payment</span>
                    <span className="text-gray-500">Encrypted transactions</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-medium mb-1">30-Day Returns</span>
                    <span className="text-gray-500">Hassle-free returns</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-medium mb-1">24/7 Support</span>
                    <span className="text-gray-500">Always here to help</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div className="mt-16">
              <h2 className="text-2xl font-bold mb-8">You May Also Like</h2>
              <ProductGrid products={relatedProducts} />
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProductDetail;
