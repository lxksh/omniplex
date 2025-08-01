'use client';
import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import Button from '../../ui/Button/Button';
import './CheckoutButton.css';

interface CheckoutButtonProps {
  amount: number;
  productName: string;
  description?: string;
  className?: string;
  disabled?: boolean;
}

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

const CheckoutButton: React.FC<CheckoutButtonProps> = ({
  amount,
  productName,
  description,
  className = '',
  disabled = false
}) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleCheckout = async () => {
    if (disabled) return;

    try {
      setLoading(true);
      setError(null);

      const stripe = await stripePromise;
      if (!stripe) {
        throw new Error('Stripe failed to load');
      }

      const response = await fetch('/api/stripe/checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount,
          productName,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Something went wrong');
      }

      const { sessionId } = await response.json();

      const { error: stripeError } = await stripe.redirectToCheckout({
        sessionId,
      });

      if (stripeError) {
        throw new Error(stripeError.message);
      }
    } catch (err) {
      console.error('Checkout error:', err);
      setError(err instanceof Error ? err.message : 'An unexpected error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`checkout-button ${className}`}>
      <div className="checkout-button__content">
        <div className="checkout-button__product">
          <h3 className="checkout-button__title">{productName}</h3>
          {description && (
            <p className="checkout-button__description">{description}</p>
          )}
          <div className="checkout-button__price">
            <span className="checkout-button__currency">$</span>
            <span className="checkout-button__amount">{amount}</span>
          </div>
        </div>
        
        <Button
          onClick={handleCheckout}
          loading={loading}
          disabled={disabled || loading}
          size="lg"
          variant="primary"
          className="checkout-button__btn"
        >
          {loading ? 'Processing...' : `Buy Now - $${amount}`}
        </Button>

        {error && (
          <div className="checkout-button__error">
            <span className="checkout-button__error-icon">⚠️</span>
            {error}
          </div>
        )}
      </div>

      <div className="checkout-button__secure">
        <span className="checkout-button__secure-icon">🔒</span>
        Secure payment powered by Stripe
      </div>
    </div>
  );
};

export default CheckoutButton;