import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaceshipDetailComponent } from './spaceship-detail.component';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {ToastrModule} from 'ngx-toastr';

describe('SpaceshipDetailComponent', () => {
  let component: SpaceshipDetailComponent;
  let fixture: ComponentFixture<SpaceshipDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpaceshipDetailComponent ],
      imports: [ RouterTestingModule, HttpClientTestingModule, ToastrModule.forRoot() ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpaceshipDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
