import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

import css from "./SignUp.module.css";
import Button from "../../components/General/Button";
import Spinner from "../../components/General/Spinner";
import * as actions from "../../Redux/Actioin/signupActions";

class SignUpPage extends Component {
  state = {
    email: "",
    password1: "",
    password2: "",
    error: "",
  };

  signUp = () => {
    this.setState({ error: "" });
    if (this.state.password1 === this.state.password2) {
      this.props.signupUser(this.state.email, this.state.password1);
    } else {
      this.setState({ error: "Ta нууц үгээ зөв давтан оруулна уу !!!" });
    }
  };

  changeEmail = (e) => {
    this.setState({ email: e.target.value });
  };

  changePass1 = (e) => {
    this.setState({ password1: e.target.value });
  };

  insertPass2 = (e) => {
    this.setState({ password2: e.target.value });
  };

  render() {
    return (
      <div className={css.SignUp}>
        {this.props.userId && <Redirect to="/login" />}
        {this.props.loading ? (
          <Spinner />
        ) : (
          <div>
            <h1>Бүртгэл</h1>
            <div>Та өөрийн мэдээллээ оруулна уу</div>
            <input
              type="text"
              placeholder="Имэйл хаяг"
              onChange={this.changeEmail}
            />
            <input
              type="password"
              placeholder="Нууц үг"
              onChange={this.changePass1}
            />
            <input
              type="password"
              placeholder="Нууц үгээ давтан оруул"
              onChange={this.insertPass2}
            />
            {this.state.error && (
              <div style={{ color: "red" }}>{this.state.error}</div>
            )}

            {this.props.error && (
              <div style={{ color: "red" }}>{this.props.error}</div>
            )}

            <Button text="Бүртгүүлэх" btnType="Success" clicked={this.signUp} />
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
    signupUser: (email, password) =>
      dispatch(actions.signupUser(email, password)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpPage);
