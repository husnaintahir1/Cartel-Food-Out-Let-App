import "./App.css";
import Cart from "./components/Cart";
import LogoHeader from "./components/LogoHeader";
import "bootstrap/dist/css/bootstrap.css";

import "font-awesome/css/font-awesome.css";
import ProductPage from "./components/ProductPage";
import OpenCart from "./components/OpenCart";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ConfirmOrderCart from "./components/ConfirmOrderCart";
import CheckOutForm from "./components/CheckOutForm";

import React, { Component } from "react";

class App extends Component {
  state = { hideCart: false, hideCheckoutCart: false };

  handleOpenCart = () => {
    this.state.hideCart
      ? this.setState({ hideCart: false })
      : this.setState({ hideCart: true });
  };

  handleOpenCheckoutCart = () => {
    this.state.hideCheckoutCart
      ? this.setState({ hideCheckoutCart: false })
      : this.setState({ hideCheckoutCart: true });
  };

  render() {
    return (
      <Router>
        <Switch>
          <Route path="/checkout">
            <LogoHeader />
            <ConfirmOrderCart hideCheckoutCart={this.state.hideCheckoutCart} />
            <CheckOutForm />
            <OpenCart openCart={() => this.handleOpenCheckoutCart()} />
          </Route>

          <Route path="/">
            <LogoHeader />

            <Cart hideCart={this.state.hideCart} />
            <ProductPage />

            <OpenCart openCart={() => this.handleOpenCart()} />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
