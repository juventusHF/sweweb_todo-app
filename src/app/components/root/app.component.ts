import { Component } from '@angular/core';
import {Todo} from '../../model/Todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todos: Array<Todo> = [];

  updateTodos(todoList: Array<Todo>): void {
    this.todos = todoList;
  }
}
