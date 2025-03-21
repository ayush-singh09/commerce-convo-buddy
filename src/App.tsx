
import { Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import CartContextProvider from './context/CartContext';
import OrderContextProvider from './context/OrderContext';
import './App.css';

// Lazy load pages for better performance
const IndexPage = lazy(() => import('./pages/Index'));
const ProductsPage = lazy(() => import('./pages/ProductsPage'));
const ProductDetail = lazy(() => import('./pages/ProductDetail'));
const CartPage = lazy(() => import('./pages/CartPage'));
const CheckoutPage = lazy(() => import('./pages/CheckoutPage'));
const OrdersPage = lazy(() => import('./pages/OrdersPage'));
const OrderDetail = lazy(() => import('./pages/OrderDetail'));
const CustomerCareChat = lazy(() => import('./components/CustomerCareChat'));
const NotFound = lazy(() => import('./pages/NotFound'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const FAQPage = lazy(() => import('./pages/FAQPage'));
const ShippingPage = lazy(() => import('./pages/ShippingPage'));
const ReturnsPage = lazy(() => import('./pages/ReturnsPage'));

function App() {
  return (
    <CartContextProvider>
      <OrderContextProvider>
        <Suspense fallback={<div className="flex h-screen items-center justify-center">Loading...</div>}>
          <Routes>
            <Route path="/" element={<IndexPage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/products/category/:category" element={<ProductsPage />} />
            <Route path="/product/:productId" element={<ProductDetail />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/orders" element={<OrdersPage />} />
            <Route path="/order/:orderId" element={<OrderDetail />} />
            <Route path="/order/:orderId/support" element={<CustomerCareChat />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/shipping" element={<ShippingPage />} />
            <Route path="/returns" element={<ReturnsPage />} />
            <Route path="/404" element={<NotFound />} />
            <Route path="*" element={<Navigate to="/404" replace />} />
          </Routes>
        </Suspense>
      </OrderContextProvider>
    </CartContextProvider>
  );
}

export default App;
