import React from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";


// TODO:app publishebol key

const stripePromise = loadStripe('');
const Payment = () => {
  return (
    <div>
      <SectionTitle
        heading="Payment"
        subHeading="Please pay to Eat"
      ></SectionTitle>
      <div>
       <Elements stripe={stripePromise}>
        

       </Elements>
      </div>
    </div>
  );
};

export default Payment;
