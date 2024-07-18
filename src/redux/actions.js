// export const addTodoAction = {
//     type: 'todoList/addTodo',
//     payload: {id: 5, name: 'Learn Soccer', completed: false, priority: 'Low'}
// }

//nen dung action creater
export const addTodo = (data) => {
  return {
    type: "todoList/addTodo",
    payload: data,
  };
};

export const toggleTodoStatus = (dataId) => {
  return {
    type: "todoList/toggleTodoStatus",
    payload: dataId,
  };
};

export const searchTextChange = (text) => {
  return {
    type: "filters/searchFilterChange",
    payload: text,
  };
};

export const statusFilterChange = (status) => {
  return {
    type: "filters/statusFilterChange",
    payload: status,
  };
};

export const prioritiesFilterChange = (priorities) => {
  return {
    type: "filters/prioritiesFilterChange",
    payload: priorities,
  };
};
