import { Component } from 'angular2/core';

import { Todos, Todo } from './todos.service';

@Component({
  selector: 'todo-creator',
  template: '<input [(ngModel)]="content"> <button (click)="add()"> Dodaj </button>',
})
export default class {
  content: string

  constructor(private _todos: Todos) { }

  add() {
    if (!this.content) return;

    this._todos.add(new Todo(this.content));
    this.content = '';
  }
}
