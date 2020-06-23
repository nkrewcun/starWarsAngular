import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {SpaceshipsComponent} from './components/spaceships/spaceships.component';
import {PlanetsComponent} from './components/planets/planets.component';
import {PlanetDetailComponent} from './components/planet-detail/planet-detail.component';
import {SpaceshipDetailComponent} from './components/spaceship-detail/spaceship-detail.component';
import {NotFoundComponent} from './components/not-found/not-found.component';
import {AddPlanetComponent} from './components/add-planet/add-planet.component';
import {AddSpaceshipComponent} from './components/add-spaceship/add-spaceship.component';
import {EditPlanetComponent} from './edit-planet/edit-planet.component';
import {EditSpaceshipComponent} from './edit-spaceship/edit-spaceship.component';


const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'planets', component: PlanetsComponent},
  {path: 'planets/add', component: AddPlanetComponent},
  {path: 'planets/:id', component: PlanetDetailComponent},
  {path: 'planets/edit/:id', component: EditPlanetComponent},
  {path: 'spaceships', component: SpaceshipsComponent},
  {path: 'spaceships/add', component: AddSpaceshipComponent},
  {path: 'spaceships/:id', component: SpaceshipDetailComponent},
  {path: 'spaceships/edit/:id', component: EditSpaceshipComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
