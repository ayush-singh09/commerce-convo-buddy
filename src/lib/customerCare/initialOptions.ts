
import { Order } from '../../context/OrderContext';
import { QuestionOption } from './types';

// Initial question options based on order
export const getInitialOptions = (order: Order): QuestionOption[] => {
  return [
    { id: 'delivery-status', text: `What's the status of my order #${order.id}?` },
    { id: 'estimated-delivery', text: 'When will my order arrive?' },
    { id: 'cancel-order', text: 'I want to cancel my order' },
    { id: 'return-item', text: 'I want to return an item from this order' },
    { id: 'product-complaint', text: 'I have a complaint about a product in this order' },
    { id: 'other-issue', text: 'I have another issue with my order' },
  ];
};
