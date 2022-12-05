import { createSlice } from "@reduxjs/toolkit";
// ** Initial state
const initialTodos = {
  todos: [
    {
      id: 1,
      body: "My Work Handling",
    },
    {
      id: 2,
      body: "My Second Todo",
    },
  ],
};

// ** Redux er slice ready korbo
// ** Slice er 3 ta jinish ekta object er vitor dite hoi
// ** 1. name

export const todosSlice = createSlice({
  name: "todos",
  initialState: initialTodos,
  reducers: {
    // ** showTodos holo action
    showTodos: (state) => state,
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    deleteTodo: (state, action) => {
      const id = action.payload;
      state.todos = state.todos.filter((todo) => todo.id !== id);
    },
  },
});

// ** Ei Slice file theke 2 ta jinish export korte hobe 1. actions 2. reducer

export const { showTodos, addTodo, deleteTodo } = todosSlice.actions;
export default todosSlice.reducer;
