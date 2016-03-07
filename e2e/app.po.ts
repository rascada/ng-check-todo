export class TodoPage {
  navigateTo() { return browser.get('/'); }
  getParagraphText() { return element(by.css('Todo-app p')).getText(); }
}
