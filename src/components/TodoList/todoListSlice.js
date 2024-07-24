// //set cac trang thai ban dau cho todoList
// const initState = [
//   { id: 1, name: "Learn React", completed: false, priority: "Medium" },
//   { id: 2, name: "Learn Redux", completed: true, priority: "High" },
//   { id: 3, name: "Learn Routerdom", completed: false, priority: "Low" },
// ];
// export const todoListSliceReducer = (state = initState, action) => {
//   //   console.log("Dispatch-> Reducer: ", state, action);
//   switch (action.type) {
//     case "todoList/addTodo":
//       return [...state, action.payload];
//     case "todoList/toggleTodoStatus":
//       return state.map((todo) =>
//         todo.id === todo.payload
//           ? { ...todo, completed: !todo.completed }
//           : todo
//       );
//     default:
//       return state;
//   }
// };
// export default todoListSliceReducer;

import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
  name: "todo",
  initialState: [
    { id: 1, name: "Learn React", completed: false, priority: "Medium" },
    { id: 2, name: "Learn Redux", completed: true, priority: "High" },
    { id: 3, name: "Learn Routerdom", completed: false, priority: "Low" },
  ],
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    toggleTodoStatus: (state, action) => {
      const currentTodo = state.find((todo) => todo.id === action.payload);
      if (currentTodo) {
        currentTodo.completed = !currentTodo.completed;
      }
    },
  },
});
