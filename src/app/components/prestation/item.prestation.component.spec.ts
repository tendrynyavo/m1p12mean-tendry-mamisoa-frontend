import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemPrestationComponent } from './item.prestation.component';

describe('ItemPrestationComponent', () => {
  let component: ItemPrestationComponent;
  let fixture: ComponentFixture<ItemPrestationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemPrestationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemPrestationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
