import { createReducer, on } from '@ngrx/store';
import { Todo } from '../todos/model/todo.model';
import { addTodo, removeTodo, setSortOrder,setSearch } from './todos.actions';

export interface TodoState {
  todos: Todo[];
  search: string;
  sortOrder: 'name' | 'date';
}

const initialState: TodoState = {
  todos: [],
  search: '',
  sortOrder: 'date',
};


export const todoReducer = createReducer(
  initialState,
  
  on(addTodo, (state, { todo }) => ({
    ...state,
    todos: [...state.todos, todo]
  })),

  on(removeTodo, (state, { id }) => ({
    ...state,
    todos: state.todos.filter(todo => todo.id !== id)
  })),
  on(setSearch, (state, { query }) => ({
    ...state,
    search: query
  })),
  
  on(setSortOrder, (state, { order }) => ({
    ...state,
    sortOrder: order
  }))
);
