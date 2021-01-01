import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import css from "./style.module.css";
import Toolbar from "../../components/Toolbar";
import SideBar from "../../components/SideBar";
import OrderPage from "../OrderPage";
import ShippingPage from "../ShippingPage";
import BurgerPage from "../BurgerPage";
import LoginPage from "../Login";
import SignUpPage from "../SignUpPage";

export default class App extends Component {
  state = {
    showSideBar: false,
  };

  toggleSideBar = () => {
    this.setState((prevState) => {
      return { showSideBar: !prevState.showSideBar };
    });
  };

  render() {
    return (
      <div>
        <Toolbar
          showSideBar={this.state.showSideBar}
          toggleSideBar={this.toggleSideBar}
        />
        <SideBar
          showSideBar={this.state.showSideBar}
          toggleSideBar={this.toggleSideBar}
        />

        <main className={css.Content}>
          <Switch>
            <Route path="/burger-orders" component={OrderPage} />
            <Route path="/burger-page" component={BurgerPage} />
            <Route path="/shipping-page" component={ShippingPage} />
            <Route path="/signUp" component={SignUpPage} />
            <Route path="/login" component={LoginPage} />
          </Switch>
        </main>
      </div>
    );
  }
}
