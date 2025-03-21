
import { ResponseData } from '../types';

export function handleRequestReplacement(): ResponseData {
  return {
    text: 'We\'ll process a replacement for your defective item. Please keep the original packaging as our courier will collect it when delivering your replacement. You should receive the replacement within 5-7 business days.',
    followUp: [
      { id: 'replacement-status', text: 'Check replacement status' },
      { id: 'back-to-main', text: 'Back to main options' },
    ],
  };
}

export function handleWithinWarranty(): ResponseData {
  return {
    text: 'Since your product is still under warranty, you\'re eligible for a free repair or replacement. Would you like us to arrange for a replacement or would you prefer to have it repaired?',
    followUp: [
      { id: 'request-replacement', text: 'I want a replacement' },
      { id: 'request-repair', text: 'I want it repaired' },
      { id: 'back-to-main', text: 'Back to main options' },
    ],
  };
}

export function handleOutsideWarranty(): ResponseData {
  return {
    text: 'Even though your product is outside the warranty period, we may be able to offer a discounted repair service or a special discount on a new purchase. Would you be interested in either option?',
    followUp: [
      { id: 'discounted-repair', text: 'I\'m interested in the discounted repair' },
      { id: 'new-purchase-discount', text: 'I\'m interested in a discount on a new product' },
      { id: 'back-to-main', text: 'Back to main options' },
    ],
  };
}
