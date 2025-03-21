
import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useOrder } from '../context/OrderContext';
import { formatCurrency, formatDate, getStatusColor } from '../lib/utils';
import { ArrowLeft, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';

const OrderDetail: React.FC = () => {
  const { orderId } = useParams<{ orderId: string }>();
  const navigate = useNavigate();
  const { getOrder } = useOrder();
  
  const order = orderId ? getOrder(orderId) : undefined;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!order) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Order Not Found</h1>
            <p className="text-gray-600 mb-6">The order you're looking for doesn't exist or has been removed.</p>
            <Button onClick={() => navigate('/orders')}>
              View All Orders
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-32 px-4 pb-16 animate-fade-in">
        <div className="container mx-auto max-w-4xl">
          <div className="flex items-center mb-8">
            <Link to="/orders" className="text-gray-500 hover:text-black mr-4">
              <ArrowLeft size={20} />
            </Link>
            <h1 className="text-3xl font-bold">Order #{order.id}</h1>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 mb-8">
            <div className="flex flex-col md:flex-row justify-between mb-8">
              <div>
                <p className="text-sm text-gray-500 mb-1">Order Date</p>
                <p className="font-medium">{formatDate(order.createdAt)}</p>
              </div>
              
              <div className="mt-4 md:mt-0">
                <p className="text-sm text-gray-500 mb-1">Order Status</p>
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                  {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                </span>
              </div>
              
              <div className="mt-4 md:mt-0">
                <p className="text-sm text-gray-500 mb-1">Total Amount</p>
                <p className="font-semibold">{formatCurrency(order.total)}</p>
              </div>
            </div>
            
            <div className="mb-8">
              <h2 className="text-lg font-semibold mb-4">Items</h2>
              <div className="border border-gray-100 rounded-lg overflow-hidden">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
                      <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
                      <th className="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {order.items.map((item) => (
                      <tr key={item.id}>
                        <td className="px-4 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-12 h-12 object-cover rounded-md mr-4"
                            />
                            <div>
                              <p className="font-medium">{item.name}</p>
                              <p className="text-sm text-gray-500">{formatCurrency(item.price)} each</p>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap text-center">
                          {item.quantity}
                        </td>
                        <td className="px-4 py-4 whitespace-nowrap text-right font-medium">
                          {formatCurrency(item.price * item.quantity)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-lg font-semibold mb-4">Shipping Address</h2>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="font-medium mb-2">{order.shippingAddress.name}</p>
                  <p className="text-gray-600">{order.shippingAddress.street}</p>
                  <p className="text-gray-600">
                    {order.shippingAddress.city}, {order.shippingAddress.state} {order.shippingAddress.zip}
                  </p>
                  <p className="text-gray-600">{order.shippingAddress.country}</p>
                </div>
              </div>
              
              {order.status === 'shipped' && order.trackingNumber && (
                <div>
                  <h2 className="text-lg font-semibold mb-4">Tracking Information</h2>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-gray-600 mb-2">Tracking Number:</p>
                    <p className="font-medium">{order.trackingNumber}</p>
                  </div>
                </div>
              )}
            </div>
            
            <div className="mt-8 flex justify-center">
              <Button
                onClick={() => navigate(`/order/${order.id}/support`)}
                className="flex items-center gap-2"
              >
                <MessageSquare size={18} />
                <span>Talk to Customer Support</span>
              </Button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default OrderDetail;
