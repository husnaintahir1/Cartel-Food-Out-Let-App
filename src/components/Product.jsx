import { ProductConsumer } from "../context/context";

import React, { Component } from "react";
class Product extends Component {
  render() {
    const {
      img,
      title,
      details,
      price,
      cutOffPrice,
      id,
      inCart,
    } = this.props.product;
    return (
      <ProductConsumer>
        {(value) => (
          <div className="col-sm-6 col-md-6 col-lg-4 col-xl-3">
            <div className="card ">
              <img className="cardImg" src={img} alt="" />
              <div className="cardContent px-2 pb-3">
                <h5 className="mt-2">{title}</h5>
                <p className="cardDetail">{details}</p>
                <div className="priceDiv price">
                  <span className="float-right font-weight-bold ">
                    Rs<span className="totalPrice mr-2">{price}</span>
                    <button
                      className={
                        inCart
                          ? " disabled btn p-0 addButton"
                          : "addButton btn p-0 "
                      }
                      disabled={inCart ? true : false}
                      onClick={() => value.addToCart(id)}
                    >
                      <i
                        className="fa fa-check-square-o clr"
                        aria-hidden="true"
                      ></i>
                    </button>
                  </span>
                  <span className=" strk float-right mr-3">
                    Rs
                    <span id="cutOff" className="">
                      {cutOffPrice}
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}
      </ProductConsumer>
    );
  }
}

export default Product;
