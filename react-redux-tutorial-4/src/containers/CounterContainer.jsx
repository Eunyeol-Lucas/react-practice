import React from "react";
import { connect } from "react-redux";
import Counter from "../components/Counter";
import { decrease, increase } from "../modules/counter";

const CounterContainer = ({ number, increase, decrease }) => {
  return (
    <div>
      <Counter number={number} onIncrease={increase} onDecrease={decrease} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  number: state.counter.number,
});

// mapStateToPros, mapDispatchProps에서 반환하는 객체 내부의 값들은 컴포넌트의 props로 전달됨
const mapDispatchToProps = (dispatch) => ({
  //임시 함수
  increase: () => {
    dispatch(increase());
  },
  decrease: () => {
    dispatch(decrease());
  },
});

export default connect(
  (state) => ({
    number: state.counter.number,
  }),
  increase, decrease
)(CounterContainer);
