
import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { CartItem } from './CartContext';

export type OrderStatus = 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';

export type Order = {
  id: string;
  items: CartItem[];
  total: number;
  status: OrderStatus;
  createdAt: string;
  shippingAddress: {
    name: string;
    street: string;
    city: string;
    state: string;
    zip: string;
    country: string;
  };
  trackingNumber?: string;
};

type OrderState = {
  orders: Order[];
};

type OrderAction = 
  | { type: 'ADD_ORDER'; payload: Order }
  | { type: 'UPDATE_ORDER_STATUS'; payload: { id: string; status: OrderStatus } };

const orderReducer = (state: OrderState, action: OrderAction): OrderState => {
  switch (action.type) {
    case 'ADD_ORDER':
      return {
        ...state,
        orders: [...state.orders, action.payload]
      };
    
    case 'UPDATE_ORDER_STATUS':
      return {
        ...state,
        orders: state.orders.map(order => 
          order.id === action.payload.id 
            ? { ...order, status: action.payload.status } 
            : order
        )
      };
    
    default:
      return state;
  }
};

type OrderContextType = {
  orders: Order[];
  addOrder: (order: Order) => void;
  updateOrderStatus: (id: string, status: OrderStatus) => void;
  getOrder: (id: string) => Order | undefined;
};

const OrderContext = createContext<OrderContextType | undefined>(undefined);

export const OrderProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const initialState: OrderState = {
    orders: []
  };
  
  const [orderState, dispatch] = useReducer(orderReducer, initialState, () => {
    // Load orders from localStorage on initial render
    const savedOrders = localStorage.getItem('orders');
    return savedOrders ? JSON.parse(savedOrders) : initialState;
  });
  
  // Save orders to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('orders', JSON.stringify(orderState));
  }, [orderState]);
  
  const addOrder = (order: Order) => {
    dispatch({ type: 'ADD_ORDER', payload: order });
  };
  
  const updateOrderStatus = (id: string, status: OrderStatus) => {
    dispatch({ type: 'UPDATE_ORDER_STATUS', payload: { id, status } });
  };
  
  const getOrder = (id: string) => {
    return orderState.orders.find(order => order.id === id);
  };
  
  return (
    <OrderContext.Provider
      value={{
        orders: orderState.orders,
        addOrder,
        updateOrderStatus,
        getOrder
      }}
    >
      {children}
    </OrderContext.Provider>
  );
};

export const useOrder = (): OrderContextType => {
  const context = useContext(OrderContext);
  
  if (context === undefined) {
    throw new Error('useOrder must be used within an OrderProvider');
  }
  
  return context;
};
