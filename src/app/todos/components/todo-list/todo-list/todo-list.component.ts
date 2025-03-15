import { Component, OnInit, signal } from '@angular/core';
import { TodoItemComponent } from '../../todo-item/todo-item/todo-item.component';
import { Todo } from '../../../model/todo.model';
import { select, Store } from '@ngrx/store';
import { selectFilteredTodos } from '../../../../store/todos.selectors';
import { addTodo, removeTodo, setSearch, setSortOrder } from '../../../../store/todos.actions';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  imports: [TodoItemComponent,FormsModule,CommonModule],
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  newTask = signal('');
  search = '';
  todos = signal<Todo[]>([]);

  constructor(private store: Store) {
    this.store.pipe(select(selectFilteredTodos)).subscribe(tasks => this.todos.set(tasks));
  }

  ngOnInit() {
  }

  addTask() {
    if (this.newTask().trim()) {
      const newTodo: Todo = { id: Date.now(), title: this.newTask(), completed: false, createdAt: Date.now() };
      this.store.dispatch(addTodo({ todo: newTodo }));
      this.newTask.set('');
    }
  }

  searchTask() {
    this.store.dispatch(setSearch({ query: this.search.trim() }));
  }

  removeTask(id: number) {
    this.store.dispatch(removeTodo({ id }));
  }

  changeSortOrder(event: Event) {
    const order = (event.target as HTMLSelectElement).value as 'name';
    this.store.dispatch(setSortOrder({ order }));
  }
}
