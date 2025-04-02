import { Component } from '@angular/core';
import { Realisation } from '../../models/realisation.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'Liste-realisation',
  imports: [CommonModule],
  templateUrl: './liste-realisation.component.html',
  styleUrl: './liste-realisation.component.scss'
})
export class ListeRealisationComponent {

  realisations: Realisation[] = [];

  constructor() { }

  ngOnInit(): void {
    // Initialization logic can go here
  }

  showDetails(realisation: Realisation): void {
    // Logic to show details of the realisation
    console.log('Showing details for:', realisation);
  }
}
