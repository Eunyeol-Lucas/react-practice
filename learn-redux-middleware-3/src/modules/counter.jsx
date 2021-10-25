import { createAction, handleActions } from "redux-actions";
// 액션 생성
const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";
//액션 함수 생성
export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);
// 초기값
const initialState = 0;
// 리듀서
const counter = handleActions(
  {
    [INCREASE]: (state) => state + 1,
    [DECREASE]: (state) => state - 1,
  },
  initialState
);

export default counter;
