import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import * as actions from "../../Redux/Actioin/orderActions";
import Button from "../General/Button";
import Spinner from "../General/Spinner";
import css from "./ContactData.module.css";

class ContactData extends React.Component {
  state = {
    name: null,
    city: null,
    street: null,
  };

  componentDidUpdate() {
    if (this.props.newOrderStatus.finished === true) {
      this.props.history.replace("/burger-orders");
    }
  }

  changeName = (e) => {
    this.setState({ name: e.target.value });
  };

  changeCity = (e) => {
    this.setState({ city: e.target.value });
  };

  changeStreet = (e) => {
    this.setState({ street: e.target.value });
  };

  sendData = () => {
    const newOrder = {
      orts: this.props.ingredients,
      dun: this.props.price,
      hayag: {
        Name: this.state.name,
        City: this.state.city,
        Street: this.state.street,
      },
    };
    this.props.saveOrder(newOrder);
  };

  render() {
    return (
      <div className={css.ContactData}>
        {this.props.newOrderStatus.saving ? (
          <Spinner />
        ) : (
          <div>
            <input
              onChange={this.changeName}
              type="text"
              name="name"
              placeholder="Таны нэр"
            />
            <input
              onChange={this.changeCity}
              type="text"
              name="city"
              placeholder="Таны хот"
            />
            <input
              onChange={this.changeStreet}
              type="text"
              name="street"
              placeholder="Таны гэрийн хаяг"
            />
            <Button clicked={this.sendData} btnType="Success" text="ИЛГЭЭХ" />
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ingredients: state.burgerReducer.ingredients,
    price: state.burgerReducer.totalPrice,
    newOrderStatus: state.orderReducer.newOrder,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    saveOrder: (newOrder) => dispatch(actions.saveOrder(newOrder)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ContactData));
