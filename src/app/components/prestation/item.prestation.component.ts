import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-item-prestation',
  imports: [],
  templateUrl: './item.prestation.component.html',
  styleUrl: './item.prestation.component.scss'
})
export class ItemPrestationComponent {

  @Input() id: string = '';
  @Input() nom: string = '';
  @Input() details: string = '';
  @Input() buttonLabel: string = 'Valider la prestation';
  @Output() itemEvent = new EventEmitter<string>();

  constructor() { }

  onButtonClick(value : string): void {
    this.itemEvent.emit(value);
  }

}
