import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSpaceshipComponent } from './edit-spaceship.component';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {FormsModule} from '@angular/forms';
import {ToastrModule} from 'ngx-toastr';

describe('EditSpaceshipComponent', () => {
  let component: EditSpaceshipComponent;
  let fixture: ComponentFixture<EditSpaceshipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditSpaceshipComponent ],
      imports: [ RouterTestingModule, HttpClientTestingModule, FormsModule, ToastrModule.forRoot()]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSpaceshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
