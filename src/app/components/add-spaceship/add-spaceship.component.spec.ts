import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSpaceshipComponent } from './add-spaceship.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {ToastrModule, ToastrService} from 'ngx-toastr';
import {FormsModule} from '@angular/forms';

describe('AddSpaceshipComponent', () => {
  let component: AddSpaceshipComponent;
  let fixture: ComponentFixture<AddSpaceshipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSpaceshipComponent ],
      imports: [ HttpClientTestingModule, RouterTestingModule, ToastrModule.forRoot(), FormsModule ],
      providers: [ToastrService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSpaceshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
