import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickableCuisineComponent } from './clickable-cuisine.component';

describe('ClickableCuisineComponent', () => {
  let component: ClickableCuisineComponent;
  let fixture: ComponentFixture<ClickableCuisineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClickableCuisineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClickableCuisineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
