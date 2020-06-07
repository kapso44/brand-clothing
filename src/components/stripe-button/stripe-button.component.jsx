import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({ price }) => {
    const priceToPay = price * 100;
    const publishableKey = 'pk_test_peax9YO1lsGcHYmzwfKCScNx0083rBmzOc'

    const onToken = token => {
        console.log(token)
        alert('Payment Successful')
    }
    return (
        <StripeCheckout
            label = 'Pay Now'
            name= 'Brand Clothing'
            billingAddress
            shippingAddress
            image='https://sendeyo.com/up/d/f3eb2117da'
            stripeKey={publishableKey}
            amount={priceToPay}
            description= {` Your Total Amount is $${price}`}
            currency='INR'
            panelLabel= 'Pay Now'
            token={onToken}
            allowRememberMe
        />
    );
}

export default StripeCheckoutButton