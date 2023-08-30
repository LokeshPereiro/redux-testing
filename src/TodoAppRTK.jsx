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
      {isLoading && <span className="alert alert-danger">Loading...</span>}
      <hr />
      <pre>{JSON.stringify(singleTodo, null, 3)}</pre>
      <div className="d-flex justify-content-between">
        <button className="btn btn-outline-danger" onClick={prevTodo}>
          Prev
        </button>
        <button className="btn btn-outline-success" onClick={nextTodo}>
          Next
        </button>
      </div>
      {/* <table>
        <tr>
          <th>
            <i>TODOS</i>
          </th>
          <th>
            <i>STATUS</i>
          </th>
        </tr>
        {data?.map((todo) => {
          return (
            <tr key={todo.id}>
              <td>{todo.title}</td>
              <td>
                {todo.completed ? (
                  <span className="text-success">Done</span>
                ) : (
                  <span className="text-warning">Pending</span>
                )}
              </td>
            </tr>
          );
        })}
      </table> */}
    </>
  );
};

export default TodoAppRTK;
