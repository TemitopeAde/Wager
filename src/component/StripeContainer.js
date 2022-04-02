import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import PaymentForm from './PaymentForm';


const PUBLIC_KEY = "pk_test_51HjVLrEqayskyY1L4QXA32gkvtC78u96mkbhU2z4SdzS6tKL1l2u1COkM39If7QKByop6IWF33o9pEkYVYSy0CEX009C8F5YoE"
const stripeTestPromise = loadStripe(PUBLIC_KEY)

const StripeContainer = () => {
  return (
    <Elements stripe={stripeTestPromise}>
        <PaymentForm />
    </Elements>
  )
}

export default StripeContainer