
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductGrid from '../components/ProductGrid';
import { products, getProductsByCategory, getAllCategories } from '../lib/products';
import { cn } from '../lib/utils';

const ProductsPage: React.FC = () => {
  const { category } = useParams<{ category?: string }>();
  const [displayedProducts, setDisplayedProducts] = useState(products);
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>(category);
  const categories = getAllCategories();

  useEffect(() => {
    if (category) {
      setSelectedCategory(category);
      setDisplayedProducts(getProductsByCategory(category));
    } else {
      setSelectedCategory(undefined);
      setDisplayedProducts(products);
    }
  }, [category]);

  const handleCategoryChange = (cat: string | undefined) => {
    setSelectedCategory(cat);
    if (cat) {
      setDisplayedProducts(getProductsByCategory(cat));
    } else {
      setDisplayedProducts(products);
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-32 px-4 pb-16 animate-fade-in">
        <div className="container mx-auto">
          <div className="mb-12">
            <h1 className="text-3xl font-bold mb-6">
              {selectedCategory 
                ? `${selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)} Products` 
                : 'All Products'}
            </h1>
            
            <div className="flex flex-wrap gap-2 mb-8">
              <button
                onClick={() => handleCategoryChange(undefined)}
                className={cn(
                  'px-4 py-2 rounded-full text-sm transition-colors',
                  !selectedCategory 
                    ? 'bg-black text-white' 
                    : 'bg-gray-100 hover:bg-gray-200'
                )}
              >
                All
              </button>
              
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => handleCategoryChange(cat)}
                  className={cn(
                    'px-4 py-2 rounded-full text-sm transition-colors',
                    selectedCategory === cat 
                      ? 'bg-black text-white' 
                      : 'bg-gray-100 hover:bg-gray-200'
                  )}
                >
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                </button>
              ))}
            </div>
          </div>
          
          {displayedProducts.length > 0 ? (
            <ProductGrid products={displayedProducts} />
          ) : (
            <div className="text-center py-12">
              <p className="text-lg text-gray-600">No products found in this category.</p>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProductsPage;
