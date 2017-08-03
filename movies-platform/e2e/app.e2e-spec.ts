import { MoviesPlatformPage } from './app.po';

describe('movies-platform App', () => {
  let page: MoviesPlatformPage;

  beforeEach(() => {
    page = new MoviesPlatformPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
