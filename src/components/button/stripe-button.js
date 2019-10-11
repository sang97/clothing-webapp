import React from "react";
import StripeCheckout from "react-stripe-checkout";

import { connect } from "react-redux";

import { clearAllItems } from "../../redux/cart/cart-actions";

const StripeCheckoutButton = ({ price, clearAllItems }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_WBqax2FWVzS9QlpJScO07iuL";

  const onToken = token => {
    console.log(token);
    clearAllItems();
    alert("Payment Succesful!");
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
