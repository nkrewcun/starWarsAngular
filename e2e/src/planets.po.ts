import {browser, by, element} from 'protractor';

export class PlanetPage {

  sleep(time: number) {
    browser.driver.sleep(time);
  }

  fillForm() {
    const name = element.all(by.id('name'));
    const location = element.all(by.id('location'));
    const population = element.all(by.id('population'));
    const diameter = element.all(by.id('diameter'));
    const description = element.all(by.id('description'));
    const image = element.all(by.id('image'));

    name.sendKeys(Math.random().toString(36).substr(2, 8));
    location.sendKeys(Math.random().toString(36).substr(2, 12));
    population.sendKeys(Math.round(Math.pow(1 + Math.random(), (1 + Math.random()) * 20)));
    diameter.sendKeys(Math.round((1 + Math.random()) * 100000));
    description.sendKeys(Math.random().toString(36).substr(2, 12).repeat(10));
    image.sendKeys('alderaan.jpg');
  }
}
