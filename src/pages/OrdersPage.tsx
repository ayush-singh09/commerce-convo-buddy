
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useOrder } from '../context/OrderContext';
import { formatCurrency, formatDate, getStatusColor } from '../lib/utils';
import { ArrowRight, Package } from 'lucide-react';
import { Button } from '@/components/ui/button';

const OrdersPage: React.FC = () => {
  const { orders } = useOrder();

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-32 px-4 pb-16 animate-fade-in">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-3xl font-bold mb-8">Your Orders</h1>
          
          {orders.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-lg shadow-sm border border-gray-100">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4">
                <Package size={24} />
              </div>
              <h2 className="text-xl font-semibold mb-2">No orders yet</h2>
              <p className="text-gray-600 mb-8">You haven't placed any orders yet.</p>
              <Button asChild>
                <Link to="/products">
                  Start Shopping
                </Link>
              </Button>
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
              <div className="divide-y divide-gray-100">
                {orders.map((order) => (
                  <div key={order.id} className="p-6">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                      <div>
                        <Link
                          to={`/order/${order.id}`}
                          className="text-lg font-semibold hover:text-gray-700 transition-colors"
                        >
                          Order #{order.id}
                        </Link>
                        <p className="text-sm text-gray-500">{formatDate(order.createdAt)}</p>
                      </div>
                      
                      <div className="mt-2 md:mt-0 flex items-center">
                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium mr-4 ${getStatusColor(order.status)}`}>
                          {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                        </span>
                        
                        <span className="font-semibold">
                          {formatCurrency(order.total)}
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-4 my-4">
                      {order.items.map((item) => (
                        <div key={item.id} className="flex-shrink-0">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-16 h-16 object-cover rounded-md"
                          />
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex justify-between items-center mt-4">
                      <p className="text-sm text-gray-500">
                        {order.items.length} {order.items.length === 1 ? 'item' : 'items'}
                      </p>
                      
                      <div className="flex gap-4">
                        <Button
                          variant="outline"
                          size="sm"
                          asChild
                        >
                          <Link to={`/order/${order.id}/support`}>
                            Support
                          </Link>
                        </Button>
                        
                        <Button
                          size="sm"
                          asChild
                          className="flex items-center gap-1"
                        >
                          <Link to={`/order/${order.id}`}>
                            Details
                            <ArrowRight size={14} />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default OrdersPage;
