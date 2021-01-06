import React, { Fragment } from "react";
import { connect } from "react-redux";
import MenuItem from "../MenuItem";
import css from "./style.module.css";

const Menu = (props) => (
  <div>
    <ul className={css.Menu}>
      {!props.userId ? (
        <Fragment>
          <MenuItem close={props.close} link="/signUp">
            БҮРТГҮҮЛЭХ
          </MenuItem>
          <MenuItem close={props.close} link="/login">
            НЭВТРЭХ
          </MenuItem>
        </Fragment>
      ) : (
        <Fragment>
          <MenuItem close={props.close} link="/burger-page">
            БҮРГЕР ЗАХИАЛАХ
          </MenuItem>
          <MenuItem close={props.close} link="/burger-orders">
            ЗАХИАЛГУУД
          </MenuItem>
          <MenuItem close={props.close} link="/logout">
            ГАРАХ
          </MenuItem>
        </Fragment>
      )}
    </ul>
  </div>
);

const mapStateToProps = (state) => {
  return {
    userId: state.signupLoginReducer.userId,
  };
};

export default connect(mapStateToProps, null)(Menu);
