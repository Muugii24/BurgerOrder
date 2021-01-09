import React from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import Burger from "../../components/Burger";
import ContactData from "../../components/ContactData";
import Button from "../../components/General/Button";
import css from "./ShippingPage.module.css";

const ShippingPage = (props) => {
  const cancelOrder = () => {
    props.history.goBack();
  };

  const showContactData = () => {
    props.history.replace("/shipping-page/contact");
  };

  return (
    <div className={css.ShippingPage}>
      <p style={{ fontSize: "25px", color: "green" }}>
        <strong>Үнийн дүн: {props.price}</strong>
      </p>
      <Burger />
      <Button clicked={cancelOrder} btnType="Danger" text="ЗАХИАЛГЫГ ЦУЦЛАХ" />
      <Button
        clicked={showContactData}
        btnType="Success"
        text="ХҮРГЭЛТИЙН МЭДЭЭЛЭЛ ОРУУЛАХ"
      />
      <Route path="/shipping-page/contact">
        <ContactData />
      </Route>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    ingredients: state.ingredients,
    price: state.totalPrice,
  };
};

export default connect(mapStateToProps)(ShippingPage);
