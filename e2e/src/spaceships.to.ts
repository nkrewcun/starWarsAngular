import {browser, by, element} from 'protractor';

export class SpaceshipPage {

  sleep(time: number) {
    browser.driver.sleep(time);
  }
}
