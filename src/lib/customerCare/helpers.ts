
// Helper functions for status messages and delivery estimates

export function getStatusMessage(status: string): string {
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

export function getDeliveryEstimate(status: string): string {
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
