
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useCart } from '../context/CartContext';
import { formatCurrency } from '../lib/utils';
import { Trash2, MinusCircle, PlusCircle, ArrowRight, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CartPage: React.FC = () => {
  const { cart, removeItem, updateQuantity, clearCart } = useCart();
  const navigate = useNavigate();

  const handleQuantityChange = (id: string, currentQuantity: number, change: number) => {
    const newQuantity = currentQuantity + change;
    if (newQuantity >= 1 && newQuantity <= 10) {
      updateQuantity(id, newQuantity);
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-32 px-4 pb-16 animate-fade-in">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
          
          {cart.items.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-lg shadow-sm border border-gray-100">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4">
                <ShoppingBag size={24} />
              </div>
              <h2 className="text-xl font-semibold mb-2">Your cart is empty</h2>
              <p className="text-gray-600 mb-8">Looks like you haven't added any products to your cart yet.</p>
              <Button asChild>
                <Link to="/products">
                  Browse Products
                </Link>
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
                  <div className="divide-y divide-gray-100">
                    {cart.items.map((item) => (
                      <div key={item.id} className="p-4 sm:p-6 flex flex-col sm:flex-row">
                        <div className="flex-shrink-0 mb-4 sm:mb-0 sm:mr-6">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full sm:w-24 h-24 object-cover rounded-md"
                          />
                        </div>
                        
                        <div className="flex-grow">
                          <div className="flex flex-col sm:flex-row sm:justify-between">
                            <h3 className="font-medium">{item.name}</h3>
                            <p className="font-semibold">{formatCurrency(item.price * item.quantity)}</p>
                          </div>
                          
                          <p className="text-sm text-gray-500 mt-1 mb-4">
                            {formatCurrency(item.price)} each
                          </p>
                          
                          <div className="flex justify-between items-center">
                            <div className="flex items-center">
                              <button
                                onClick={() => handleQuantityChange(item.id, item.quantity, -1)}
                                disabled={item.quantity <= 1}
                                className="text-gray-500 hover:text-black disabled:opacity-50 transition-colors"
                              >
                                <MinusCircle size={18} />
                              </button>
                              <span className="mx-3 w-6 text-center">{item.quantity}</span>
                              <button
                                onClick={() => handleQuantityChange(item.id, item.quantity, 1)}
                                disabled={item.quantity >= 10}
                                className="text-gray-500 hover:text-black disabled:opacity-50 transition-colors"
                              >
                                <PlusCircle size={18} />
                              </button>
                            </div>
                            
                            <button
                              onClick={() => removeItem(item.id)}
                              className="text-gray-500 hover:text-red-500 transition-colors"
                              aria-label="Remove item"
                            >
                              <Trash2 size={18} />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="mt-4 flex justify-between">
                  <Button 
                    variant="outline" 
                    onClick={() => clearCart()}
                    className="text-sm"
                  >
                    Clear Cart
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    asChild
                    className="text-sm"
                  >
                    <Link to="/products">
                      Continue Shopping
                    </Link>
                  </Button>
                </div>
              </div>
              
              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
                  <h2 className="text-xl font-semibold mb-6">Order Summary</h2>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Subtotal</span>
                      <span>{formatCurrency(cart.total)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Shipping</span>
                      <span>{cart.total > 50 ? 'Free' : formatCurrency(10)}</span>
                    </div>
                    <div className="border-t border-gray-100 pt-4 flex justify-between font-semibold">
                      <span>Total</span>
                      <span>{formatCurrency(cart.total > 50 ? cart.total : cart.total + 10)}</span>
                    </div>
                  </div>
                  
                  <Button
                    onClick={() => navigate('/checkout')}
                    className="w-full bg-black hover:bg-gray-800 text-white flex items-center justify-center gap-2 py-6"
                  >
                    Proceed to Checkout
                    <ArrowRight size={16} />
                  </Button>
                  
                  <div className="mt-6 text-xs text-gray-500 text-center">
                    <p>Secure Checkout</p>
                    <p className="mt-1">All transactions are encrypted and secure.</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CartPage;
