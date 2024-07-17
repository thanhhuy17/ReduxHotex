//set cac trang thai ban dau cho todoList
const initState = {
  filters: {
    search: "",
    status: "All",
    priority: [],
  },
  todoList: [
    { id: 1, name: "Learn React", completed: false, priority: "Medium" },
    { id: 2, name: "Learn Redux", completed: true, priority: "High" },
    { id: 3, name: "Learn Routerdom", completed: false, priority: "Low" },
  ],
};

export const rootReducer = (state = initState, action) => {
  //la 1 function
  //action:
  /*
    {
        type: 'todoList/addTodo',
        payload: {id: 5, name: 'Learn Soccer', completed: false, priority: 'Low'}
    }
    */
  console.log("Dispatch-> Reducer: ", state, action); //
  switch (action.type) {
    case "todoList/addTodo":
      return {
        ...state,
        todoList: [
          ...state.todoList,
          // {id: 5, name: 'Learn Soccer', completed: false, priority: 'Low'}
          action.payload,
        ],
      };
    case "filters/searchFilterChange":
      return {
        ...state,
        filters: {
          ...state.filters,
          search: action.payload,
        },
      };
    default:
      return state;
  }
};
export default rootReducer;
