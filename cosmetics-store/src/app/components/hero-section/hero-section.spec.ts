import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroSectionComponent } from './hero-section';

describe('HeroSectionComponent', () => {
  let component: HeroSectionComponent;
  let fixture: ComponentFixture<HeroSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HeroSectionComponent
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should have slides data', () => {
    expect(component.slides).toBeDefined();
    expect(component.slides.length).toBeGreaterThan(0);
  });

  it('should have highlights data', () => {
    expect(component.highlights).toBeDefined();
    expect(component.highlights.length).toBeGreaterThan(0);
  });

  it('should have banners data', () => {
    expect(component.banners).toBeDefined();
    expect(component.banners.length).toBeGreaterThan(0);
  });

  it('should return correct text position class', () => {
    expect(component.getTextPositionClass('center')).toBe('text-center');
    expect(component.getTextPositionClass('left')).toBe('text-left');
    expect(component.getTextPositionClass('right')).toBe('text-right');
  });
});
