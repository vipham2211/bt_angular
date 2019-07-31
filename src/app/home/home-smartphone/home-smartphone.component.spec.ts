import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSmartphoneComponent } from './home-smartphone.component';

describe('HomeSmartphoneComponent', () => {
  let component: HomeSmartphoneComponent;
  let fixture: ComponentFixture<HomeSmartphoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeSmartphoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeSmartphoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
