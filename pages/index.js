import Navbar from "../components/Navbar/Navbar";
import styles from "../styles/Home.module.css";

export default function Home() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const todo = form.todo.value;
    console.log(todo);
  };

  return (
    <div className={styles.container}>
      <Navbar />
      <div className="mx-auto flex justify-center h-screen items-center">
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
      </div>
    </div>
  );
}
