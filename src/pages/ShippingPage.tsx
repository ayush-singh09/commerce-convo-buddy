
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { Truck, Clock, Globe, CreditCard } from 'lucide-react';

const ShippingPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-32 px-4 pb-16 animate-fade-in">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-3xl font-bold mb-2">Shipping Information</h1>
          <p className="text-gray-600 mb-8">
            Learn about our shipping options, delivery times, and policies.
          </p>
          
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 mb-12">
            <h2 className="text-xl font-bold mb-6">Shipping Options</h2>
            
            <div className="space-y-6">
              <div className="flex items-start border-b border-gray-100 pb-6">
                <div className="bg-gray-100 p-3 rounded-full mr-4">
                  <Truck className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-1">Standard Shipping</h3>
                  <p className="text-gray-600 mb-2">
                    3-5 business days delivery within the United States.
                  </p>
                  <p>
                    <span className="font-medium">Cost:</span> Free for orders over $50, $10 for orders under $50.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start border-b border-gray-100 pb-6">
                <div className="bg-gray-100 p-3 rounded-full mr-4">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-1">Express Shipping</h3>
                  <p className="text-gray-600 mb-2">
                    1-2 business days delivery within the United States.
                  </p>
                  <p>
                    <span className="font-medium">Cost:</span> $15 flat rate for all orders.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start border-b border-gray-100 pb-6">
                <div className="bg-gray-100 p-3 rounded-full mr-4">
                  <Globe className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-1">International Shipping</h3>
                  <p className="text-gray-600 mb-2">
                    7-14 business days delivery to international locations.
                  </p>
                  <p>
                    <span className="font-medium">Cost:</span> Calculated at checkout based on location and weight.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-gray-100 p-3 rounded-full mr-4">
                  <CreditCard className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-1">Cash on Delivery</h3>
                  <p className="text-gray-600 mb-2">
                    Pay when your order arrives.
                  </p>
                  <p>
                    <span className="font-medium">Available:</span> In select locations for orders up to $500.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 mb-12">
            <h2 className="text-xl font-bold mb-6">Shipping Policies</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-medium text-lg mb-2">Order Processing</h3>
                <p className="text-gray-600">
                  Orders are processed within 1-2 business days after payment confirmation. You'll receive a shipping confirmation email with tracking information once your order ships.
                </p>
              </div>
              
              <div>
                <h3 className="font-medium text-lg mb-2">Delivery Timeframes</h3>
                <p className="text-gray-600">
                  Delivery timeframes are estimates and begin from the day your order ships, not from the order date. Factors such as weather, holidays, and customs clearance (for international orders) may affect delivery times.
                </p>
              </div>
              
              <div>
                <h3 className="font-medium text-lg mb-2">Shipping Restrictions</h3>
                <p className="text-gray-600">
                  Some products cannot be shipped to certain locations due to regulations or logistics limitations. These restrictions will be noted during checkout if they apply to your order.
                </p>
              </div>
              
              <div>
                <h3 className="font-medium text-lg mb-2">Package Tracking</h3>
                <p className="text-gray-600">
                  All shipments include tracking information. You can track your package through the link provided in your shipping confirmation email or by logging into your account and viewing your order details.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
            <h2 className="text-xl font-bold mb-6">International Shipping Information</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-medium text-lg mb-2">Customs and Import Duties</h3>
                <p className="text-gray-600">
                  International orders may be subject to customs fees, import duties, and taxes, which are the responsibility of the recipient. These charges vary by country and are collected by the local customs authority upon delivery.
                </p>
              </div>
              
              <div>
                <h3 className="font-medium text-lg mb-2">Shipping to APO/FPO Addresses</h3>
                <p className="text-gray-600">
                  We ship to APO/FPO addresses using USPS. Please note that delivery to these addresses may take longer than standard domestic shipping, typically 2-3 weeks.
                </p>
              </div>
              
              <div>
                <h3 className="font-medium text-lg mb-2">International Returns</h3>
                <p className="text-gray-600">
                  International customers are responsible for return shipping costs unless the item received was defective or incorrect. Please contact our customer service team before initiating an international return.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ShippingPage;
