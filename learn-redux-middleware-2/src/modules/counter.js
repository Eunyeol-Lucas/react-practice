import { createAction, handleActions } from "redux-actions";

const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";

export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

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
