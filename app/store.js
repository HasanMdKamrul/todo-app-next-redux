// ** first a store name a variable niye configure store korte hobe

import todos from "../Slices/TodoSlice";

const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
  reducer: {
    todos: todos,
  },
});

export default store;
