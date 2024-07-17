// export const todoListSelector = (state) => {
//   const todoRemaining = state.todoList.filter((todo) => {
//     return todo.name.includes(state.filters.search);
//   });
//   return todoRemaining;

import { createSelector } from "reselect";

export const todoListSelector = (state) => state.todoList;
export const filterStatusSelector = (state) => state.filters.status;
export const searchTextSelector = (state) => state.filters.search;

export const todoRemainingSelector = createSelector(
  todoListSelector,
  filterStatusSelector,
  searchTextSelector,
  (todoList, status, filtersSearch) => {
    return todoList.filter((todo) => {
      // console.log(todo.completed);
      if (status === "All") {
        return todo.name.includes(filtersSearch);
      }
      return (
        todo.name.includes(filtersSearch) &&
        (status === "Completed" ? todo.completed : !todo.completed)
      );
      // return {}
    });
  }
);
