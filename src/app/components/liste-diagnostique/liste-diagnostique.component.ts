import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Diagnostic } from '../../models/diagnostic.model';

@Component({
  selector: 'Liste-diagnostique',
  imports: [CommonModule],
  templateUrl: './liste-diagnostique.component.html',
  styleUrl: './liste-diagnostique.component.scss'
})
export class ListeDiagnostiqueComponent {
  diagnostiques: Diagnostic[] = [];

  constructor() { }

  ngOnInit(): void {
    // Initialization logic can go here
  }

  showDetails(diagnostic: Diagnostic): void {
    // Logic to show details of the diagnostic
    console.log('Showing details for:', diagnostic);
  }
}
