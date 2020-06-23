import {Injectable} from '@angular/core';
import {Planet} from '../models/planet';

@Injectable({
  providedIn: 'root'
})
export class PlanetService {
  planets = [
    new Planet(1, 'Alderaan', 'Mondes du Noyau', 2000000000, 12742, 'Alderaan, parfois appelée Aldorande ou Aldérande, était une planète située au centre de la galaxie, non loin de Coruscant, dans les Mondes du Noyau. C\'était une planète d\'où venaient beaucoup de personnes célèbres dans la galaxie comme Leia Organa et Bail Organa. Elle avait une renommée galactique pour la beauté préservée de ses paysages. Pour démontrer la puissance de son arme destructrice, le Grand Moff Wilhuff Tarkin prit la planète pacifique et sans défense pour cible de l\'Étoile de la Mort juste avant la bataille de Yavin. La destruction d\'Alderaan fut appelé le Désastre.', 'alderaan.jpg'),
    new Planet(2, 'Coruscant', 'Mondes du Noyau', 998374000000, 12240, 'Coruscant était une planète située près du centre de la Galaxie, en bordure du Noyau. Surnommée le Pivot ou encore le Joyau des Mondes du Noyau, elle est la capitale de la République Galactique, puis de l\'Empire Galactique et enfin de la Nouvelle République après la chute de l\'Empire. Probablement le berceau de l\'humanité, ce monde a de tout temps été le centre névralgique de la galaxie. Elle se trouve aux coordonnées 0-0-0 dans le repère spatial galactique, à l\'intersection des plus grandes routes commerciales. Elle est le centre cartographique de la galaxie depuis 25 000 ans. Son étoile est Coruscant Prime. Sa démographie est de 68% d\'humains, 32% d\'autres espèces, sa période de révolution est de 368 jours, et sa rotation est de 24 heures.' , 'coruscant.jpg'),
    new Planet(3, 'Tatooine', 'Bordure Extérieure', 200000, 10465, 'Tatooine était un monde désertique des Territoires de la Bordure Extérieure. Des fossiles laissèrent penser aux scientifiques que Tatooine était recouverte par un océan à l\'instar de Kamino. La planète fut colonisée par des corporations minières qui pensaient que la planète était riche en minerais. Cependant, lorsqu\'elles découvrirent que ce n\'était pas le cas, ces corporations plièrent bagages et laissèrent leurs ouvriers sur la planète. Depuis, Tatooine est devenu le repaire des hors-la-loi et le fief du Hutt Jabba Desilijic Tiure. La planète est également devenue connue pour ses courses de modules comme la Classique de Boonta Eve. Les Jawa, un peuple de ferrailleur, et les Tusken, un peuple de guerriers sanguinaires, étaient des espèces originaires de la planète.',  'tatooine.jpg')
  ];

  constructor() {
  }

  getAllPlanets(): Planet[] {
    return this.planets;
  }

  getPlanetById(id: number): Planet {
    return this.planets.find(planet => planet.id === id);
  }

  addPlanet(planet: Planet) {
    this.planets.push(planet);
  }

  removeById(id: number): Planet[] {
    this.planets = this.planets.filter(planet => planet.id !== id);
    return this.planets;
  }

  edit(planetToUpdate: Planet): void {
    this.planets.filter(planet => planet === planetToUpdate)[0] = planetToUpdate;
  }
}
