import { browser, element, by } from 'protractor';

export class EzawPage {
  navigateTo(url: string = '/') {
    browser.sleep(1000);
    return browser.get(url);
  }

  getText(cssSelector: string) {
    browser.sleep(1000);
    return element(by.css(cssSelector)).getText();
  }

  click(cssSelector: string, index = -1) {
    if(index === -1) {
      browser.sleep(1000);
      element(by.css(cssSelector)).click();
    } else {
      browser.sleep(1000);
      element.all(by.css(cssSelector)).click();
    }
  }

  fillInput(cssSelector: string, text: string) {
    browser.sleep(2000);
    element(by.css(cssSelector)).clear();
    element(by.css(cssSelector)).sendKeys(text);
  }
}
