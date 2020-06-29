import {Component, OnInit} from '@angular/core';
import {Spaceship} from '../../models/spaceship';
import {SpaceshipService} from '../../services/spaceship.service';
import {LoggerService} from '../../services/logger.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-spaceships',
  templateUrl: './spaceships.component.html',
  styleUrls: ['./spaceships.component.css']
})
export class SpaceshipsComponent implements OnInit {

  spaceships: Spaceship[];
  isLoading: boolean;

  constructor(private spaceshipService: SpaceshipService, private loggerService: LoggerService, private toastr: ToastrService) {

  }

  ngOnInit(): void {
    this.isLoading = true;
    this.spaceshipService.getAllSpaceships().subscribe((data: Spaceship[]) => {
      this.spaceships = data;
      this.isLoading = false;
    });
    this.loggerService.log();
  }

  deleteSpaceship(id: number) {
    this.isLoading = true;
    const deleteSpaceshipName = this.spaceships.find(spaceship => spaceship.id === id).model;
    this.spaceshipService.removeById(id).subscribe(then => {
      this.spaceshipService.getAllSpaceships().subscribe((data: Spaceship[]) => {
        this.spaceships = data;
        this.isLoading = false;
      });
    });
    this.toastr.error('Votre vaisseau a bien été supprimé', 'Succès !', {positionClass: 'toast-top-center'});
  }
}
