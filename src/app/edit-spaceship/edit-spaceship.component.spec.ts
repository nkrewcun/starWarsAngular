import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSpaceshipComponent } from './edit-spaceship.component';

describe('EditSpaceshipComponent', () => {
  let component: EditSpaceshipComponent;
  let fixture: ComponentFixture<EditSpaceshipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditSpaceshipComponent ]
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
