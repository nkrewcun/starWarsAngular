import {browser, element, logging, by} from 'protractor';
import {SpaceshipPage} from './spaceships.to';

describe('test des planètes', () => {
// Variable contenant notre PlanetPage
  let page: SpaceshipPage;
// variable que l’on utilisera pour compter le nombre de planètes
  let nbSpaceships: number;
// Avant de commencer les tests, nous demandons à notre navigateur de se rendre à l’URL suivante
  beforeEach(() => {
    page = new SpaceshipPage();
    browser.get('/spaceships');
  });




});
