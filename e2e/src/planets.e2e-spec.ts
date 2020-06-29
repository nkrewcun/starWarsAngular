import {browser, element, logging, by} from 'protractor';
import {PlanetPage} from './planets.po';

describe('test des planètes', () => {
// Variable contenant notre PlanetPage
  let page: PlanetPage;
// variable que l’on utilisera pour compter le nombre de planètes
  let nbPlanetes: number;
// Avant de commencer les tests, nous demandons à notre navigateur de se rendre à l’URL suivante
  beforeEach(() => {
    page = new PlanetPage();
    browser.get('/planets');
  });

  it('En tant qu\'utilisateur, j\'accède à la page pour ajouter une nouvelle planète', () => {
    element.all(by.css('div.card-deck div.card')).then(cards => {
      nbPlanetes = cards.length;
      element(by.css('div a.btn')).click();
      expect(browser.driver.getCurrentUrl()).toContain('/planets/add');
      page.sleep(5000);
    });
  });

  it('En tant qu\'utilisateur, je crée une nouvelle planète via le formulaire et je vérifie qu\'elle a bien été ajoutée', () => {
    browser.get('/planets/add');
    page.fillForm();
    page.sleep(5000);
    const submitButton = element.all(by.css('input[type="submit"]'));
    submitButton.click().then(() => {
      element.all(by.css('div.card-deck div.card')).then(newNbPlanets => {
        nbPlanetes++;
        expect(newNbPlanets.length).toEqual(nbPlanetes);
        page.sleep(5000);
      });
    });
  });

  it('En tant qu\'utilisateur, je supprime une planète', () => {
    const deleteButton = element.all(by.css('.card .card-body button.btn-danger')).last().click().then(() => {
      element.all(by.css('div.card-deck div.card')).then(newNbPlanets => {
        nbPlanetes--;
        expect(newNbPlanets.length).toEqual(nbPlanetes);
        page.sleep(5000);
      });
    });
  });


// Quand tout est fini, nous fermons le navigateur et nous affichons les logs dans la console
  afterEach(async () => {
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
