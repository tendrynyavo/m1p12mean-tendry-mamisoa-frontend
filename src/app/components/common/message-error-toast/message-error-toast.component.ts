import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'message-error-toast',
  imports: [CommonModule],
  templateUrl: './message-error-toast.component.html',
  styleUrl: './message-error-toast.component.scss'
})
export class MessageErrorToastComponent {
  @Input() message: string = 'Hello, world! This is an error toast message.';
  @Input() show: boolean = false;

  closeToast() {
    this.show = false;
  }
}
