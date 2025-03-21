
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const ContactPage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-32 px-4 pb-16 animate-fade-in">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-3xl font-bold mb-2">Contact Us</h1>
          <p className="text-gray-600 mb-8">
            We're here to help with any questions or concerns you may have.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex flex-col items-center text-center">
              <div className="bg-gray-100 p-4 rounded-full mb-4">
                <Mail className="h-6 w-6" />
              </div>
              <h3 className="font-medium mb-2">Email Us</h3>
              <p className="text-sm text-gray-600 mb-4">We'll respond within 24 hours</p>
              <a href="mailto:support@lumina.com" className="text-black font-medium">
                support@lumina.com
              </a>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex flex-col items-center text-center">
              <div className="bg-gray-100 p-4 rounded-full mb-4">
                <Phone className="h-6 w-6" />
              </div>
              <h3 className="font-medium mb-2">Call Us</h3>
              <p className="text-sm text-gray-600 mb-4">Mon-Fri, 9am-6pm ET</p>
              <a href="tel:+18001234567" className="text-black font-medium">
                1-800-LUMINA
              </a>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex flex-col items-center text-center">
              <div className="bg-gray-100 p-4 rounded-full mb-4">
                <MapPin className="h-6 w-6" />
              </div>
              <h3 className="font-medium mb-2">Visit Us</h3>
              <p className="text-sm text-gray-600 mb-4">Our flagship store</p>
              <p className="text-black font-medium">
                123 Tech Avenue<br />
                New York, NY 10001
              </p>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 mb-12">
            <h2 className="text-xl font-bold mb-6">Send Us a Message</h2>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200 resize-none"
                  required
                ></textarea>
              </div>
              
              <Button type="submit" className="bg-black hover:bg-gray-800 text-white">
                Send Message
              </Button>
            </form>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
            <h2 className="text-xl font-bold mb-6">Store Hours</h2>
            <div className="space-y-3">
              <div className="flex items-start">
                <Clock className="h-5 w-5 mr-3 text-gray-500" />
                <div>
                  <p className="font-medium">Monday - Friday</p>
                  <p className="text-gray-600">9:00 AM - 8:00 PM</p>
                </div>
              </div>
              <div className="flex items-start">
                <Clock className="h-5 w-5 mr-3 text-gray-500" />
                <div>
                  <p className="font-medium">Saturday</p>
                  <p className="text-gray-600">10:00 AM - 6:00 PM</p>
                </div>
              </div>
              <div className="flex items-start">
                <Clock className="h-5 w-5 mr-3 text-gray-500" />
                <div>
                  <p className="font-medium">Sunday</p>
                  <p className="text-gray-600">11:00 AM - 5:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ContactPage;
