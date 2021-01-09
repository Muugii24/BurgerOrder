import React, { useEffect } from "react";
import { connect } from "react-redux";
import Spinner from "../../components/General/Spinner";
import Order from "../../components/Order";
import * as actions from "../../Redux/Actioin/orderActions";

const OrderPage = (props) => {
  useEffect(() => {
    props.loadOrders(props.userId);
  }, []);

  return (
    <div>
      {props.loading ? (
        <Spinner />
      ) : props.orders.length ? (
        props.orders.map((el) => <Order key={el[0]} order={el[1]} />)
      ) : (
        <h2>Уучлаарай таньд захиалгын түүх байхгүй байна</h2>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    orders: state.orderReducer.orders,
    loading: state.orderReducer.loading,
    userId: state.signupLoginReducer.userId,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadOrders: (userId) => dispatch(actions.loadOrders(userId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderPage);
