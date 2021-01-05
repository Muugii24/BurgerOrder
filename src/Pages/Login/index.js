import React, { Component } from "react";
import { connect } from "react-redux";

import Button from "../../components/General/Button";
import css from "./Login.module.css";
import * as actions from "../../Redux/Actioin/loginActions";
import Spinner from "../../components/General/Spinner";
import { Redirect } from "react-router-dom";

class LoginPage extends Component {
  state = {
    email: "",
    password: "",
  };

  login = () => {
    this.props.loginUser(this.state.email, this.state.password);
  };

  changeEmail = (e) => {
    this.setState({ email: e.target.value });
  };

  changePassword = (e) => {
    this.setState({ password: e.target.value });
  };

  render() {
    return (
      <div className={css.Login}>
        {this.props.userId && <Redirect to="/burger-page" />}
        {this.props.loading ? (
          <Spinner />
        ) : (
          <div>
            <input
              onChange={this.changeEmail}
              type="text"
              placeholder="Имэйл хаяг"
            />
            <input
              onChange={this.changePassword}
              type="password"
              placeholder="Нууц үг"
            />
            {this.props.error && (
              <div style={{ color: "red" }}>{this.props.error}</div>
            )}
            <Button text="Login" btnType="Success" clicked={this.login} />
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.signupLoginReducer.loading,
    error: state.signupLoginReducer.error,
    userId: state.signupLoginReducer.userId,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: (email, password) =>
      dispatch(actions.loginUser(email, password)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
