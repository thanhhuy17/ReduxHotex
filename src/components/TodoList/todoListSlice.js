//set cac trang thai ban dau cho todoList
const initState = [
  { id: 1, name: "Learn React", completed: false, priority: "Medium" },
  { id: 2, name: "Learn Redux", completed: true, priority: "High" },
  { id: 3, name: "Learn Routerdom", completed: false, priority: "Low" },
];
export const todoListSliceReducer = (state = initState, action) => {
  //   console.log("Dispatch-> Reducer: ", state, action);
  switch (action.type) {
    case "todoList/addTodo":
      return [...state, action.payload];

    default:
      return state;
  }
};
export default todoListSliceReducer;
