import {bootstrap} from 'angular2/platform/browser';
import {TodoApp} from './app/todo';
import {ROUTER_PROVIDERS} from 'angular2/router';

bootstrap(TodoApp, [
  ROUTER_PROVIDERS
]);
