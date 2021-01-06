import React from "react";
import { connect } from "react-redux";
import Spinner from "../../components/General/Spinner";
import Order from "../../components/Order";
import * as actions from "../../Redux/Actioin/orderActions";

class OrderPage extends React.Component {
  componentDidMount() {
    this.props.loadOrders(this.props.userId);
  }

  render() {
    return (
      <div>
        {this.props.loading ? (
          <Spinner />
        ) : this.props.orders.length ? (
          this.props.orders.map((el) => <Order key={el[0]} order={el[1]} />)
        ) : (
          <h2>Уучлаарай таньд захиалгын түүх байхгүй байна</h2>
        )}
      </div>
    );
  }
}

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
