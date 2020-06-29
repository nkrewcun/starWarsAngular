import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditPlanetComponent } from './edit-planet.component';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {ToastrModule} from 'ngx-toastr';
import {FormsModule} from '@angular/forms';

describe('EditPlanetComponent', () => {
  let component: EditPlanetComponent;
  let fixture: ComponentFixture<EditPlanetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditPlanetComponent ],
      imports: [ RouterTestingModule, HttpClientTestingModule, ToastrModule.forRoot(), FormsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditPlanetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
