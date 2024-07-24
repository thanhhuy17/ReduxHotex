// //set cac trang thai ban dau cho todoList
// const initState = {
//   search: "",
//   status: "All",
//   priority: [],
// };

// export const filterSliceReducer = (state = initState, action) => {
//   //la 1 function
//   //action:
//   /*
//       {
//           type: 'todoList/addTodo',
//           payload: {id: 5, name: 'Learn Soccer', completed: false, priority: 'Low'}
//       }
//       */
//   //   console.log("Dispatch-> Reducer: ", state, action);
//   switch (action.type) {
//     case "filters/searchFilterChange":
//       return {
//         ...state,
//         search: action.payload,
//       };
//     case "filters/statusFilterChange":
//       return {
//         ...state,
//         status: action.payload,
//       };
//     case "filters/prioritiesFilterChange":
//       return {
//         ...state,
//         priority: action.payload,
//       };
//     default:
//       return state;
//   }
// };
// export default filterSliceReducer;

import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
  name: "filters",
  initialState: {
    search: "",
    status: "All",
    priorities: [],
  },
  reducers: {
    searchFilterChange: (state, action) => {
      state.search = action?.payload; // update State
    },
    statusFilterChange: (state, action) => {
      state.status = action?.payload;
    },
    prioritiesFilterChange: (state, action) => {
      state.priorities = action?.payload;
    },
  },
});
