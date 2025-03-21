
import { Order } from '../context/OrderContext';

export type QuestionOption = {
  id: string;
  text: string;
};

export type SystemMessage = {
  sender: 'system';
  content: string;
  options?: QuestionOption[];
};

export type UserMessage = {
  sender: 'user';
  content: string;
};

export type Message = SystemMessage | UserMessage;

export type ConversationState = {
  order: Order | null;
  messages: Message[];
};

export type ResponseData = {
  text: string;
  followUp?: QuestionOption[];
};

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

// Get response based on option ID
export const getResponse = (optionId: string, order: Order): ResponseData => {
  switch (optionId) {
    case 'delivery-status':
      return {
        text: `Your order #${order.id} is currently ${order.status}. ${getStatusMessage(order.status)}`,
        followUp: [
          { id: 'estimated-delivery', text: 'When will my order arrive?' },
          { id: 'cancel-order', text: 'Can I still cancel this order?' },
          { id: 'other-questions', text: 'I have other questions' },
        ],
      };

    case 'estimated-delivery':
      return {
        text: `Based on your order status (${order.status}), ${getDeliveryEstimate(order.status)}`,
        followUp: [
          { id: 'delivery-address', text: 'Can I change my delivery address?' },
          { id: 'delivery-instructions', text: 'I want to add delivery instructions' },
          { id: 'back-to-main', text: 'Back to main options' },
        ],
      };

    case 'cancel-order':
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

    case 'confirm-cancel':
      return {
        text: 'Your order has been submitted for cancellation. You will receive a confirmation email shortly, and your payment will be refunded within 3-5 business days.',
        followUp: [
          { id: 'refund-status', text: 'Check refund status' },
          { id: 'back-to-main', text: 'Back to main options' },
        ],
      };

    case 'keep-order':
      return {
        text: 'Great! Your order will continue to be processed. Is there anything else you need help with?',
        followUp: getInitialOptions(order),
      };

    case 'return-item':
      return {
        text: 'You can initiate a return within 30 days of delivery. Once your order is delivered, you\'ll see a "Return" button in your order details. Would you like to know more about our return policy?',
        followUp: [
          { id: 'return-policy', text: 'Tell me about your return policy' },
          { id: 'refund-time', text: 'How long do refunds take?' },
          { id: 'back-to-main', text: 'Back to main options' },
        ],
      };

    case 'return-policy':
      return {
        text: 'We offer a 30-day return policy for most items. Products must be in their original condition with all packaging and accessories. Some products like earphones and personal care items may not be eligible for return due to hygiene reasons unless defective.',
        followUp: [
          { id: 'refund-time', text: 'How long do refunds take?' },
          { id: 'back-to-main', text: 'Back to main options' },
        ],
      };

    case 'refund-time':
      return {
        text: 'Once we receive your returned item, your refund will be processed within 5-7 business days. The time it takes for the money to appear in your account depends on your payment method and financial institution.',
        followUp: [
          { id: 'back-to-main', text: 'Back to main options' },
        ],
      };

    case 'refund-status':
      return {
        text: 'Refunds typically take 3-5 business days to process once a cancellation or return is confirmed. If it has been longer, please contact our customer support team directly.',
        followUp: [
          { id: 'back-to-main', text: 'Back to main options' },
        ],
      };

    case 'other-issue':
      return {
        text: 'We\'re sorry to hear you\'re having an issue. Please tell us more about your concern so we can assist you better.',
        followUp: [
          { id: 'missing-item', text: 'An item is missing from my order' },
          { id: 'damaged-item', text: 'I received a damaged item' },
          { id: 'wrong-item', text: 'I received the wrong item' },
          { id: 'back-to-main', text: 'Back to main options' },
        ],
      };

    case 'product-complaint':
      return {
        text: 'We\'re sorry to hear you have an issue with your product. Please select the type of complaint:',
        followUp: [
          { id: 'defective-product', text: 'The product is defective' },
          { id: 'not-as-described', text: 'The product is not as described' },
          { id: 'poor-quality', text: 'The product quality is poor' },
          { id: 'stopped-working', text: 'The product stopped working' },
          { id: 'back-to-main', text: 'Back to main options' },
        ],
      };

    case 'defective-product':
      return {
        text: 'We apologize that you received a defective product. You can either return it for a full refund or request a replacement. What would you prefer?',
        followUp: [
          { id: 'request-replacement', text: 'I want a replacement' },
          { id: 'return-for-refund', text: 'I want to return it for a refund' },
          { id: 'speak-to-specialist', text: 'I want to speak to a product specialist' },
          { id: 'back-to-main', text: 'Back to main options' },
        ],
      };

    case 'not-as-described':
      return {
        text: 'We take product accuracy very seriously. Could you please explain how the product differs from its description? This will help us address the issue and improve our listings.',
        followUp: [
          { id: 'return-for-refund', text: 'I want to return it for a refund' },
          { id: 'speak-to-specialist', text: 'I want to speak to a product specialist' },
          { id: 'back-to-main', text: 'Back to main options' },
        ],
      };

    case 'poor-quality':
      return {
        text: 'We're sorry to hear the product didn't meet your quality expectations. Your feedback is valuable to us. Would you like to return the item or share specific feedback about the quality issues?',
        followUp: [
          { id: 'return-for-refund', text: 'I want to return it for a refund' },
          { id: 'provide-feedback', text: 'I want to provide detailed feedback' },
          { id: 'back-to-main', text: 'Back to main options' },
        ],
      };

    case 'stopped-working':
      return {
        text: 'We apologize for the inconvenience. How long were you using the product before it stopped working? This will help us determine if it's covered under warranty.',
        followUp: [
          { id: 'within-warranty', text: 'Less than the warranty period' },
          { id: 'outside-warranty', text: 'Beyond the warranty period' },
          { id: 'speak-to-specialist', text: 'I want to speak to a technical specialist' },
          { id: 'back-to-main', text: 'Back to main options' },
        ],
      };

    case 'request-replacement':
      return {
        text: 'We'll process a replacement for your defective item. Please keep the original packaging as our courier will collect it when delivering your replacement. You should receive the replacement within 5-7 business days.',
        followUp: [
          { id: 'replacement-status', text: 'Check replacement status' },
          { id: 'back-to-main', text: 'Back to main options' },
        ],
      };

    case 'within-warranty':
      return {
        text: 'Since your product is still under warranty, you're eligible for a free repair or replacement. Would you like us to arrange for a replacement or would you prefer to have it repaired?',
        followUp: [
          { id: 'request-replacement', text: 'I want a replacement' },
          { id: 'request-repair', text: 'I want it repaired' },
          { id: 'back-to-main', text: 'Back to main options' },
        ],
      };

    case 'outside-warranty':
      return {
        text: 'Even though your product is outside the warranty period, we may be able to offer a discounted repair service or a special discount on a new purchase. Would you be interested in either option?',
        followUp: [
          { id: 'discounted-repair', text: 'I'm interested in the discounted repair' },
          { id: 'new-purchase-discount', text: 'I'm interested in a discount on a new product' },
          { id: 'back-to-main', text: 'Back to main options' },
        ],
      };

    case 'missing-item':
    case 'damaged-item':
    case 'wrong-item':
      return {
        text: 'We sincerely apologize for this error. Please take a photo of what you received (or didn\'t receive) and upload it to your order details page. We\'ll expedite a resolution for you.',
        followUp: [
          { id: 'replacement-timeframe', text: 'How long will it take to get a replacement?' },
          { id: 'refund-option', text: 'Can I get a refund instead?' },
          { id: 'back-to-main', text: 'Back to main options' },
        ],
      };

    case 'delivery-address':
    case 'delivery-instructions':
      return {
        text: order.status === 'pending' || order.status === 'processing'
          ? 'You can update your delivery information since your order hasn\'t been shipped yet. Please call our customer service at 1-800-LUMINA within the next 24 hours to make changes.'
          : 'We\'re sorry, but your order has already been prepared for shipping or shipped. It\'s too late to change the delivery details.',
        followUp: [
          { id: 'back-to-main', text: 'Back to main options' },
        ],
      };

    case 'other-questions':
    case 'provide-feedback':
    case 'speak-to-specialist':
      return {
        text: 'For more detailed assistance, please contact our customer service team directly at support@lumina.com or call 1-800-LUMINA during business hours (9 AM - 6 PM EST, Monday to Friday).',
        followUp: [
          { id: 'back-to-main', text: 'Back to main options' },
        ],
      };

    case 'back-to-main':
      return {
        text: 'What else can I help you with regarding your order?',
        followUp: getInitialOptions(order),
      };

    default:
      return {
        text: 'I\'m not sure I understand. Can you please select one of the options below?',
        followUp: getInitialOptions(order),
      };
  }
};

// Helper functions
function getStatusMessage(status: string): string {
  switch (status) {
    case 'pending':
      return 'We are currently processing your payment.';
    case 'processing':
      return 'We are preparing your items for shipment.';
    case 'shipped':
      return 'Your order is on its way to you!';
    case 'delivered':
      return 'Your order has been delivered.';
    case 'cancelled':
      return 'This order has been cancelled.';
    default:
      return '';
  }
}

function getDeliveryEstimate(status: string): string {
  switch (status) {
    case 'pending':
      return 'your order should be delivered within 5-7 business days once payment is processed.';
    case 'processing':
      return 'your order should be delivered within 3-5 business days.';
    case 'shipped':
      return 'your order should be delivered within 1-2 business days.';
    case 'delivered':
      return 'your order has already been delivered.';
    case 'cancelled':
      return 'this order has been cancelled and will not be delivered.';
    default:
      return 'delivery estimates are not available at this time.';
  }
}
