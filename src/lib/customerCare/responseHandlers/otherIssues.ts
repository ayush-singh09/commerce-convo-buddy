
import { ResponseData } from '../types';

export function handleOtherIssue(): ResponseData {
  return {
    text: 'We\'re sorry to hear you\'re having an issue. Please tell us more about your concern so we can assist you better.',
    followUp: [
      { id: 'missing-item', text: 'An item is missing from my order' },
      { id: 'damaged-item', text: 'I received a damaged item' },
      { id: 'wrong-item', text: 'I received the wrong item' },
      { id: 'back-to-main', text: 'Back to main options' },
    ],
  };
}

export function handleItemIssues(): ResponseData {
  return {
    text: 'We sincerely apologize for this error. Please take a photo of what you received (or didn\'t receive) and upload it to your order details page. We\'ll expedite a resolution for you.',
    followUp: [
      { id: 'replacement-timeframe', text: 'How long will it take to get a replacement?' },
      { id: 'refund-option', text: 'Can I get a refund instead?' },
      { id: 'back-to-main', text: 'Back to main options' },
    ],
  };
}

export function handleCustomerService(): ResponseData {
  return {
    text: 'For more detailed assistance, please contact our customer service team directly at support@lumina.com or call 1-800-LUMINA during business hours (9 AM - 6 PM EST, Monday to Friday).',
    followUp: [
      { id: 'back-to-main', text: 'Back to main options' },
    ],
  };
}
