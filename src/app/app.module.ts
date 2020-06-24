import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import { CommonModule } from '@angular/common';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MenuComponent} from './components/menu/menu.component';
import {SpaceshipsComponent} from './components/spaceships/spaceships.component';
import {PlanetsComponent} from './components/planets/planets.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HomeComponent} from './components/home/home.component';
import {PlanetDetailComponent} from './components/planet-detail/planet-detail.component';
import {SpaceshipDetailComponent} from './components/spaceship-detail/spaceship-detail.component';
import {NotFoundComponent} from './components/not-found/not-found.component';
import {AddPlanetComponent} from './components/add-planet/add-planet.component';
import {AddSpaceshipComponent} from './components/add-spaceship/add-spaceship.component';
import {FormsModule} from '@angular/forms';

import { ToastrModule } from 'ngx-toastr';
import { InitialsPipe } from './pipes/initials.pipe';
import { EditPlanetComponent } from './edit-planet/edit-planet.component';
import { EditSpaceshipComponent } from './edit-spaceship/edit-spaceship.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    SpaceshipsComponent,
    PlanetsComponent,
    HomeComponent,
    PlanetDetailComponent,
    SpaceshipDetailComponent,
    NotFoundComponent,
    AddPlanetComponent,
    AddSpaceshipComponent,
    InitialsPipe,
    EditPlanetComponent,
    EditSpaceshipComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ToastrModule.forRoot(),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
