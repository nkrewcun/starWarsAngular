import {Component, OnInit} from '@angular/core';
import {Spaceship} from '../models/spaceship';
import {ActivatedRoute, Router} from '@angular/router';
import {SpaceshipService} from '../services/spaceship.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-edit-spaceship',
  templateUrl: './edit-spaceship.component.html',
  styleUrls: ['./edit-spaceship.component.css']
})
export class EditSpaceshipComponent implements OnInit {

  spaceship: Spaceship;

  // tslint:disable-next-line:max-line-length
  constructor(private route: ActivatedRoute, private spaceshipService: SpaceshipService, private router: Router, private toastr: ToastrService) {
  }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.spaceshipService.getSpaceshipById(id).subscribe((data: Spaceship) => this.spaceship = data);
  }

  editSpaceship(): void {
    this.spaceshipService.edit(this.spaceship);
    this.router.navigate(['/spaceships', this.spaceship.id]);
    this.toastr.info('Votre vaisseau a bien été modifié', 'Succès !', {positionClass: 'toast-top-center'});
  }
}
