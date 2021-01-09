import React from "react";
import { connect } from "react-redux";
import * as actions from "../../Redux/Actioin/burgerActions";

import BuildControl from "../BuildControl";
import css from "./BuildControls.module.css";

const BuildControls = (props) => {
  const disableIngredient = { ...props.ingredients };

  for (let key in disableIngredient) {
    disableIngredient[key] = disableIngredient[key] <= 0;
  }

  return (
    <div className={css.BuildControls}>
      <p>
        Бүргерийн үнэ: <strong>{props.price}</strong> ₮
      </p>

      {Object.keys(props.ingredientNames).map((el) => (
        <BuildControl
          key={el}
          ortsHasah={props.burgertOrtsHas}
          ortsNemeh={props.burgertOrtsNem}
          disableIngredient={disableIngredient}
          type={el}
          orts={props.ingredientNames[el]}
        />
      ))}
      <div>{console.log(props.purchasing)}</div>

      <button
        onClick={props.showConfirmModal}
        disabled={!props.purchasing}
        className={css.OrderButton}
      >
        Захиалах
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    ingredients: state.burgerReducer.ingredients,
    price: state.burgerReducer.totalPrice,
    purchasing: state.burgerReducer.purchasing,
    ingredientNames: state.burgerReducer.ingredientNames,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    burgertOrtsNem: (ortsNer) => dispatch(actions.addIngredient(ortsNer)),
    burgertOrtsHas: (ortsNer) => dispatch(actions.removeIngredient(ortsNer)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BuildControls);
