export class Planet {
  id: number;
  name: string;
  location: string;
  population: number;
  diameter: number;
  description: string;
  img: string;

  // tslint:disable-next-line:max-line-length
  constructor(id: number = null, name: string = null, location: string = null, population: number = null, diameter: number = null, description: string = null, img: string = null) {
    this.id = id;
    this.name = name;
    this.location = location;
    this.population = population;
    this.diameter = diameter;
    this.description = description;
    this.img = img;
  }
}
