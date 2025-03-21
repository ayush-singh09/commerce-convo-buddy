
import { ResponseData } from '../types';

export function handleProductComplaint(): ResponseData {
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
}

export function handleDefectiveProduct(): ResponseData {
  return {
    text: 'We apologize that you received a defective product. You can either return it for a full refund or request a replacement. What would you prefer?',
    followUp: [
      { id: 'request-replacement', text: 'I want a replacement' },
      { id: 'return-for-refund', text: 'I want to return it for a refund' },
      { id: 'speak-to-specialist', text: 'I want to speak to a product specialist' },
      { id: 'back-to-main', text: 'Back to main options' },
    ],
  };
}

export function handleNotAsDescribed(): ResponseData {
  return {
    text: 'We take product accuracy very seriously. Could you please explain how the product differs from its description? This will help us address the issue and improve our listings.',
    followUp: [
      { id: 'return-for-refund', text: 'I want to return it for a refund' },
      { id: 'speak-to-specialist', text: 'I want to speak to a product specialist' },
      { id: 'back-to-main', text: 'Back to main options' },
    ],
  };
}

export function handlePoorQuality(): ResponseData {
  return {
    text: 'We\'re sorry to hear the product didn\'t meet your quality expectations. Your feedback is valuable to us. Would you like to return the item or share specific feedback about the quality issues?',
    followUp: [
      { id: 'return-for-refund', text: 'I want to return it for a refund' },
      { id: 'provide-feedback', text: 'I want to provide detailed feedback' },
      { id: 'back-to-main', text: 'Back to main options' },
    ],
  };
}

export function handleStoppedWorking(): ResponseData {
  return {
    text: 'We apologize for the inconvenience. How long were you using the product before it stopped working? This will help us determine if it\'s covered under warranty.',
    followUp: [
      { id: 'within-warranty', text: 'Less than the warranty period' },
      { id: 'outside-warranty', text: 'Beyond the warranty period' },
      { id: 'speak-to-specialist', text: 'I want to speak to a technical specialist' },
      { id: 'back-to-main', text: 'Back to main options' },
    ],
  };
}
