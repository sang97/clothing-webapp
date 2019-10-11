import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

import { connect } from "react-redux";

import { clearAllItems } from "../../redux/cart/cart-actions";

const StripeCheckoutButton = ({ price, clearAllItems }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_vgmddoIrob0Fdy8rBLDDCvlC00dukjGm9B";

  const onToken = async token => {
    try {
      await axios({
        url: "payment",
        method: "post",
        data: {
          amount: priceForStripe,
          token: token
        }
      });

      clearAllItems();
      alert("succesful payment");
    } catch (error) {
      console.log("Payment Error: ", error);
      alert(
        "There was an issue with your payment! Please make sure you use the provided credit card."
      );
    }
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="http://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

const mapDispatchToProps = dispatch => ({
  clearAllItems: () => dispatch(clearAllItems())
});

export default connect(
  null,
  mapDispatchToProps
)(StripeCheckoutButton);
