import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSpaceshipComponent } from './add-spaceship.component';

describe('AddSpaceshipComponent', () => {
  let component: AddSpaceshipComponent;
  let fixture: ComponentFixture<AddSpaceshipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSpaceshipComponent ]
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
