import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {SpaceshipService} from '../../services/spaceship.service';
import {Spaceship} from '../../models/spaceship';

@Component({
  selector: 'app-spaceship-detail',
  templateUrl: './spaceship-detail.component.html',
  styleUrls: ['./spaceship-detail.component.css']
})
export class SpaceshipDetailComponent implements OnInit {
  id: number;
  spaceship: Spaceship;

  constructor(private route: ActivatedRoute, private spaceshipService: SpaceshipService) {
  }

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.spaceshipService.getSpaceshipById(this.id).subscribe((data: Spaceship) => this.spaceship = data);
  }

}
