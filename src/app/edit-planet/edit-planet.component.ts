import {Component, OnInit} from '@angular/core';
import {Planet} from '../models/planet';
import {ActivatedRoute, Router} from '@angular/router';
import {PlanetService} from '../services/planet.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-edit-planet',
  templateUrl: './edit-planet.component.html',
  styleUrls: ['./edit-planet.component.css']
})
export class EditPlanetComponent implements OnInit {

  planet: Planet;

  constructor(private route: ActivatedRoute, private planetService: PlanetService, private router: Router, private toastr: ToastrService) {
  }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.planetService.getPlanetById(id).subscribe((data: Planet) => this.planet = data);
  }

  editPlanet(): void {
    this.planetService.edit(this.planet);
    this.router.navigate(['/planets', this.planet.id]);
    this.toastr.info('Votre planète a bien été modifiée', 'Succès !', {positionClass: 'toast-top-center'});
  }
}
