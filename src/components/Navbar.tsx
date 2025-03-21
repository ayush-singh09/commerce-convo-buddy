
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, User, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { cn } from '../lib/utils';

const Navbar: React.FC = () => {
  const { cart } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out',
        isScrolled
          ? 'bg-white/90 backdrop-blur-md shadow-sm py-4'
          : 'bg-transparent py-6'
      )}
    >
      <div className="container px-4 mx-auto flex items-center justify-between">
        <Link
          to="/"
          className="text-2xl font-bold tracking-tight transition-colors hover:text-gray-700"
        >
          LUMINA
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            to="/products"
            className="text-sm font-medium hover:text-gray-600 transition-colors"
          >
            All Products
          </Link>
          <Link
            to="/products/category/audio"
            className="text-sm font-medium hover:text-gray-600 transition-colors"
          >
            Audio
          </Link>
          <Link
            to="/products/category/computers"
            className="text-sm font-medium hover:text-gray-600 transition-colors"
          >
            Computers
          </Link>
          <Link
            to="/products/category/wearables"
            className="text-sm font-medium hover:text-gray-600 transition-colors"
          >
            Wearables
          </Link>
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center space-x-4">
          <Link
            to="/orders"
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            aria-label="My Orders"
          >
            <User size={20} />
          </Link>
          <Link
            to="/cart"
            className="p-2 rounded-full hover:bg-gray-100 transition-colors relative"
            aria-label="Shopping Cart"
          >
            <ShoppingBag size={20} />
            {cart.items.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-black text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {cart.items.length}
              </span>
            )}
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-full hover:bg-gray-100 transition-colors"
          onClick={toggleMobileMenu}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          'fixed inset-0 z-40 bg-white transform transition-transform duration-300 ease-in-out',
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full',
          'md:hidden'
        )}
      >
        <div className="container mx-auto px-4 py-6 flex flex-col h-full">
          <div className="flex justify-between items-center mb-8">
            <Link
              to="/"
              className="text-2xl font-bold"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              LUMINA
            </Link>
            <button
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
              onClick={toggleMobileMenu}
              aria-label="Close Menu"
            >
              <X size={24} />
            </button>
          </div>

          <nav className="flex flex-col space-y-6 text-lg">
            <Link
              to="/products"
              className="py-2 hover:text-gray-600 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              All Products
            </Link>
            <Link
              to="/products/category/audio"
              className="py-2 hover:text-gray-600 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Audio
            </Link>
            <Link
              to="/products/category/computers"
              className="py-2 hover:text-gray-600 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Computers
            </Link>
            <Link
              to="/products/category/wearables"
              className="py-2 hover:text-gray-600 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Wearables
            </Link>
          </nav>

          <div className="mt-auto mb-8 flex justify-around py-4">
            <Link
              to="/orders"
              className="flex flex-col items-center"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <div className="p-3 rounded-full bg-gray-100 mb-2">
                <User size={24} />
              </div>
              <span className="text-sm">My Orders</span>
            </Link>
            <Link
              to="/cart"
              className="flex flex-col items-center relative"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <div className="p-3 rounded-full bg-gray-100 mb-2 relative">
                <ShoppingBag size={24} />
                {cart.items.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-black text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                    {cart.items.length}
                  </span>
                )}
              </div>
              <span className="text-sm">Cart</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
