import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Diagnostic } from '../../models/diagnostic.model';
import { DiagnosticService } from '../../services/diagnostic/diagnostic.service';
import { MessageErrorToastComponent } from "../common/message-error-toast/message-error-toast.component";

@Component({
  selector: 'Liste-diagnostique',
  imports: [CommonModule, MessageErrorToastComponent],
  templateUrl: './liste-diagnostique.component.html',
  styleUrl: './liste-diagnostique.component.scss',
  providers: [DiagnosticService]
})
export class ListeDiagnostiqueComponent {
  @Input() diagnostiques: Diagnostic[] = [];
  currentDiagnostic: Diagnostic | null = null; // Initialize currentDiagnostic to null
  showModal: boolean = false;
  showMessageError: boolean = false;
  message: string = '';
  showUpdateStatus: boolean = true; // Flag to control the visibility of the update status button

  constructor(private diagnosticService: DiagnosticService) { }

  ngOnInit(): void {
    // Initialization logic can go here
  }

  toggleModal(): void {
    this.showModal = !this.showModal; // Toggle the modal visibility
  }

  showDetails(diagnostic: Diagnostic): void {
    this.currentDiagnostic = diagnostic;
    this.showModal = true; // Show the modal
    if(diagnostic.status < 30) {
      this.showUpdateStatus = true; // Show the update status button if status is less than 30
    }
  }


  updateStatus(diagnostic: Diagnostic| undefined): void {
    if(diagnostic === undefined) {
    return; // Handle the case where realisation is undefined
  }
    // Logic to update the status of the diagnostic
    const newStatus = diagnostic.status + 10; // Example status update
    this.diagnosticService.updateDiagnosticStatus(diagnostic._id ?? "", newStatus).subscribe(
      (response) => {
        this.currentDiagnostic = response; // Update the current diagnostic with the new status
        const index = this.diagnostiques.findIndex(r => r._id === diagnostic._id);
        if (index !== -1) {
          this.diagnostiques[index] = response; // Update the diagnostic in the list
        }
        // Optionally, you can refresh the list of realisations or update the UI accordingly
      },
      (error) => {
        this.message = 'Une erreur est survenue: ' + error.message; // Set the error message
        this.showMessageError = true;
      }
    );
  }
}
