import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../components/Navbar/Navbar";
import { addTodo } from "../Slices/TodoSlice";
import styles from "../styles/Home.module.css";

export default function Home() {
  const numberofTodosExisted = useSelector((state) => state.todos.todos.length);
  const dispatch = useDispatch();

  const router = useRouter();

  console.log(numberofTodosExisted);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const todo = form.todo.value;

    const todoObj = {
      id: numberofTodosExisted + 1,
      body: todo,
    };

    dispatch(addTodo(todoObj));
    handleSeeTodos();
    console.log(todoObj);
  };

  const handleSeeTodos = () => {
    router.push(`/todos`);
  };

  return (
    <div className={styles.container}>
      <Navbar />
      <div className="mx-auto flex justify-center h-screen items-center flex-col">
        <form onSubmit={handleSubmit}>
          <div className="form-control w-full max-w-xs">
            <input
              name="todo"
              type="text"
              placeholder="Add todo"
              className="input input-bordered w-full max-w-xs"
            />
            <button type="submit" className="btn btn-ghost mt-5 bg-gray-200">
              Add Todo
            </button>
          </div>
        </form>
        <div>
          <button
            onClick={handleSeeTodos}
            className="btn btn-ghost mt-5 bg-gray-200"
          >
            See Todos
          </button>
        </div>
      </div>
    </div>
  );
}
