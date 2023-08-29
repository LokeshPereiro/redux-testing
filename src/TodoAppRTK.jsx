import { useState } from "react";
import {
  useGetTodosQuery,
  useGetTodoByIdQuery,
} from "./store/rtk-apis/todosApi";

const TodoAppRTK = () => {
  // const { data, isLoading, isFetching } = useGetTodosQuery();
  const [todoId, setTodoId] = useState(1);
  const {
    data: singleTodo,
    isLoading,
    isFetching,
  } = useGetTodoByIdQuery(todoId);
  //   console.log(singleTodo);
  const nextTodo = () => {
    setTodoId(todoId + 1);
  };

  const prevTodo = () => {
    if (todoId === 1) return;
    setTodoId(todoId - 1);
  };

  return (
    <>
      <h1>Todo - RTK Query</h1>
      <hr />
      <pre>{JSON.stringify(singleTodo, null, 3)}</pre>
      <button className="btn btn-outline-danger" onClick={prevTodo}>
        Prev
      </button>
      <button className="btn btn-outline-success" onClick={nextTodo}>
        Next
      </button>
      {/* {data?.map((todo) => {
        return (
          <li key={todo.id}>
            <strong>{todo.completed ? "DONE" : "Pending"} </strong>
            {todo.title}
          </li>
        );
      })} */}
    </>
  );
};

export default TodoAppRTK;
