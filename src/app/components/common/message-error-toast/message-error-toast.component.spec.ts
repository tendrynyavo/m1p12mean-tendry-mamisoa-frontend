import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageErrorToastComponent } from './message-error-toast.component';

describe('MessageErrorToastComponent', () => {
  let component: MessageErrorToastComponent;
  let fixture: ComponentFixture<MessageErrorToastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MessageErrorToastComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MessageErrorToastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
