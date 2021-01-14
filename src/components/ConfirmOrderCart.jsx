import React from "react";
import { ProductConsumer } from "../context/context";
import CheckoutProduct from "./CheckoutProduct";

import "./css/cart.css";

function ConfirmOrderCart({ hideCheckoutCart }) {
  return (
    <div
      id="cart"
      className={
        hideCheckoutCart ? "checkOutBox px-2 active " : "checkOutBox px-2 "
      }
    >
      <h4 className="text-center pt-2">Cart</h4>
      {/* <!----Cart--> */}

      <ProductConsumer>
        {(value) =>
          value.cart.map((item) => (
            <CheckoutProduct item={item} value={value} key={item.id} />
          ))
        }
      </ProductConsumer>

      {/* <!---Cart-->
    <!---checkOut--> */}

      <ProductConsumer>
        {(value) => (
          <div className="px-3 border-top pt-3">
            <div>
              <span className="">Delivery Area</span>{" "}
              <span className="float-right areaLink">
                Please Select Delivery Area
              </span>
            </div>

            <div className="mt-4">
              <span className="">Subtotal</span>{" "}
              <span className="float-right">
                Rs<span className="subTotal">{value.cartSubtotal}</span>
              </span>
            </div>

            <div>
              <span className="">
                Gst(<span>16</span>%)
              </span>{" "}
              <span className="float-right">
                Rs<span className="gst">{value.cartTax}</span>
              </span>
            </div>

            <div>
              <span className="">Delivery Charges</span>{" "}
              <span className="float-right">
                Rs
                <span className="deliveryChrages">{value.deliveryCharge}</span>
              </span>
            </div>

            <div className="mt-4">
              <span className="font-weight-bold">
                Total <sub>(incl. Gst)</sub>
              </span>{" "}
              <span className="float-right">
                Rs<span className="totalPrice">{value.cartTotal}</span>
              </span>
            </div>

            <div className="input-group mb-3 mt-3">
              <input
                type="text"
                className="form-control"
                placeholder="Add coupon here"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <div className="input-group-append">
                <button className="btn fntsz checkOutbtn" type="button">
                  Apply
                </button>
              </div>
            </div>

            <div className="mt-3 text-center btnDiv">
              <button className="btn btn-block mb-2 checkOutbtn">
                {" "}
                Confirm Order
              </button>
              <button
                className="btn btn-block mb-2 checkOutbtn"
                onClick={() => {
                  value.clearCart();
                }}
              >
                Clear The Cart
              </button>
              <a href="">Please Select Delivery Zone</a>
            </div>
          </div>
        )}
      </ProductConsumer>

      {/* <!---checkOut-->  */}
    </div>
  );
}

export default ConfirmOrderCart;
