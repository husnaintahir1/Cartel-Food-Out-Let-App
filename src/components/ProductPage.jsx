import Product from "./Product";
import "./css/ProductPage.css";

import Scrollbar from "./Scrollbar";

import Footer from "./Footer";
import { scrollEffect } from "./../utils/scroll";

import MyModal from "./Modal";

import React, { Component } from "react";
import { ProductConsumer } from "../context/context";
class ProductPage extends Component {
  componentDidMount() {
    scrollEffect();
  }
  render() {
    return (
      <div className=" px-0 contentContainer">
        <Scrollbar />

        <section id="pizza">
          <div className="container-fluid px-0 px-md-3 px-lg-5 cardRow  pb-4">
            <div className="sectionHeading mb-4">
              <h1 className="py-3 text-center border-bottom ">Pizaa</h1>
            </div>

            <div className="row  mx-0">
              <ProductConsumer>
                {(value) => {
                  return value.products.map((product) => (
                    <Product product={product} key={product.id} />
                  ));
                }}
              </ProductConsumer>
            </div>
          </div>
        </section>

        <section id="burgers">
          <div className="container-fluid px-0 px-md-3 px-lg-5 cardRow mt-3 pb-4">
            <div className="sectionHeading mb-4">
              <h1 className="py-3 text-center border-bottom ">Pizaa</h1>
            </div>

            <div className="row mb-4  mx-0"></div>
          </div>
        </section>

        <Footer />
      </div>
    );
  }
}

export default ProductPage;
