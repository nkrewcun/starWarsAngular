import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpaceshipsComponent } from './spaceships.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {ToastrModule} from 'ngx-toastr';

describe('SpaceshipsComponent', () => {
  let component: SpaceshipsComponent;
  let fixture: ComponentFixture<SpaceshipsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpaceshipsComponent ],
      imports: [ HttpClientTestingModule, ToastrModule.forRoot() ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpaceshipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
