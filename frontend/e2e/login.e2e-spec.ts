import { browser, element, by } from 'protractor';

describe(`Login`, () => {
  // it(`should not login if user/pwd not match`, () => {
  //   expect(element(by.css(`.page-login button`)).getText()).toMatch(`Log in`);

  //   element(by.css(`md-input input[name="username"]`)).sendKeys(`admin`);
  //   element(by.css(`md-input input[name="password"]`)).sendKeys(`randomPasswordNotWorking`);

  //   expect(element(by.css(`.page-login button`)).isEnabled()).toBe(true);

  //   element(by.css(`.page-login button`)).click();

  //   expect(browser.getCurrentUrl()).toMatch(/login$/);
  // });

  it(`should login if user/pwd match`, () => {
    // element(by.css(`md-input input[name="username"]`)).clear();
    // element(by.css(`md-input input[name="username"]`)).sendKeys(`chris`);
    // element(by.css(`md-input input[name="password"]`)).clear();
    // element(by.css(`md-input input[name="password"]`)).sendKeys(`cc`);

    // element(by.css(`.page-login button`)).click();

    expect(browser.getCurrentUrl()).toMatch('/nav/navigation');
  });
});
