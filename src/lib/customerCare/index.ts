
import { Order } from '../../context/OrderContext';
import { ResponseData, QuestionOption } from './types';
import { getInitialOptions } from './initialOptions';

// Import response handlers
import { 
  handleDeliveryStatus, 
  handleEstimatedDelivery, 
  handleDeliveryAddressOrInstructions,
  handleBackToMain
} from './responseHandlers/orderStatus';

import {
  handleCancelOrder,
  handleConfirmCancel,
  handleKeepOrder
} from './responseHandlers/cancelOrder';

import {
  handleReturnItem,
  handleReturnPolicy,
  handleRefundTime,
  handleRefundStatus
} from './responseHandlers/returns';

import {
  handleProductComplaint,
  handleDefectiveProduct,
  handleNotAsDescribed,
  handlePoorQuality,
  handleStoppedWorking
} from './responseHandlers/complaints';

import {
  handleRequestReplacement,
  handleWithinWarranty,
  handleOutsideWarranty
} from './responseHandlers/warranty';

import {
  handleOtherIssue,
  handleItemIssues,
  handleCustomerService
} from './responseHandlers/otherIssues';

// Get response based on option ID
export const getResponse = (optionId: string, order: Order): ResponseData => {
  switch (optionId) {
    case 'delivery-status':
      return handleDeliveryStatus(order);

    case 'estimated-delivery':
      return handleEstimatedDelivery(order);

    case 'cancel-order':
      return handleCancelOrder(order);

    case 'confirm-cancel':
      return handleConfirmCancel();

    case 'keep-order':
      return handleKeepOrder(order);

    case 'return-item':
      return handleReturnItem();

    case 'return-policy':
      return handleReturnPolicy();

    case 'refund-time':
      return handleRefundTime();

    case 'refund-status':
      return handleRefundStatus();

    case 'other-issue':
      return handleOtherIssue();

    case 'product-complaint':
      return handleProductComplaint();

    case 'defective-product':
      return handleDefectiveProduct();

    case 'not-as-described':
      return handleNotAsDescribed();

    case 'poor-quality':
      return handlePoorQuality();

    case 'stopped-working':
      return handleStoppedWorking();

    case 'request-replacement':
      return handleRequestReplacement();

    case 'within-warranty':
      return handleWithinWarranty();

    case 'outside-warranty':
      return handleOutsideWarranty();

    case 'missing-item':
    case 'damaged-item':
    case 'wrong-item':
      return handleItemIssues();

    case 'delivery-address':
    case 'delivery-instructions':
      return handleDeliveryAddressOrInstructions(order);

    case 'other-questions':
    case 'provide-feedback':
    case 'speak-to-specialist':
      return handleCustomerService();

    case 'back-to-main':
      return handleBackToMain(order);

    default:
      return {
        text: 'I\'m not sure I understand. Can you please select one of the options below?',
        followUp: getInitialOptions(order),
      };
  }
};

// Re-export types and helper functions
export * from './types';
export * from './helpers';
export * from './initialOptions';
