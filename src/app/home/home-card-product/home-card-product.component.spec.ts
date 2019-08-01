import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeCardProductComponent } from './home-card-product.component';

describe('HomeCardProductComponent', () => {
  let component: HomeCardProductComponent;
  let fixture: ComponentFixture<HomeCardProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeCardProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeCardProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
