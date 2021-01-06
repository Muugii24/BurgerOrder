import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";

import css from "./SignUp.module.css";
import Button from "../../components/General/Button";
import Spinner from "../../components/General/Spinner";
import * as actions from "../../Redux/Actioin/signupActions";

const SignUpPage = (props) => {
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [error, setError] = useState("");

  const signUp = () => {
    setError("");

    if (password1 === password2) {
      props.signupUser(email, password1);
    } else {
      setError("Ta нууц үгээ зөв давтан оруулна уу !!!");
    }
  };

  const changeEmail = (e) => {
    setEmail(e.target.value);
  };

  const changePass1 = (e) => {
    setPassword1(e.target.value);
  };

  const insertPass2 = (e) => {
    setPassword2(e.target.value);
  };

  return (
    <div className={css.SignUp}>
      {props.userId && <Redirect to="/login" />}
      {props.loading ? (
        <Spinner />
      ) : (
        <div>
          <h1>Бүртгэл</h1>
          <div>Та өөрийн мэдээллээ оруулна уу</div>
          <input type="text" placeholder="Имэйл хаяг" onChange={changeEmail} />
          <input type="password" placeholder="Нууц үг" onChange={changePass1} />
          <input
            type="password"
            placeholder="Нууц үгээ давтан оруул"
            onChange={insertPass2}
          />
          {error && <div style={{ color: "red" }}>{error}</div>}

          {props.error && <div style={{ color: "red" }}>{error}</div>}

          <Button text="Бүртгүүлэх" btnType="Success" clicked={signUp} />
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
    signupUser: (email, password) =>
      dispatch(actions.signupUser(email, password)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpPage);
