/// <reference path="../typings/main.d.ts" />

import { TodoPage } from './app.po';

describe('todo App', function() {
  let page: TodoPage;

  beforeEach(() => {
    page = new TodoPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo()
    expect(page.getParagraphText()).toEqual('todo Works!');
  });
});
