import axios from "../../axios-orders";

export const loadOrders = (userId) => {
  return function (dispatch, getState) {
    dispatch(loadOrdersStart());

    const token = getState().signupLoginReducer.token;

    axios
      .get(
        `/orders.json?&auth=${token}&orderBy=%22userId%22&equalTo=%22${userId}%22`
      )
      .then((response) => {
        const loadedOrders = Object.entries(response.data).reverse();
        dispatch(loadOrdersSuccess(loadedOrders));
      })
      .catch((err) => dispatch(loadOrdersError(err)));
  };
};

export const clearOrder = () => {
  return {
    type: "CLEAR_ORDER",
  };
};

export const loadOrdersStart = () => {
  return {
    type: "LOAD_ORDERS_START",
  };
};

export const loadOrdersSuccess = (loadedOrders) => {
  return {
    type: "LOAD_ORDERS_SUCCESS",
    orders: loadedOrders,
  };
};

export const loadOrdersError = (error) => {
  return {
    type: "LOAD_ORDERS_ERROR",
    error: error,
  };
};

export const saveOrder = (newOrder) => {
  return function (dispatch, getState) {
    dispatch(saveOrderStart());

    const token = getState().signupLoginReducer.token;
    //const userId = getState().signupLoginReducer.userId;

    axios
      .post(`/orders.json?&auth=${token}`, newOrder)
      .then((response) => {
        dispatch(saveOrderSuccess());
      })
      .catch((error) => dispatch(saveOrderError(error)));
  };
};

export const saveOrderStart = () => {
  return {
    type: "SAVE_ORDER_START",
  };
};

export const saveOrderSuccess = () => {
  return {
    type: "SAVE_ORDER_SUCCESS",
  };
};

export const saveOrderError = (error) => {
  return {
    type: "SAVE_ORDER_ERROR",
    error: error,
  };
};
