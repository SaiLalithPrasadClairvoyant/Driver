import { DriverPage } from './app.po';

describe('driver App', () => {
  let page: DriverPage;

  beforeEach(() => {
    page = new DriverPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
