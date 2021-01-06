import React, { useState } from "react";

import css from "./style.module.css";
import Burger from "../../components/Burger";
import BuildControls from "../../components/BuildControls";
import Modal from "../../components/General/Modal";
import OrderSummary from "../../components/OrderSummary";

const BurgerPage = (props) => {
  const [confirmOrder, setConfirmOrder] = useState(false);
  const showConfirmModal = () => {
    setConfirmOrder(true);
  };

  const closeConfirmModal = () => {
    setConfirmOrder(false);
  };

  const continueOrder = () => {
    props.history.push({
      pathname: "/shipping-page",
    });
    closeConfirmModal();
  };

  return (
    <div className={css.BurgerBuilder}>
      <Modal close={closeConfirmModal} show={confirmOrder}>
        <OrderSummary continueOrder={continueOrder} close={closeConfirmModal} />
      </Modal>

      <Burger />
      <BuildControls
        showConfirmModal={showConfirmModal}
        closeConfirmModal={closeConfirmModal}
      />
    </div>
  );
};

export default BurgerPage;
