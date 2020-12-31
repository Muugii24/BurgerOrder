import React from "react";
import { Component } from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import Burger from "../../components/Burger";
import ContactData from "../../components/ContactData";
import Button from "../../components/General/Button";
import css from "./ShippingPage.module.css";

class ShippingPage extends Component {
  /*  state = {
    ingredients: {},
    price: null,
  }; */

  /*   componentDidMount() {
    const query = new URLSearchParams(this.props.location.search);
    const ingredients = {};
    let price = 0;
    for (let param of query.entries()) {
      if (param[0] !== "dun") ingredients[param[0]] = param[1];
      else price = param[1];
    }
    this.setState({ ingredients, price });
  } */

  cancelOrder = () => {
    this.props.history.goBack();
  };

  showContactData = () => {
    this.props.history.replace("/shipping-page/contact");
  };

  render() {
    return (
      <div className={css.ShippingPage}>
        <p style={{ fontSize: "25px", color: "green" }}>
          <strong>Үнийн дүн: {this.props.price}</strong>
        </p>
        <Burger />
        <Button
          clicked={this.cancelOrder}
          btnType="Danger"
          text="ЗАХИАЛГЫГ ЦУЦЛАХ"
        />
        <Button
          clicked={this.showContactData}
          btnType="Success"
          text="ХҮРГЭЛТИЙН МЭДЭЭЛЭЛ ОРУУЛАХ"
        />
        <Route path="/shipping-page/contact">
          <ContactData />
        </Route>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ingredients: state.ingredients,
    price: state.totalPrice,
  };
};

export default connect(mapStateToProps)(ShippingPage);
