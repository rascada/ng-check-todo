import {describe, it, expect, beforeEachProviders, inject} from 'angular2/testing';
import {TodoApp} from '../app/todo';

beforeEachProviders(() => [TodoApp]);

describe('App: Todo', () => {
  it('should have the `defaultMeaning` as 42', inject([TodoApp], (app: TodoApp) => {
    expect(app.defaultMeaning).toBe(42);
  }));

  describe('#meaningOfLife', () => {
    it('should get the meaning of life', inject([TodoApp], (app: TodoApp) => {
      expect(app.meaningOfLife()).toBe('The meaning of life is 42');
      expect(app.meaningOfLife(22)).toBe('The meaning of life is 22');
    }));
  });
});

