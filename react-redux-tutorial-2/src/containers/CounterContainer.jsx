import React, { useCallback } from "react";
import { bindActionCreators } from "redux";
import { connect, useSelector, useDispatch } from "react-redux";
import Counter from "../components/Counter";
import { decrease, increase } from "../modules/counter";

// const CounterContainer = ({ number, increase, decrease }) => {
//   return (
//     <Counter number={number} onIncrease={increase} onDecrease={decrease} />
//   );
// };

// const CounterContainer = () => {
//   const number = useSelector(state => state.counter.number);
//   return <Counter number={number} />;
// }

// const CounterContainer = () => {
//   const number = useSelector((state) => state.counter.number);
//   const dispatch = useDispatch();
//   return (
//     <Counter
//       number={number}
//       onIncrease={() => dispatch(increase())}
//       onDecrease={() => dispatch(decrease())}
//     />
//   );
// };

const CounterContainer = () => {
  const number = useSelector((state) => state.counter.number);
  const dispatch = useDispatch();
  const onIncrease = useCallback(() => dispatch(increase()), [dispatch]);
  const onDecrease = useCallback(() => dispatch(decrease()), [dispatch]);
  return (
    <Counter number={number} onIncrease={onIncrease} onDecrease={onDecrease} />
  );
};
export default CounterContainer;
// const mapStateToProps = state => ({
//     number: state.counter.number,
// });

// const mapDispatchToProps = dispatch => ({
//     increase: () => {
//         dispatch(increase());
//     },
//     decrease: () => {
//         dispatch(decrease());
//     },
// });

// export default connect(mapStateToProps, mapDispatchToProps,)(CounterContainer);

// export default connect(
//   (state) => ({
//     number: state.counter.number,
//   }),
//   (dispatch) =>
//     bindActionCreators(
//       {
//         increase,
//         decrease,
//       },
//       dispatch
//     )
// )(CounterContainer);

// export default connect(
//   (state) => ({
//     number: state.counter.number,
//   }),
//   {
//     increase,
//     decrease,
//   }
// )(CounterContainer);
