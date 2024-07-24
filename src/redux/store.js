// import { createStore } from "redux";
// import {rootReducer} from './reducer'
// import { composeWithDevTools } from "@redux-devtools/extension";
// const composeWithDevTool = composeWithDevTools();
// const store = createStore(rootReducer, composeWithDevTool);

// export default store

import { configureStore } from "@reduxjs/toolkit";
import filterSlice from "../components/Filters/filterSlice";
import todoListSlice from "../components/TodoList/todoListSlice";


const store = configureStore({
  reducer: {
    filters: filterSlice.reducer,
    todoList: todoListSlice.reducer,
  },
});

export default store;
