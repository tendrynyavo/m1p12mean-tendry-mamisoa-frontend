import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'message-toast',
  imports: [CommonModule],
  templateUrl: './message-toast.component.html',
  styleUrl: './message-toast.component.scss'
})
export class MessageToastComponent {
  @Input() message: string = 'Hello, world! This is a toast message.';
  @Input() show: boolean = false;

  closeToast() {
    this.show = false;
  }
}
