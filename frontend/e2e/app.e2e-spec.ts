import { EzawPage } from './app.po';

describe('ezaw App', function() {
  let page: EzawPage;

  beforeEach(() => {
    page = new EzawPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
