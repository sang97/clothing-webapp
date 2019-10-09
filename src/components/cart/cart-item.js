import React from "react";

import "../../styles/styles.scss";

const CartItem = props => {
  const { imageUrl, price, name, quantity } = props.item;
  return (
    <div className="cart-item">
      <img src={imageUrl} alt="item"/>
      <div className="item-details">
        <span className="name">{name}</span>
        <span className="price">
          {quantity} x ${price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
