import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupPageComponent } from './setup-page.component';
import {RouterTestingModule} from '@angular/router/testing'

describe('SetupPageComponent', () => {
  let component: SetupPageComponent;
  let fixture: ComponentFixture<SetupPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
    	imports: [ RouterTestingModule.withRoutes(['/setup'])],
      declarations: [ SetupPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
