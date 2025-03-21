import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useCart } from '../context/CartContext';
import { useOrder } from '../context/OrderContext';
import { formatCurrency, generateOrderId } from '../lib/utils';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
  paymentMethod: 'card' | 'cod';
  cardName: string;
  cardNumber: string;
  expDate: string;
  cvv: string;
};

const CheckoutPage: React.FC = () => {
  const navigate = useNavigate();
  const { cart, clearCart } = useCart();
  const { addOrder } = useOrder();
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'United States',
    paymentMethod: 'card',
    cardName: '',
    cardNumber: '',
    expDate: '',
    cvv: '',
  });
  const [isProcessing, setIsProcessing] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  if (cart.items.length === 0) {
    navigate('/cart');
    return null;
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleNextStep = () => {
    if (currentStep === 1) {
      if (!formData.firstName || !formData.lastName || !formData.email || !formData.address || !formData.city || !formData.state || !formData.zipCode) {
        toast.error("Please fill in all required fields");
        return;
      }
    }
    setCurrentStep(2);
  };

  const handlePrevStep = () => {
    setCurrentStep(1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.paymentMethod === 'card' && (!formData.cardName || !formData.cardNumber || !formData.expDate || !formData.cvv)) {
      toast.error("Please fill in all payment details");
      return;
    }
    
    setIsProcessing(true);
    
    // Simulate payment processing
    try {
      // In a real application, this would be where you'd send the payment information to a payment processor
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      const orderId = generateOrderId();
      
      // Create the order
      addOrder({
        id: orderId,
        items: [...cart.items],
        total: cart.total > 50 ? cart.total : cart.total + 10,
        status: 'pending',
        createdAt: new Date().toISOString(),
        shippingAddress: {
          name: `${formData.firstName} ${formData.lastName}`,
          street: formData.address,
          city: formData.city,
          state: formData.state,
          zip: formData.zipCode,
          country: formData.country,
        },
        paymentMethod: formData.paymentMethod
      });
      
      // Clear the cart after successful order
      clearCart();
      
      // Navigate to order confirmation
      navigate(`/order/${orderId}`);
      
    } catch (error) {
      toast.error("There was an error processing your payment. Please try again.");
      setIsProcessing(false);
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-32 px-4 pb-16 animate-fade-in">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-3xl font-bold mb-8">Checkout</h1>
          
          <div className="mb-8">
            <div className="flex items-center">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${currentStep >= 1 ? 'bg-black text-white' : 'bg-gray-200'}`}>
                1
              </div>
              <div className={`flex-1 h-1 mx-2 ${currentStep >= 2 ? 'bg-black' : 'bg-gray-200'}`}></div>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${currentStep >= 2 ? 'bg-black text-white' : 'bg-gray-200'}`}>
                2
              </div>
            </div>
            <div className="flex justify-between mt-2">
              <span className="text-sm font-medium">Shipping</span>
              <span className="text-sm font-medium">Payment</span>
            </div>
          </div>
          
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Form Content */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
                  {currentStep === 1 ? (
                    <>
                      <h2 className="text-xl font-semibold mb-6">Shipping Information</h2>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                        <div>
                          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                            First Name <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200"
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                            Last Name <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200"
                          />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                            Email <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200"
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                            Phone
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200"
                          />
                        </div>
                      </div>
                      
                      <div className="mb-4">
                        <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                          Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="address"
                          name="address"
                          value={formData.address}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200"
                        />
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div>
                          <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                            City <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            id="city"
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200"
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">
                            State <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            id="state"
                            name="state"
                            value={formData.state}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200"
                          />
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div>
                          <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700 mb-1">
                            ZIP Code <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            id="zipCode"
                            name="zipCode"
                            value={formData.zipCode}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200"
                          />
                        </div>
                        
                        <div>
                          <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">
                            Country <span className="text-red-500">*</span>
                          </label>
                          <select
                            id="country"
                            name="country"
                            value={formData.country}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200"
                          >
                            <option value="United States">United States</option>
                            <option value="Canada">Canada</option>
                            <option value="Mexico">Mexico</option>
                            <option value="United Kingdom">United Kingdom</option>
                            <option value="India">India</option>
                          </select>
                        </div>
                      </div>
                      
                      <div className="mt-6">
                        <Button
                          type="button"
                          onClick={handleNextStep}
                          className="w-full bg-black hover:bg-gray-800 text-white py-3"
                        >
                          Continue to Payment
                        </Button>
                      </div>
                    </>
                  ) : (
                    <>
                      <h2 className="text-xl font-semibold mb-6">Payment Information</h2>

                      <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Payment Method <span className="text-red-500">*</span>
                        </label>
                        <div className="space-y-3">
                          <label className="flex items-center space-x-3">
                            <input
                              type="radio"
                              name="paymentMethod"
                              value="card"
                              checked={formData.paymentMethod === 'card'}
                              onChange={handleChange}
                              className="h-4 w-4"
                            />
                            <span>Credit/Debit Card</span>
                          </label>
                          <label className="flex items-center space-x-3">
                            <input
                              type="radio"
                              name="paymentMethod"
                              value="cod"
                              checked={formData.paymentMethod === 'cod'}
                              onChange={handleChange}
                              className="h-4 w-4"
                            />
                            <span>Cash on Delivery</span>
                          </label>
                        </div>
                      </div>
                      
                      {formData.paymentMethod === 'card' && (
                        <>
                          <div className="mb-4">
                            <label htmlFor="cardName" className="block text-sm font-medium text-gray-700 mb-1">
                              Name on Card <span className="text-red-500">*</span>
                            </label>
                            <input
                              type="text"
                              id="cardName"
                              name="cardName"
                              value={formData.cardName}
                              onChange={handleChange}
                              required
                              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200"
                            />
                          </div>
                          
                          <div className="mb-4">
                            <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700 mb-1">
                              Card Number <span className="text-red-500">*</span>
                            </label>
                            <input
                              type="text"
                              id="cardNumber"
                              name="cardNumber"
                              value={formData.cardNumber}
                              onChange={handleChange}
                              required
                              placeholder="XXXX XXXX XXXX XXXX"
                              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200"
                            />
                          </div>
                          
                          <div className="grid grid-cols-2 gap-4 mb-6">
                            <div>
                              <label htmlFor="expDate" className="block text-sm font-medium text-gray-700 mb-1">
                                Expiration Date <span className="text-red-500">*</span>
                              </label>
                              <input
                                type="text"
                                id="expDate"
                                name="expDate"
                                value={formData.expDate}
                                onChange={handleChange}
                                required
                                placeholder="MM/YY"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200"
                              />
                            </div>
                            
                            <div>
                              <label htmlFor="cvv" className="block text-sm font-medium text-gray-700 mb-1">
                                CVV <span className="text-red-500">*</span>
                              </label>
                              <input
                                type="text"
                                id="cvv"
                                name="cvv"
                                value={formData.cvv}
                                onChange={handleChange}
                                required
                                placeholder="123"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200"
                              />
                            </div>
                          </div>
                        </>
                      )}
                      
                      {formData.paymentMethod === 'cod' && (
                        <div className="mb-6 p-4 bg-gray-50 rounded border border-gray-200">
                          <p className="text-sm text-gray-700">
                            You will pay the full amount when your order is delivered. Please ensure someone is available to receive the package and make the payment.
                          </p>
                        </div>
                      )}
                      
                      <div className="flex gap-4">
                        <Button
                          type="button"
                          variant="outline"
                          onClick={handlePrevStep}
                          className="flex-1"
                        >
                          Back
                        </Button>
                        
                        <Button
                          type="submit"
                          disabled={isProcessing}
                          className="flex-1 bg-black hover:bg-gray-800 text-white"
                        >
                          {isProcessing ? 'Processing...' : 'Place Order'}
                        </Button>
                      </div>
                    </>
                  )}
                </div>
              </div>
              
              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 sticky top-32">
                  <h2 className="text-xl font-semibold mb-6">Order Summary</h2>
                  
                  <div className="space-y-4 mb-6">
                    <div className="max-h-60 overflow-y-auto pr-2">
                      {cart.items.map((item) => (
                        <div key={item.id} className="flex items-center gap-3 py-2 border-b border-gray-100">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-12 h-12 object-cover rounded-md"
                          />
                          <div className="flex-grow">
                            <p className="text-sm font-medium">{item.name}</p>
                            <div className="flex justify-between items-center">
                              <span className="text-xs text-gray-500">Qty: {item.quantity}</span>
                              <span className="text-sm font-medium">{formatCurrency(item.price * item.quantity)}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    
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
                </div>
              </div>
            </div>
          </form>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CheckoutPage;
