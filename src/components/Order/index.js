import React from "react";
import css from "./Order.module.css";

const Order = (props) => {
  return (
    <div className={css.Order}>
      <p>
        Орц: Салад-{props.order.orts.salad}, Гахайн мах-{props.order.orts.becon}
        , Бяслага-{props.order.orts.cheese}, Үхрийн мах-{props.order.orts.meat}
      </p>
      <p>Захиалагч: {props.order.hayag.Name}</p>
      <p>
        Хаяг: {props.order.hayag.City}, {props.order.hayag.Street}
      </p>
      <p>Үнийн дүн: {props.order.dun} </p>
    </div>
  );
};

export default Order;
