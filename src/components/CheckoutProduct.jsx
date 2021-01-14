import React from "react";

import "./css/checkoutProduct.css";

function CheckoutProduct({ item, value }) {
  const { title, price, id, total, count } = item;
  const { decrement, increment, removeItem } = value;
  return (
    <div className="checkoutProduct">
      <button
        onClick={() => {
          removeItem(id);
        }}
      >
        <i className="fa fa-times" aria-hidden="true"></i>
      </button>
      <div className="checkoutProduct__title">
        <h5>{title}</h5>
      </div>
      <div className="checkoutProduct__detail">
        <div className="price">Rs.{total}</div>
        <div className="quantity">
          <button onClick={() => decrement(id)}>
            <i className="fa fa-minus " aria-hidden="true"></i>
          </button>
          <span>{count}</span>
          <button onClick={() => increment(id)}>
            <i className="fa  fa-plus" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default CheckoutProduct;
