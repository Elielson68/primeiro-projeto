import { PriemiroProjetoPage } from './app.po';

describe('priemiro-projeto App', function() {
  let page: PriemiroProjetoPage;

  beforeEach(() => {
    page = new PriemiroProjetoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
