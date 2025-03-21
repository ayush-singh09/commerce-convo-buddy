
import { Order } from '../../../context/OrderContext';
import { ResponseData } from '../types';
import { getInitialOptions } from '../initialOptions';

export function handleCancelOrder(order: Order): ResponseData {
  return {
    text: order.status === 'pending' || order.status === 'processing'
      ? 'You can cancel your order as it has not been shipped yet. Would you like to proceed with cancellation?'
      : 'We\'re sorry, but your order has already been shipped and cannot be cancelled. However, you can return it once it arrives.',
    followUp: order.status === 'pending' || order.status === 'processing'
      ? [
          { id: 'confirm-cancel', text: 'Yes, cancel my order' },
          { id: 'keep-order', text: 'No, keep my order' },
        ]
      : [
          { id: 'return-item', text: 'I want to return it when it arrives' },
          { id: 'back-to-main', text: 'Back to main options' },
        ],
  };
}

export function handleConfirmCancel(): ResponseData {
  return {
    text: 'Your order has been submitted for cancellation. You will receive a confirmation email shortly, and your payment will be refunded within 3-5 business days.',
    followUp: [
      { id: 'refund-status', text: 'Check refund status' },
      { id: 'back-to-main', text: 'Back to main options' },
    ],
  };
}

export function handleKeepOrder(order: Order): ResponseData {
  return {
    text: 'Great! Your order will continue to be processed. Is there anything else you need help with?',
    followUp: getInitialOptions(order),
  };
}
