
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection: React.FC = () => {
  return (
    <section className="pt-32 pb-24 px-4 md:pt-40 md:pb-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-black/5 to-black/0 pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative">
        <div className="max-w-2xl animate-fade-in">
          <div className="inline-block px-3 py-1 text-xs font-medium bg-black/5 rounded-full mb-6">
            New Collection 2023
          </div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Experience technology with unmatched elegance
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-xl">
            Discover our premium collection of tech products designed for those who appreciate both functionality and aesthetics.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild className="bg-black hover:bg-gray-800 text-white px-8 py-6 text-base">
              <Link to="/products">
                Shop Now
              </Link>
            </Button>
            <Button asChild variant="outline" className="px-8 py-6 text-base">
              <Link to="/about" className="flex items-center gap-2">
                Learn More <ArrowRight size={16} />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
