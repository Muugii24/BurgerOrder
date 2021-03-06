const initialState = {
  orders: [],
  loading: false,
  error: null,
  newOrder: {
    saving: false,
    finished: false,
    error: null,
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "CLEAR_ORDER":
      return {
        ...state,
        newOrder: {
          saving: false,
          finished: false,
          error: null,
        },
      };

    case "LOAD_ORDERS_START":
      return {
        ...state,
        loading: true,
      };

    case "LOAD_ORDERS_SUCCESS":
      return {
        ...state,
        loading: false,
        orders: action.orders,
        newOrder: {
          ...state.newOrder,
        },
      };

    case "LOAD_ORDERS_ERROR":
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    case "SAVE_ORDER_START":
      return {
        ...state,
        newOrder: {
          ...state.newOrder,
          saving: true,
        },
      };

    case "SAVE_ORDER_SUCCESS":
      return {
        ...state,
        newOrder: {
          ...state.newOrder,
          saving: false,
          finished: true,
        },
      };

    case "SAVE_ORDER_ERROR":
      return {
        ...state,
        newOrder: {
          ...state.newOrder,
          saving: false,
        },
        error: action.error,
      };

    default:
      return state;
  }
};

export default reducer;
