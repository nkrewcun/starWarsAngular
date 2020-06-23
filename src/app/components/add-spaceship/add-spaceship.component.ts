import { Component, OnInit } from '@angular/core';
import {Spaceship} from '../../models/spaceship';
import {SpaceshipService} from '../../services/spaceship.service';
import {Router} from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-spaceship',
  templateUrl: './add-spaceship.component.html',
  styleUrls: ['./add-spaceship.component.css']
})
export class AddSpaceshipComponent implements OnInit {
  spaceship: Spaceship = new Spaceship();

  constructor(private spaceshipService: SpaceshipService, private router: Router, private toastr: ToastrService ) { }

  ngOnInit(): void {
  }

  submitSpaceship() {
    this.spaceshipService.addSpaceship(this.spaceship);
    this.router.navigate(['/spaceships']);
    this.showSuccess();
  }

  showSuccess() {
    this.toastr.success('Votre vaisseau a bien été ajouté', 'Succès !', {positionClass: 'toast-top-center'});
  }
}
