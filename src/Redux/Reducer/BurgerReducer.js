const INGREDIENT_PRICES = {
  salad: 1000,
  becon: 1500,
  cheese: 1500,
  meat: 2500,
};

const initialState = {
  ingredients: {
    salad: 0,
    becon: 0,
    cheese: 0,
    meat: 0,
  },
  totalPrice: 0,
  purchasing: false,
  ingredientNames: {
    salad: "Салад",
    becon: "Бэкон",
    cheese: "Бяслага",
    meat: "Үхрийн мах",
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_INGREDIENT":
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ortsNer]: state.ingredients[action.ortsNer] + 1,
        },
        totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ortsNer],
        purchasing: (state.purchasing = true),
      };
    case "REMOVE_INGREDIENT":
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ortsNer]: state.ingredients[action.ortsNer] - 1,
        },
        totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ortsNer],
        purchasing: state.totalPrice > 0,
      };
    case "CLEAR_ORDER":
      return initialState;

    default:
      return state;
  }
};

export default reducer;
