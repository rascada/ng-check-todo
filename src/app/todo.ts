import {Component, OnInit} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import { Todos } from './todos.service';
import Todo from './todo.component';
import todoCreator from './todoCreator.component';

@Component({
  selector: 'todo-app',
  providers: [Todos],
  templateUrl: 'app/todo.html',
  styleUrls: ['app/todo.css'],
  directives: [ROUTER_DIRECTIVES, todoCreator, Todo],
  pipes: [],
})
@RouteConfig([

])
export class TodoApp {
  todos: any[]
  constructor(private _todos: Todos) { }

  ngOnInit() {
    this.todos = this._todos.getTodos();
  }
}
