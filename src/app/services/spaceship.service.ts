import {Injectable} from '@angular/core';
import {Spaceship} from '../models/spaceship';

@Injectable({
  providedIn: 'root'
})
export class SpaceshipService {

  spaceships = [
    new Spaceship(1, 'X-Wing', 12.5, 11.4, 2.3, 1, true, 'xwing.jpg'),
    new Spaceship(2, 'Millenium Falcon', 34.75, 20, 7.8, 10, true, 'falcon.jpg'),
    new Spaceship(3, 'Star Destroyer', 1600, 600, 220, 37000, true, 'stardestroyer.jpg')
  ];

  constructor() {
  }

  getAllSpaceships(): Spaceship[] {
    return this.spaceships;
  }

  getSpaceshipById(id: number): Spaceship {
    return this.spaceships.find(spaceship => spaceship.id === id);
  }

  addSpaceship(spaceship: Spaceship) {
    this.spaceships.push(spaceship);
  }

  removeById(id: number): Spaceship[] {
    this.spaceships = this.spaceships.filter(spaceship => spaceship.id !== id);
    return this.spaceships;
  }

  edit(spaceshipToUpdate: Spaceship): void {
    this.spaceships.filter(spaceship => spaceship === spaceshipToUpdate)[0] = spaceshipToUpdate;
  }
}
