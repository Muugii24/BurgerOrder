import React, { useState } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

import Button from "../../components/General/Button";
import css from "./Login.module.css";
import * as actions from "../../Redux/Actioin/loginActions";
import Spinner from "../../components/General/Spinner";

const LoginPage = (props) => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const login = () => {
    props.loginUser(form);
  };

  const changeEmail = (e) => {
    const newEmail = e.target.value;
    setForm((formBefore) => ({
      email: newEmail,
      password: formBefore.password,
    }));
  };

  const changePassword = (e) => {
    const newPassword = e.target.value;
    setForm((formBefore) => ({
      email: formBefore.email,
      password: newPassword,
    }));
  };

  return (
    <div className={css.Logins}>
      {props.userId && <Redirect to="/burger-page" />}
      {props.loading ? (
        <Spinner />
      ) : (
        <div>
          <input onChange={changeEmail} type="text" placeholder="Имэйл хаяг" />
          <input
            onChange={changePassword}
            type="password"
            placeholder="Нууц үг"
          />
          {props.error && <div style={{ color: "red" }}>{props.error}</div>}
          <Button text="Login" btnType="Success" clicked={login} />
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    loading: state.signupLoginReducer.loading,
    error: state.signupLoginReducer.error,
    userId: state.signupLoginReducer.userId,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: (form) => dispatch(actions.loginUser(form)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
