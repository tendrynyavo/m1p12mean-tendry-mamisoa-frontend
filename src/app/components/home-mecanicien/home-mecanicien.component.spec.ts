import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeMecanicienComponent } from './home-mecanicien.component';

describe('HomeMecanicienComponent', () => {
  let component: HomeMecanicienComponent;
  let fixture: ComponentFixture<HomeMecanicienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeMecanicienComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeMecanicienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
