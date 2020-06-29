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
  isLoading: boolean;

  constructor(private planetService: PlanetService, private loggerService: LoggerService, private toastr: ToastrService) {
  }

  ngOnInit(): void {
    this.isLoading = true;
    this.planetService.getAllPlanets().subscribe((data: Planet[]) => {
      this.planets = data;
      this.isLoading = false;
    });
    this.loggerService.log();
  }

  deletePlanet(id: number) {
    this.isLoading = true;
    this.planetService.removeById(id).subscribe(then => {
      this.planetService.getAllPlanets().subscribe((data: Planet[]) => {
        this.planets = data;
        this.isLoading = false;
      });
    });
    this.toastr.error('Votre planète a bien été supprimée', 'Succès !', {positionClass: 'toast-top-center'});
  }
}
