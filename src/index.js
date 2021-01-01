import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";

import App from "./Pages/App";
import burgerReducer from "./Redux/Reducer/BurgerReducer";
import orderReducer from "./Redux/Reducer/OrderReducer";
import signupReducer from "./Redux/Reducer/signupReducer";

const logger = (store) => {
  return (next) => {
    return (action) => {
      console.log("Dispatching --->", action);
      console.log("State: Before --->", store.getState());
      const result = next(action);
      console.log("State: After --->", store.getState());
      return result;
    };
  };
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducers = combineReducers({
  burgerReducer,
  orderReducer,
  signupReducer,
});

const middleWares = [logger, thunk];

const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(...middleWares))
);

ReactDom.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
