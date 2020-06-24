import {Component, OnInit} from '@angular/core';
import {Planet} from '../../models/planet';
import {PlanetService} from '../../services/planet.service';
import {LoggerService} from '../../services/logger.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.css']
})
export class PlanetsComponent implements OnInit {

  planets: Planet[];

  constructor(private planetService: PlanetService, private loggerService: LoggerService, private toastr: ToastrService) {
  }

  ngOnInit(): void {
    this.planetService.getAllPlanets().subscribe((data: Planet[]) => this.planets = data);
    this.loggerService.log();
  }

  deletePlanet(id: number) {
    this.planets = this.planetService.removeById(id);
    this.toastr.error('Votre planète a bien été supprimée', 'Succès !', {positionClass: 'toast-top-center'});
  }
}
