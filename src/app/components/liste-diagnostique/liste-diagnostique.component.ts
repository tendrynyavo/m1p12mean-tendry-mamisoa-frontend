import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-liste-diagnostique',
  imports: [CommonModule],
  templateUrl: './liste-diagnostique.component.html',
  styleUrl: './liste-diagnostique.component.scss'
})
export class ListeDiagnostiqueComponent {
  diagnostiques: any[] = [
    { id: 1, name: 'Diagnostic 1', description: 'Description 1' },
    { id: 2, name: 'Diagnostic 2', description: 'Description 2' },
  ];
}
