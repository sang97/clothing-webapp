import React from "react";

import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import "../../styles/styles.scss";
import CustomButton from "../button/custom-button";
import CartItem from "./cart-item";

import { createStructuredSelector } from "reselect";
import { selectCartItems } from "../../redux/cart/cart-selector";
import { toggleCartHidden } from "../../redux/cart/cart-actions";

const CartDropdown = props => {
  const { cartItems, dispatch, history } = props;
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map(item => <CartItem key={item.id} item={item} />)
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <CustomButton onClick={() => {
        dispatch(toggleCartHidden());
      
        history.push("/checkout")
      }}>
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default withRouter(
  connect(
    mapStateToProps
  )(CartDropdown)
);
