// export const todoListSelector = (state) => {
//   const todoRemaining = state.todoList.filter((todo) => {
//     return todo.name.includes(state.filters.search);
//   });
//   return todoRemaining;

// import { createSelector } from "reselect";
import { createSelector } from "@reduxjs/toolkit";

export const todoListSelector = (state) => state.todoList;
export const filterStatusSelector = (state) => state.filters.status;
export const prioritiesSelector = (state) => state.filters.priority;
export const searchTextSelector = (state) => state.filters.search;

export const todoRemainingSelector = createSelector(
  todoListSelector,
  filterStatusSelector, // Completed, Todo, All
  searchTextSelector,
  prioritiesSelector, // High, Medium, Low
  (todoList, status, filtersSearch, priorities) => {
    return todoList.filter((todo) => {
      if (status === "All") {
        return priorities?.length
          ? todo?.name?.includes(filtersSearch) &&
              priorities?.includes(todo?.priority)
          : todo?.name?.includes(filtersSearch);
      }
      return (
        todo?.name?.includes(filtersSearch) &&
        (status === "Completed" ? todo?.completed : !todo?.completed) &&
        (priorities?.length ? priorities?.includes(todo.priority) : true)
      );
    });
  }
);
