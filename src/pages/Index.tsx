
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import FeaturedProducts from '../components/FeaturedProducts';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        <HeroSection />
        <FeaturedProducts />
        
        {/* Features Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold mb-12 text-center">Why Choose Lumina?</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in">
              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 flex flex-col items-center text-center transition-transform hover:translate-y-[-4px]">
                <div className="w-16 h-16 bg-black/5 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className=""><polygon points="14 2 18 6 7 17 3 17 3 13 14 2"></polygon><line x1="3" y1="22" x2="21" y2="22"></line></svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Thoughtfully Designed</h3>
                <p className="text-gray-600">Every product in our collection is meticulously designed with both aesthetics and functionality in mind.</p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 flex flex-col items-center text-center transition-transform hover:translate-y-[-4px]">
                <div className="w-16 h-16 bg-black/5 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className=""><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Premium Quality</h3>
                <p className="text-gray-600">We source only the highest quality materials and components to ensure lasting performance.</p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 flex flex-col items-center text-center transition-transform hover:translate-y-[-4px]">
                <div className="w-16 h-16 bg-black/5 rounded-full flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className=""><path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"></path><path d="M12 12v9"></path><path d="m8 17 4 4 4-4"></path></svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Seamless Experience</h3>
                <p className="text-gray-600">From browsing to unboxing, we've created a seamless and enjoyable customer experience.</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-5xl bg-gray-50 rounded-2xl overflow-hidden shadow-sm border border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-12 flex flex-col justify-center">
                <h2 className="text-3xl font-bold mb-4">Ready to elevate your tech experience?</h2>
                <p className="text-gray-600 mb-8">
                  Discover our collection of premium products that blend cutting-edge technology with timeless design.
                </p>
                <Link
                  to="/products"
                  className="inline-flex items-center bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition-colors self-start"
                >
                  Explore Products
                  <ArrowRight size={16} className="ml-2" />
                </Link>
              </div>
              <div className="bg-black/5 flex items-center justify-center p-8">
                <img
                  src="https://images.unsplash.com/photo-1553545204-4f7d339aa06a?q=80&w=800"
                  alt="Premium Headphones"
                  className="max-w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
