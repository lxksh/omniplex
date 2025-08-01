export interface CheckoutSessionRequest {
  priceId?: string;
  amount?: number;
  productName?: string;
}

export interface CheckoutSessionResponse {
  sessionId: string;
}

export interface PaymentStatusProps {
  status: 'success' | 'cancel' | 'loading';
  sessionId?: string;
}

export interface CheckoutButtonProps {
  amount: number;
  productName: string;
  description?: string;
  className?: string;
  disabled?: boolean;
}