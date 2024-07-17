import { combineReducers } from "redux";
import filterSliceReducer from "../components/Filters/FilterSlice";
import todoListSliceReducer from "../components/TodoList/todoListSlice";

// export const rootReducer = (state = {} , action) => {
//   return {
//     filters: filterSliceReducer(state.filters, action),
//     todoList: todoListSliceReducer(state.todoList, action),
//   };
// };
export const rootReducer = combineReducers({
  filters: filterSliceReducer,
  todoList: todoListSliceReducer,
});

export default rootReducer;
