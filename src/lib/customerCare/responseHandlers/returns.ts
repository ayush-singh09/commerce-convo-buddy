
import { Order } from '../../../context/OrderContext';
import { ResponseData } from '../types';

export function handleReturnItem(): ResponseData {
  return {
    text: 'You can initiate a return within 30 days of delivery. Once your order is delivered, you\'ll see a "Return" button in your order details. Would you like to know more about our return policy?',
    followUp: [
      { id: 'return-policy', text: 'Tell me about your return policy' },
      { id: 'refund-time', text: 'How long do refunds take?' },
      { id: 'back-to-main', text: 'Back to main options' },
    ],
  };
}

export function handleReturnPolicy(): ResponseData {
  return {
    text: 'We offer a 30-day return policy for most items. Products must be in their original condition with all packaging and accessories. Some products like earphones and personal care items may not be eligible for return due to hygiene reasons unless defective.',
    followUp: [
      { id: 'refund-time', text: 'How long do refunds take?' },
      { id: 'back-to-main', text: 'Back to main options' },
    ],
  };
}

export function handleRefundTime(): ResponseData {
  return {
    text: 'Once we receive your returned item, your refund will be processed within 5-7 business days. The time it takes for the money to appear in your account depends on your payment method and financial institution.',
    followUp: [
      { id: 'back-to-main', text: 'Back to main options' },
    ],
  };
}

export function handleRefundStatus(): ResponseData {
  return {
    text: 'Refunds typically take 3-5 business days to process once a cancellation or return is confirmed. If it has been longer, please contact our customer support team directly.',
    followUp: [
      { id: 'back-to-main', text: 'Back to main options' },
    ],
  };
}
