//set cac trang thai ban dau cho todoList
const initState = {
  search: "",
  status: "All",
  priority: [],
};

export const filterSliceReducer = (state = initState, action) => {
  //la 1 function
  //action:
  /*
      {
          type: 'todoList/addTodo',
          payload: {id: 5, name: 'Learn Soccer', completed: false, priority: 'Low'}
      }
      */
  //   console.log("Dispatch-> Reducer: ", state, action);
  switch (action.type) {
    case "filters/searchFilterChange":
      return {
        ...state,
        search: action.payload,
      };
      case "filters/statusFilterChange":
      return {
        ...state,
        search: action.payload,
      };
    default:
      return state;
  }
};
export default filterSliceReducer;
