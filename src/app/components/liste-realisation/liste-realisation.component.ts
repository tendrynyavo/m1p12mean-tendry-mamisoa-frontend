import { Component, Input } from '@angular/core';
import { Realisation } from '../../models/realisation.model';
import { CommonModule } from '@angular/common';
import { RealisationService } from '../../services/realisation/realisation.service';
import { MessageErrorToastComponent } from "../common/message-error-toast/message-error-toast.component";

@Component({
  selector: 'Liste-realisation',
  imports: [CommonModule, MessageErrorToastComponent],
  templateUrl: './liste-realisation.component.html',
  styleUrl: './liste-realisation.component.scss',
  providers: [RealisationService]
})
export class ListeRealisationComponent {
  @Input() realisations: Realisation[] = [];
  currentRealisation: Realisation | null = null; // Initialize currentRealisation to null
  showModal: boolean = false;
  showMessageError: boolean = false;
  message: string = '';
  showUpdateStatus: boolean = true; // Flag to control the visibility of the update status button

  constructor(private realisationService: RealisationService) { }

  ngOnInit(): void {
    // Initialization logic can go here
  }

  toggleModal(): void {
    this.showModal = !this.showModal; // Toggle the modal visibility
  }

  showDetails(realisation: Realisation): void {
    // Logic to show details of the realisation
    this.currentRealisation = realisation;
    this.showModal = true;
    if(realisation.status < 30) {
      this.showUpdateStatus = true; // Show the update status button if status is less than 30
    }
  }

  updateStatus(realisation: Realisation | undefined): void {
    if(realisation === undefined) {
      return; // Handle the case where realisation is undefined
    }
    // Logic to update the status of the realisation
    realisation.status = realisation.status ?? 0 + 10; // Example status update
    this.realisationService.updateRealisation(realisation.id, realisation).subscribe(
      (response: Realisation) => {
        this.currentRealisation = response; // Update the current realisation with the new status
        const index = this.realisations.findIndex(r => r.id === realisation.id);
        if (index !== -1) {
          this.realisations[index] = response; // Update the realisation in the list
        }
        // Optionally, you can refresh the list of realisations or update the UI accordingly
      },
      (error: any) => {
        this.message = 'Une erreur est survenue: ' + error.message; // Set the error message
        this.showMessageError = true;
      }
    );
  }
}
