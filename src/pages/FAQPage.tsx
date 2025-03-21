
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-32 px-4 pb-16 animate-fade-in">
        <div className="container mx-auto max-w-3xl">
          <h1 className="text-3xl font-bold mb-2">Frequently Asked Questions</h1>
          <p className="text-gray-600 mb-8">
            Find answers to the most common questions about our products and services.
          </p>
          
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 mb-12">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="border-b border-gray-100 pb-2">
                <AccordionTrigger className="text-lg font-medium hover:no-underline">
                  How long does shipping take?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Standard shipping takes 3-5 business days within the continental US. 
                  Express shipping options are available at checkout for 1-2 business day delivery. 
                  International shipping times vary by location, typically between 7-14 business days.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border-b border-gray-100 pb-2">
                <AccordionTrigger className="text-lg font-medium hover:no-underline">
                  What is your return policy?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  We offer a 30-day return policy for most items. Products must be in their original condition 
                  with all packaging and accessories. Some products like earphones and personal care items may 
                  not be eligible for return due to hygiene reasons unless defective.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border-b border-gray-100 pb-2">
                <AccordionTrigger className="text-lg font-medium hover:no-underline">
                  How do I track my order?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Once your order ships, you'll receive a tracking number via email. You can also view your 
                  order status and tracking information in the "My Orders" section of your account.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border-b border-gray-100 pb-2">
                <AccordionTrigger className="text-lg font-medium hover:no-underline">
                  Do you offer international shipping?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Yes, we ship to many countries worldwide. International shipping costs and 
                  delivery times are calculated at checkout based on your location. Please note that 
                  import duties and taxes may apply depending on your country's regulations.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="border-b border-gray-100 pb-2">
                <AccordionTrigger className="text-lg font-medium hover:no-underline">
                  How do I cancel or modify my order?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  You can request order cancellations or modifications by contacting our customer service team as soon as possible. 
                  We can usually accommodate changes if the order hasn't been processed or shipped yet. Once an order has shipped, 
                  it cannot be cancelled, but you can return it following our return policy.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="border-b border-gray-100 pb-2">
                <AccordionTrigger className="text-lg font-medium hover:no-underline">
                  What warranty do your products have?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Most of our products come with a one-year limited warranty that covers manufacturing defects. 
                  Premium products may have extended warranty options. Specific warranty information is included 
                  on each product page and in the documentation that comes with your purchase.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7" className="border-b border-gray-100 pb-2">
                <AccordionTrigger className="text-lg font-medium hover:no-underline">
                  Do you offer price matching?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Yes, we offer price matching for identical items sold by major authorized retailers. 
                  To request a price match, contact our customer service team with proof of the lower price 
                  within 14 days of your purchase.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-8" className="border-b border-gray-100 pb-2">
                <AccordionTrigger className="text-lg font-medium hover:no-underline">
                  How do I set up my product?
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Detailed setup instructions are included with each product. You can also find user manuals, 
                  quick start guides, and video tutorials on our website under the Support section. If you need 
                  additional help, our technical support team is available via chat, email, or phone.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
          
          <div className="text-center">
            <h2 className="text-xl font-bold mb-4">Still have questions?</h2>
            <p className="text-gray-600 mb-6">
              Our customer support team is ready to help you with any other questions you might have.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                to="/contact" 
                className="px-6 py-3 bg-black text-white rounded-md hover:bg-gray-800 transition-colors"
              >
                Contact Us
              </Link>
              <a 
                href="mailto:support@lumina.com" 
                className="px-6 py-3 bg-gray-100 text-gray-800 rounded-md hover:bg-gray-200 transition-colors"
              >
                Email Support
              </a>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default FAQPage;
