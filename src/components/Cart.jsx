import React, { useContext, useState } from "react";
import "./css/cart.css";
import { Link } from "react-router-dom";
import CheckoutProduct from "./CheckoutProduct";
import { ProductConsumer } from "../context/context";
import MyModal from "./Modal";

function Cart({ hideCart }) {
  // modal Handlers
  const [openModal, setOpenModal] = useState(true);
  const handleOpen = () => {
    if (openModal === false) {
      setOpenModal(true);
    }
  };

  const handleClose = () => {
    if (openModal === true) {
      setOpenModal(false);
    }
  };

  // modal Handlers
  return (
    <div
      id="cart"
      className={hideCart ? "checkOutBox px-2 active " : "checkOutBox px-2 "}
    >
      <h4 className="text-center pt-2">Cart</h4>

      <ProductConsumer>
        {(value) => (
          <MyModal
            data={value}
            value={openModal}
            handleClose={handleClose}
            setDeliveryZone={value.setDeliveryZone}
          />
        )}
      </ProductConsumer>
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
              <span className="">Delivery Area</span>
              <span
                className="float-right areaLink"
                onClick={() => handleOpen()}
              >
                {value.deliveryZone ? value.deliveryZone : "Please Select Area"}
              </span>
            </div>

            <div className="mt-4">
              <span className="">Subtotal</span>
              <span className="float-right">
                Rs<span className="subTotal">{value.cartSubtotal}</span>
              </span>
            </div>

            <div>
              <span className="">
                Gst(<span>16</span>%)
              </span>
              <span className="float-right">
                Rs
                <span className="gst">{value.cartTax}</span>
              </span>
            </div>

            <div>
              <span className="">Delivery Charges</span>
              <span className="float-right">
                Rs
                <span className="deliveryChrages">{value.deliveryCharge}</span>
              </span>
            </div>

            <div className="mt-4">
              <span className="font-weight-bold">
                Total <sub>(incl. Gst)</sub>
              </span>
              <span className="float-right">
                Rs<span className="totalPrice">{value.cartTotal}</span>
              </span>
            </div>

            <div className="mt-3 text-center btnDiv">
              <Link to="/checkout">
                <button className="btn btn-block mb-2 checkOutbtn">
                  Proceed to checkout
                </button>
              </Link>

              <button
                className="btn btn-block mb-2 checkOutbtn"
                onClick={() => {
                  value.clearCart();
                }}
              >
                Clear The Cart
              </button>
              <span>please select</span>
            </div>
          </div>
        )}
      </ProductConsumer>
      {/* <!---checkOut--> */}
    </div>
  );
}

export default Cart;
