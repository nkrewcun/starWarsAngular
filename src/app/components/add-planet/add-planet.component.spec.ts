import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPlanetComponent } from './add-planet.component';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {ToastrModule, ToastrService} from 'ngx-toastr';
import {FormsModule} from '@angular/forms';

describe('AddPlanetComponent', () => {
  let component: AddPlanetComponent;
  let fixture: ComponentFixture<AddPlanetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPlanetComponent ],
      imports: [ RouterTestingModule, HttpClientTestingModule, ToastrModule.forRoot(), FormsModule ],
      providers: [ ToastrService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPlanetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
