import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import * as actions from "../../Redux/Actioin/orderActions";
import Button from "../General/Button";
import Spinner from "../General/Spinner";
import css from "./ContactData.module.css";

const ContactData = (props) => {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [street, setStreet] = useState("");

  useEffect(() => {
    props.newOrderStatus.finished && props.history.replace("/burger-orders");
    return () => {
      props.clearOrder();
    };
  }, [props.newOrderStatus.finished]);

  const changeName = (e) => {
    setName(e.target.value);
  };

  const changeCity = (e) => {
    setCity(e.target.value);
  };

  const changeStreet = (e) => {
    setStreet(e.target.value);
  };

  const sendData = () => {
    const newOrder = {
      userId: props.userId,
      orts: props.ingredients,
      dun: props.price,
      hayag: {
        Name: name,
        City: city,
        Street: street,
      },
    };
    props.saveOrder(newOrder);
  };

  return (
    <div className={css.ContactData}>
      {props.newOrderStatus.saving ? (
        <Spinner />
      ) : (
        <div>
          <input
            onChange={changeName}
            type="text"
            name="name"
            placeholder="Таны нэр"
          />
          <input
            onChange={changeCity}
            type="text"
            name="city"
            placeholder="Таны хот"
          />
          <input
            onChange={changeStreet}
            type="text"
            name="street"
            placeholder="Таны гэрийн хаяг"
          />
          <Button clicked={sendData} btnType="Success" text="ИЛГЭЭХ" />
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    ingredients: state.burgerReducer.ingredients,
    price: state.burgerReducer.totalPrice,
    newOrderStatus: state.orderReducer.newOrder,
    userId: state.signupLoginReducer.userId,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    saveOrder: (newOrder) => dispatch(actions.saveOrder(newOrder)),
    clearOrder: () => dispatch(actions.clearOrder()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ContactData));
