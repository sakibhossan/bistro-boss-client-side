import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React from 'react';

const CheckOutFrom = () => {
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async(event) =>{
        event.preventDefault();
        if(!stripe || !elements){
            return;
        }
        const card = elements.getElement(CardElement);
        if(card === nul){
            return;
        }


    }
    return (
        <form onSubmit={handleSubmit}>
            <CardElement
            options={{
                iconStyle: 'solid',
                style: {
                  base: {
                    iconColor: '#c4f0ff',
                    color: '#fff',
                    fontSize: '16px',
                  },
                  invalid: {
                    iconColor: '#FFC7EE',
                    color: '#FFC7EE',
                  },
                },
              }}
            >

            </CardElement>


        </form>
    );
};

export default CheckOutFrom;