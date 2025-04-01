import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeDiagnostiqueComponent } from './liste-diagnostique.component';

describe('ListeDiagnostiqueComponent', () => {
  let component: ListeDiagnostiqueComponent;
  let fixture: ComponentFixture<ListeDiagnostiqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListeDiagnostiqueComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeDiagnostiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
