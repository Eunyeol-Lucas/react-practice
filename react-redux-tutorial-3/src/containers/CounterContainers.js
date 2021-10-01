import React, { useCallback } from "react";
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
import { useSelector, useDispatch } from "react-redux";
import Counter from "../components/Counter";
import { decrease, increase } from "../modules/counter";

const CounterContainers = () => {
  const number = useSelector((state) => state.counter.number);
  const dispatch = useDispatch();
  const onIncrease = useCallback(() => dispatch(increase()));
  const onDecrease = useCallback(() => dispatch(decrease()));
  return (
    <Counter number={number} onIncrease={onIncrease} onDecrease={onDecrease} />
  );
};

// const mapStateToProps = (state) => ({
//   number: state.counter.number,
// });

// const mapDispatchToProps = (dispatch) => ({
//   increase: () => {
//     dispatch(increase());
//   },
//   decrease: () => {
//     dispatch(decrease());
//   },
// });

// export default connect(
//   (state) => ({
//     number: state.counter.number,
//   }),
//   {
//     increase,
//     decrease,
//   }
// )(CounterContainers);

export default CounterContainers;
