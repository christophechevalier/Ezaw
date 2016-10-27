import { EzawPage } from './app.po';
import { browser } from 'protractor';

describe('ezaw App', function() {
  let p: EzawPage;

  beforeEach(() => {
    p = new EzawPage();
  });

  it('should login if user/pwd match and navigate to menu navigation', () => {
    p.navigateTo('/auth/login');

    p.click('.page-auth .md-tab-header > div:nth-child(2)');

    p.click('.page-auth .md-tab-header > div:nth-child(1)');

    p.fillInput('md-input input[name="username"]', 'admin');
    p.fillInput('md-input input[name="password"]', 'admin');

    p.click('.page-login button');

    p.click('.page-nav-module .menu');

    p.click('.menu-open button');

    expect(browser.getCurrentUrl()).toMatch('/nav/navigation');
  });
});
