export class Spaceship {
  id: number;
  model: string;
  length: number;
  width: number;
  height: number;
  population: number;
  hasLightspeed: boolean;
  img: string;

  // tslint:disable-next-line:max-line-length
  constructor(id: number = null, model: string = null, length: number = null, width: number = null, height: number = null, population: number = null, hasLightspeed: boolean = null, img: string = null) {
    this.id = id;
    this.model = model;
    this.length = length;
    this.width = width;
    this.height = height;
    this.population = population;
    this.hasLightspeed = hasLightspeed;
    this.img = img;
  }
}
