
import { Order } from "../context/OrderContext";

export type QuestionOption = {
  id: string;
  text: string;
};

export type Response = {
  text: string;
  followUp?: QuestionOption[];
};

export type ConversationState = {
  order: Order | null;
  messages: {
    sender: 'user' | 'system';
    content: string;
    options?: QuestionOption[];
  }[];
};

// Define the predefined questions based on order status
export const getInitialOptions = (order: Order): QuestionOption[] => {
  const commonOptions = [
    { id: 'order_details', text: 'I want to review my order details' },
    { id: 'modify_cancel', text: 'Can I modify or cancel my order?' },
  ];

  switch (order.status) {
    case 'pending':
      return [
        ...commonOptions,
        { id: 'payment_issue', text: 'I have a payment issue' },
        { id: 'estimated_ship', text: 'When will my order be shipped?' },
      ];
    case 'processing':
      return [
        ...commonOptions,
        { id: 'processing_time', text: 'How long does processing take?' },
        { id: 'change_address', text: 'Can I change my shipping address?' },
      ];
    case 'shipped':
      return [
        { id: 'tracking', text: 'Where is my package? (Tracking)' },
        { id: 'estimated_delivery', text: 'When will my order arrive?' },
        { id: 'damaged_package', text: 'What if my package arrives damaged?' },
      ];
    case 'delivered':
      return [
        { id: 'return_policy', text: 'What is your return policy?' },
        { id: 'missing_items', text: 'Items are missing from my order' },
        { id: 'damaged_items', text: 'I received damaged items' },
      ];
    case 'cancelled':
      return [
        { id: 'refund_status', text: 'When will I receive my refund?' },
        { id: 'cancellation_reason', text: 'Why was my order cancelled?' },
        { id: 'reorder', text: 'I want to place this order again' },
      ];
    default:
      return commonOptions;
  }
};

// Helper function to get response based on question id
export const getResponse = (questionId: string, order: Order): Response => {
  switch (questionId) {
    case 'order_details':
      return {
        text: `Your order #${order.id} includes ${order.items.length} item(s) with a total of ${new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(order.total)}. It was placed on ${new Date(order.createdAt).toLocaleDateString()} and is currently ${order.status}.`,
        followUp: [
          { id: 'shipping_address', text: 'Show my shipping address' },
          { id: 'back_to_main', text: 'Go back to main options' },
        ],
      };
    case 'shipping_address':
      return {
        text: `Your order will be shipped to: ${order.shippingAddress.name}, ${order.shippingAddress.street}, ${order.shippingAddress.city}, ${order.shippingAddress.state} ${order.shippingAddress.zip}, ${order.shippingAddress.country}`,
        followUp: [
          { id: 'back_to_main', text: 'Go back to main options' },
        ],
      };
    case 'modify_cancel':
      return order.status === 'pending' || order.status === 'processing'
        ? {
            text: 'You can modify or cancel your order while it\'s still in the processing stage. Would you like to proceed with a modification or cancellation?',
            followUp: [
              { id: 'cancel_order', text: 'I want to cancel my order' },
              { id: 'modify_order', text: 'I want to modify my order' },
              { id: 'back_to_main', text: 'Go back to main options' },
            ],
          }
        : {
            text: `We're sorry, but your order has already ${order.status === 'shipped' ? 'been shipped' : order.status === 'delivered' ? 'been delivered' : 'reached a status'} where it can no longer be modified or cancelled. Please contact our customer support team for further assistance.`,
            followUp: [
              { id: 'back_to_main', text: 'Go back to main options' },
            ],
          };
    case 'payment_issue':
      return {
        text: 'We\'re sorry to hear you\'re experiencing payment issues. Could you please specify what problem you\'re having?',
        followUp: [
          { id: 'payment_declined', text: 'My payment was declined' },
          { id: 'double_charge', text: 'I was charged twice' },
          { id: 'wrong_amount', text: 'I was charged the wrong amount' },
          { id: 'back_to_main', text: 'Go back to main options' },
        ],
      };
    case 'tracking':
      return order.trackingNumber
        ? {
            text: `Your order is currently in transit. You can track your package using the tracking number: ${order.trackingNumber}. Would you like to view the detailed tracking information?`,
            followUp: [
              { id: 'view_tracking', text: 'Yes, view detailed tracking' },
              { id: 'back_to_main', text: 'Go back to main options' },
            ],
          }
        : {
            text: 'Your tracking information is still being processed. This usually takes 24-48 hours after shipping. Please check back soon.',
            followUp: [
              { id: 'back_to_main', text: 'Go back to main options' },
            ],
          };
    case 'estimated_ship':
      return {
        text: 'Orders typically ship within 1-2 business days. Once shipped, you will receive an email with tracking information.',
        followUp: [
          { id: 'expedite_shipping', text: 'Can I expedite my shipping?' },
          { id: 'back_to_main', text: 'Go back to main options' },
        ],
      };
    case 'back_to_main':
      return {
        text: 'What else would you like to know about your order?',
        followUp: getInitialOptions(order),
      };
    // Additional cases would be added for all possible questionIds
    default:
      return {
        text: "I'd be happy to help with that. Let me connect you with a customer service representative who can assist you further with this specific request.",
        followUp: [
          { id: 'back_to_main', text: 'Go back to main options' },
        ],
      };
  }
};
