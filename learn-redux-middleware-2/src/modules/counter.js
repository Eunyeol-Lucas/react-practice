import { createAction, handleActions } from "redux-actions";

const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";

export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

export const increaseAsync = () => (dispatch) => {
  setTimeout(() => {
    dispatch(increase());
  }, 1000);
};

// 1초 뒤에 increase 혹은 decrease 함수를 디스패치함
export const decreaseAsync = () => (dispatch) => {
  setTimeout(() => {
    dispatch(decrease());
  }, 1000);
};

const initialState = 0;
// 상태는 꼭 객체일 필요가 없다. 숫자도 OK

const counter = handleActions(
  {
    [increase]: (state) => state + 1,
    [decrease]: (state) => state - 1,
  },
  initialState
);

export default counter;
