
import React from 'react';
import { Link } from 'react-router-dom';
import ProductGrid from './ProductGrid';
import { getFeaturedProducts } from '../lib/products';
import { ArrowRight } from 'lucide-react';

const FeaturedProducts: React.FC = () => {
  const featuredProducts = getFeaturedProducts();

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
          <div>
            <h2 className="text-3xl font-bold mb-2">Featured Products</h2>
            <p className="text-gray-600 max-w-2xl">
              Discover our handpicked selection of premium tech products that combine stunning design with exceptional performance.
            </p>
          </div>
          <Link
            to="/products"
            className="mt-4 md:mt-0 group inline-flex items-center text-sm font-medium hover:text-gray-700 transition-colors"
          >
            View All Products
            <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <ProductGrid products={featuredProducts} />
      </div>
    </section>
  );
};

export default FeaturedProducts;
