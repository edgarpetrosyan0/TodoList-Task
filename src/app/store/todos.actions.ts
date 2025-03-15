import { createAction, props } from '@ngrx/store';
import { Todo } from '../todos/model/todo.model';


export const addTodo = createAction(
  '[Todo] Add', 
  props<{ todo: Todo }>()
);

export const removeTodo = createAction(
  '[Todo] Remove',
  props<{ id: number }>()
);

export const setSearch = createAction(
  '[Todo] Set Search',
  props<{ query: string }>()
);


export const setSortOrder = createAction(
  '[Todo] Set Sort Order',
  props<{ order: 'name'}>()
);
