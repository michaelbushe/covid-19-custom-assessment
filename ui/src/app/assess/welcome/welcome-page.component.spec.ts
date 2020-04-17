import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { WelcomePageComponent } from './welcome-page.component'
import {RouterTestingModule} from '@angular/router/testing'

describe('WelcomePageComponent', () => {
  let component: WelcomePageComponent
  let fixture: ComponentFixture<WelcomePageComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [        RouterTestingModule.withRoutes(['/welcome'])],
      declarations: [ WelcomePageComponent ]
    })
    .compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomePageComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
