import React, { Component } from "react";

import css from "./style.module.css";
import Burger from "../../components/Burger";
import BuildControls from "../../components/BuildControls";
import Modal from "../../components/General/Modal";
import OrderSummary from "../../components/OrderSummary";
import Spinner from "../../components/General/Spinner";

class BurgerPage extends Component {
  state = {
    confirmOrder: false,
    loader: false,
  };

  showConfirmModal = () => {
    this.setState({ confirmOrder: true });
  };

  closeConfirmModal = () => {
    this.setState({ confirmOrder: false });
  };

  continueOrder = () => {
    this.props.history.push({
      pathname: "/shipping-page",
    });
    this.closeConfirmModal();
  };

  render() {
    return (
      <div className={css.BurgerBuilder}>
        <Modal close={this.closeConfirmModal} show={this.state.confirmOrder}>
          {this.state.loader ? (
            <Spinner />
          ) : (
            <OrderSummary
              continueOrder={this.continueOrder}
              close={this.closeConfirmModal}
            />
          )}
        </Modal>

        <Burger />
        <BuildControls
          showConfirmModal={this.showConfirmModal}
          closeConfirmModal={this.closeConfirmModal}
        />
      </div>
    );
  }
}

export default BurgerPage;
