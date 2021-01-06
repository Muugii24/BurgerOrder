import React, { useState, useEffect } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import css from "./style.module.css";
import Toolbar from "../../components/Toolbar";
import SideBar from "../../components/SideBar";
import OrderPage from "../OrderPage";
import ShippingPage from "../ShippingPage";
import BurgerPage from "../BurgerPage";
import LoginPage from "../Login";
import SignUpPage from "../SignUpPage";

import Logout from "../../components/Logout";
import * as actions from "../../Redux/Actioin/loginActions";

const App = (props) => {
  const [showSideBar, setShowSideBar] = useState(false);

  const toggleSideBar = () => {
    setShowSideBar((prevShowSideBar) => !prevShowSideBar);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    const userId = localStorage.getItem("userId");
    const expireDate = new Date(localStorage.getItem("expireDate"));
    // const refreshToken = localStorage.getItem("refreshToken");

    if (token) {
      if (expireDate > new Date()) {
        props.alreadyLogin(token, userId);
        props.autologout(expireDate.getTime() - new Date().getTime());
      } else {
        props.logout();
      }
    }
  }, []);

  return (
    <div>
      <Toolbar showSideBar={showSideBar} toggleSideBar={toggleSideBar} />
      <SideBar showSideBar={showSideBar} toggleSideBar={toggleSideBar} />

      <main className={css.Content}>
        {props.userId ? (
          <Switch>
            <Route path="/burger-orders" component={OrderPage} />
            <Route path="/burger-page" component={BurgerPage} />
            <Route path="/shipping-page" component={ShippingPage} />
            <Route path="/logout" component={Logout} />
          </Switch>
        ) : (
          <Switch>
            <Route path="/signup" component={SignUpPage} />
            <Route path="/login" component={LoginPage} />
            <Redirect to="/home" />
          </Switch>
        )}
      </main>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    userId: state.signupLoginReducer.userId,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    alreadyLogin: (token, userId) =>
      dispatch(actions.loginUserSuccess(token, userId)),
    logout: () => dispatch(actions.logout()),
    autologout: (ms) => {
      dispatch(actions.autologout(ms));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
