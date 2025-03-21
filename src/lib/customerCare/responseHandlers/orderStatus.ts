
import { Order } from '../../../context/OrderContext';
import { ResponseData } from '../types';
import { getStatusMessage, getDeliveryEstimate } from '../helpers';
import { getInitialOptions } from '../initialOptions';

export function handleDeliveryStatus(order: Order): ResponseData {
  return {
    text: `Your order #${order.id} is currently ${order.status}. ${getStatusMessage(order.status)}`,
    followUp: [
      { id: 'estimated-delivery', text: 'When will my order arrive?' },
      { id: 'cancel-order', text: 'Can I still cancel this order?' },
      { id: 'other-questions', text: 'I have other questions' },
    ],
  };
}

export function handleEstimatedDelivery(order: Order): ResponseData {
  return {
    text: `Based on your order status (${order.status}), ${getDeliveryEstimate(order.status)}`,
    followUp: [
      { id: 'delivery-address', text: 'Can I change my delivery address?' },
      { id: 'delivery-instructions', text: 'I want to add delivery instructions' },
      { id: 'back-to-main', text: 'Back to main options' },
    ],
  };
}

export function handleDeliveryAddressOrInstructions(order: Order): ResponseData {
  return {
    text: order.status === 'pending' || order.status === 'processing'
      ? 'You can update your delivery information since your order hasn\'t been shipped yet. Please call our customer service at 1-800-LUMINA within the next 24 hours to make changes.'
      : 'We\'re sorry, but your order has already been prepared for shipping or shipped. It\'s too late to change the delivery details.',
    followUp: [
      { id: 'back-to-main', text: 'Back to main options' },
    ],
  };
}

export function handleBackToMain(order: Order): ResponseData {
  return {
    text: 'What else can I help you with regarding your order?',
    followUp: getInitialOptions(order),
  };
}
