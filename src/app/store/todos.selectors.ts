import { createSelector, createFeatureSelector } from '@ngrx/store';
import { TodoState } from './todos.reducer';

export const selectTodoState = createFeatureSelector<TodoState>('todos');

export const selectAllTodos = createSelector(
  selectTodoState,
  (state) => state.todos
);

export const selectSearchQuery = createSelector(
  selectTodoState,
  (state) => state.search
);

export const selectSortOrder = createSelector(
  selectTodoState,
  (state) => state.sortOrder
);

// Filtered Todos
export const selectFilteredTodos = createSelector(
  selectAllTodos,
  selectSearchQuery,
  selectSortOrder,
  (todos, searchQuery, sortOrder) => {
    let filteredTodos = todos.filter(todo => 
      todo.title.toLowerCase().includes(searchQuery)
    );

    // Sorting Logic
    if (sortOrder === 'name') {
      filteredTodos = filteredTodos.sort((a, b) => a.title.localeCompare(b.title));
    } else {
      filteredTodos = filteredTodos.sort((a, b) => b.createdAt - a.createdAt);
    }

    return filteredTodos;
  }
);
