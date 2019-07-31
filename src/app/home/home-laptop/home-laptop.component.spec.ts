import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeLaptopComponent } from './home-laptop.component';

describe('HomeLaptopComponent', () => {
  let component: HomeLaptopComponent;
  let fixture: ComponentFixture<HomeLaptopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeLaptopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeLaptopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
