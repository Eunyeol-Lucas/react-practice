import React from "react";
import Counter from "../components/Counter";
import { connect } from "react-redux";
import { increase, decrease } from "../modules/counter";

const CounterContainers = ({ number, increase, decrease }) => {
  return (
    <div>
      <Counter number={number} onIncrease={increase} onDecrease={decrease} />
    </div>
  );
};

export default connect(
  (state) => ({
    number: state.counter,
  }),
  {
    increase,
    decrease,
  }
)(CounterContainers);
