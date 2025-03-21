
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { ArrowLeftRight, Check, AlertTriangle, HelpCircle } from 'lucide-react';

const ReturnsPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-32 px-4 pb-16 animate-fade-in">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-3xl font-bold mb-2">Returns & Exchanges</h1>
          <p className="text-gray-600 mb-8">
            Our hassle-free return and exchange policies to ensure your satisfaction.
          </p>
          
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 mb-12">
            <h2 className="text-xl font-bold mb-6">Return Policy</h2>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-gray-100 p-3 rounded-full mr-4 shrink-0">
                  <ArrowLeftRight className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-1">30-Day Return Period</h3>
                  <p className="text-gray-600">
                    We offer a 30-day return period for most items, starting from the date of delivery. 
                    To be eligible for a return, your item must be in the same condition as you received 
                    it — unused, unworn, undamaged, and in its original packaging with all tags attached.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-gray-100 p-3 rounded-full mr-4 shrink-0">
                  <Check className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-1">Eligible Items</h3>
                  <p className="text-gray-600">
                    Most products are eligible for returns. However, certain items cannot be returned due to 
                    hygiene reasons (like earphones) or special order characteristics, unless they are defective.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-gray-100 p-3 rounded-full mr-4 shrink-0">
                  <AlertTriangle className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-medium text-lg mb-1">Non-Returnable Items</h3>
                  <p className="text-gray-600">
                    The following items cannot be returned:
                  </p>
                  <ul className="list-disc pl-5 mt-2 text-gray-600">
                    <li>Personalized or custom-made products</li>
                    <li>Digital products or software that has been downloaded or activated</li>
                    <li>Gift cards</li>
                    <li>Earphones, earbuds, and other in-ear audio devices (for hygiene reasons)</li>
                    <li>Products marked as final sale or clearance</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 mb-12">
            <h2 className="text-xl font-bold mb-6">Return Process</h2>
            
            <ol className="space-y-6">
              <li className="flex">
                <span className="bg-black text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 shrink-0">1</span>
                <div>
                  <h3 className="font-medium text-lg mb-1">Initiate Your Return</h3>
                  <p className="text-gray-600">
                    Log in to your account, go to "My Orders," find the order containing the item you want to return, 
                    and click on "Return Item." Alternatively, you can contact our customer service team.
                  </p>
                </div>
              </li>
              
              <li className="flex">
                <span className="bg-black text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 shrink-0">2</span>
                <div>
                  <h3 className="font-medium text-lg mb-1">Print Return Label</h3>
                  <p className="text-gray-600">
                    Once your return is approved, you'll receive a return shipping label via email. 
                    Print this label and affix it to your package.
                  </p>
                </div>
              </li>
              
              <li className="flex">
                <span className="bg-black text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 shrink-0">3</span>
                <div>
                  <h3 className="font-medium text-lg mb-1">Package Your Return</h3>
                  <p className="text-gray-600">
                    Place the item(s) in their original packaging if possible, or in a secure box. 
                    Include all accessories, manuals, and any free gifts that came with the purchase.
                  </p>
                </div>
              </li>
              
              <li className="flex">
                <span className="bg-black text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 shrink-0">4</span>
                <div>
                  <h3 className="font-medium text-lg mb-1">Ship Your Return</h3>
                  <p className="text-gray-600">
                    Drop off your package at any authorized shipping location. We recommend getting a tracking 
                    number and receipt for your records.
                  </p>
                </div>
              </li>
              
              <li className="flex">
                <span className="bg-black text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 shrink-0">5</span>
                <div>
                  <h3 className="font-medium text-lg mb-1">Refund Processing</h3>
                  <p className="text-gray-600">
                    Once we receive and inspect your return, we'll process your refund. This typically takes 
                    5-7 business days. You'll be notified by email when your refund has been processed.
                  </p>
                </div>
              </li>
            </ol>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 mb-12">
            <h2 className="text-xl font-bold mb-6">Exchanges</h2>
            
            <p className="text-gray-600 mb-6">
              We offer direct exchanges for the same item in a different size or color, subject to availability. 
              For other exchange situations, we recommend returning the original item for a refund and placing a 
              new order for the desired item.
            </p>
            
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h3 className="font-medium text-lg mb-3">To process an exchange:</h3>
              <ol className="list-decimal pl-5 space-y-2 text-gray-600">
                <li>Contact our customer service team within 30 days of receiving your order</li>
                <li>Provide your order number and the item you wish to exchange</li>
                <li>Specify the new size, color, or model you want</li>
                <li>Our team will guide you through the exchange process</li>
              </ol>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
            <h2 className="text-xl font-bold mb-6">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-medium text-lg mb-1">Do I have to pay for return shipping?</h3>
                <p className="text-gray-600">
                  For standard returns, customers are responsible for return shipping costs. However, if you received a 
                  defective, damaged, or incorrect item, we'll provide a prepaid return label.
                </p>
              </div>
              
              <div>
                <h3 className="font-medium text-lg mb-1">How long do refunds take to process?</h3>
                <p className="text-gray-600">
                  Once we receive your return, refunds typically take 5-7 business days to process. The time it takes 
                  for the money to appear in your account depends on your payment method and financial institution.
                </p>
              </div>
              
              <div>
                <h3 className="font-medium text-lg mb-1">Can I return a gift?</h3>
                <p className="text-gray-600">
                  Yes, gifts can be returned for store credit or exchange. You'll need the order number or gift receipt. 
                  The refund will be issued as store credit to avoid notifying the gift giver.
                </p>
              </div>
              
              <div>
                <h3 className="font-medium text-lg mb-1">What if my item is defective?</h3>
                <p className="text-gray-600">
                  If you receive a defective item, please contact us within 48 hours of delivery. We'll arrange for a 
                  replacement or refund and cover all shipping costs.
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <h3 className="text-lg font-medium mb-4">Need more help with returns or exchanges?</h3>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                to="/contact" 
                className="px-6 py-3 bg-black text-white rounded-md hover:bg-gray-800 transition-colors"
              >
                Contact Us
              </Link>
              <Link 
                to="/faq" 
                className="px-6 py-3 bg-gray-100 text-gray-800 rounded-md hover:bg-gray-200 transition-colors"
              >
                View FAQs
              </Link>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ReturnsPage;
