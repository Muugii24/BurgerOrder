import React from "react";
import { connect } from "react-redux";

import Button from "../General/Button/";

const OrderSummary = (props) => {
  return (
    <div>
      <h2>Таны захиалга</h2>
      <p>Таны сонгосон орцууд:</p>
      <ul>
        {Object.keys(props.ingredients).map((el) => (
          <li key={el}>
            {props.ingredientNames[el]} : {props.ingredients[el]}
          </li>
        ))}
      </ul>
      <p>
        <strong>Нийт үнэ: {props.price} ₮</strong>
      </p>
      <Button
        clicked={props.continueOrder}
        btnType="Success"
        text="Үргэлжлүүлэх"
      ></Button>

      <Button clicked={props.close} btnType="Danger" text="Татгалзах" />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    ingredients: state.burgerReducer.ingredients,
    price: state.burgerReducer.totalPrice,
    ingredientNames: state.burgerReducer.ingredientNames,
  };
};

export default connect(mapStateToProps)(OrderSummary);
