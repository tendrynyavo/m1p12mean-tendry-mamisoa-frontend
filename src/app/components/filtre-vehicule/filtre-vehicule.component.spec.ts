import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltreVehiculeComponent } from './filtre-vehicule.component';

describe('FiltreVehiculeComponent', () => {
  let component: FiltreVehiculeComponent;
  let fixture: ComponentFixture<FiltreVehiculeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FiltreVehiculeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FiltreVehiculeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
