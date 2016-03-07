import { Component } from 'angular2/core';

import { Todo } from './todos.service';

@Component({
  selector: 'todo',
  inputs: ['todo'],
  template: `
    <div class='todo'>
      <span>{{ content }}</span>
    </div>
  `,
  styleUrls: ['app/todo.component.css'],
})
export default class TodoComponent {
  set todo(todo: Todo) {
    Object.assign(this, todo);
  }
}
