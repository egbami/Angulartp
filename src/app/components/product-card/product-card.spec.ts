import { ComponentFixture, TestBed } from '@angular/core/testing';

import { productcard } from './product-card';

describe('Productcard', () => {
  let component: productcard;
  let fixture: ComponentFixture<productcard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [productcard]
    })
      .compileComponents();

    fixture = TestBed.createComponent(productcard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
