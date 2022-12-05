import Link from "next/link";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo } from "../../Slices/TodoSlice";

const index = () => {
  const { todos } = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  console.log(todos);

  //   const todos = useSelector((state) => state);

  console.log(todos);

  const handleDelete = (id) => {
    console.log(id);

    dispatch(deleteTodo(id));
  };

  return (
    <div className="h-screen flex justify-center items-center flex-col ">
      <h1 className="text-3xl font-extrabold">Todos</h1>
      {todos &&
        todos.map((todo) => (
          <div key={todo.id}>
            <h1>Todo: {todo.body}</h1>
            <button className="btn btn-ghost mr-2 bg-gray-200">Edit</button>
            <button
              onClick={() => handleDelete(todo.id)}
              className="btn btn-ghost bg-gray-200"
            >
              Delete
            </button>
          </div>
        ))}
      <Link href="/">
        <button className="btn btn-ghost mt-5 bg-gray-200">Back To Home</button>
      </Link>
    </div>
  );
};

export default index;
