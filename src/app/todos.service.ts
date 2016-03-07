import { Injectable } from 'angular2/core';

@Injectable()
export class Todos {
  private _todos: Todo[] = [new Todo('siema')]

  getTodos() {
    return this._todos;
  }

  add(todo: Todo) {
    this._todos.push(todo);
  }
}

export class Todo {
  content: string
  done: boolean

  constructor(content: string, done?: boolean) {
    this.content = content;
    this.done = done;
  }
}
