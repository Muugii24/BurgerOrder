import React, { Component } from "react";
import Button from "../../components/General/Button";
import css from "./Login.module.css";

class LoginPage extends Component {
  state = {
    email: "",
    password: "",
  };

  login = () => {
    alert("Newterlee");
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
        <input
          onChange={this.changeEmail}
          type="text"
          placeholder="Имэйл хаяг"
        />
        <input
          onChange={this.changePassword}
          type="text"
          placeholder="Нууц үг"
        />
        <Button text="Login" btnType="Success" clicked={this.login} />
      </div>
    );
  }
}

export default LoginPage;
