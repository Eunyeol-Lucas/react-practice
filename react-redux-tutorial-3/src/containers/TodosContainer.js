import React, { useCallback } from "react";
// import { connect } from "react-redux";
import { useSelector, useDispatch } from "react-redux";
import Todos from "../components/Todos";
import { useActions } from "../lib/useActions";
import { changeInput, insert, toggle, remove } from "../modules/todos";

const TodosContainer = () => {
  const { input, todos } = useSelector(({ todos }) => ({
    input: todos.input,
    todos: todos.todos,
  }));
  // const dispatch = useDispatch();
  // const onChangeInput = useCallback(
  //   (input) => dispatch(changeInput(input)),
  //   [dispatch]
  // );
  // const onInsert = useCallback((text) => dispatch(insert(text)), [dispatch]);
  // const onToggle = useCallback((id) => dispatch(toggle(id)), [dispatch]);
  // const onRemove = useCallback((id) => dispatch(remove(id)), [dispatch]);
  const [onChangeInput, onInsert, onToggle, onRemove] = useActions(
    [changeInput, insert, toggle, remove],
    []
  );
  return (
    <div>
      <Todos
        input={input}
        todos={todos}
        onChangeInput={onChangeInput}
        onInsert={onInsert}
        onToggle={onToggle}
        onRemove={onRemove}
      />
    </div>
  );
};

// export default connect(
//   ({ todos }) => ({
//     input: todos.input,
//     todos: todos.todos,
//   }),
//   {
//     changeInput,
//     insert,
//     toggle,
//     remove,
//   }
// )(TodosContainer);

export default React.memo(TodosContainer);
