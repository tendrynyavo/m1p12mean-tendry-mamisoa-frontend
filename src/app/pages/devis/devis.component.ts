import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarqueService } from '../../services/marque/marque.service';
import { Marque } from '../../models/marque.model';
import { Modele } from '../../models/modele.model';
import { Motorisation } from '../../models/motorisation.model';
import { FooterComponent } from "../../components/footer/footer.component";
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { TopBarComponent } from "../../components/top-bar/top-bar.component";
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-devis',
  standalone: true,
  imports: [CommonModule, TopBarComponent, NavbarComponent, FooterComponent, FormsModule],
  templateUrl: './devis.component.html',
  styleUrl: './devis.component.scss'
})
export class DevisComponent implements OnInit {

  marques: Marque[] = [];
  modeles: Modele[] = [];
  motorisations: Motorisation[] = [];
  selectedMotorisation?: string;
  loading = false;
  error?: string;

  constructor(private marqueService: MarqueService, private router : Router) { }

  ngOnInit(): void {
    this.loadMarques();
  }

  loadMarques(): void {
    this.loading = true;
    this.error = undefined;
    
    this.marqueService.getAllMarques().subscribe({
      next: (data) => {
        this.marques = data;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Failed to load marques: ' + err.message;
        this.loading = false;
      }
    });
  }

  onMarqueSelect(e : any): void {
    const selectedMarqueId = e.target.value;
    this.modeles = this.marques.find(marque => marque._id === selectedMarqueId)?.modeles || [];
  }

  onModeleSelect(e : any): void {
    const selectedModeleId = e.target.value;
    const selectedModele = this.modeles.find(modele => modele._id === selectedModeleId);
    this.motorisations = selectedModele ? selectedModele.motorisations : [];
  }

  onMotorisationSelect(e : any): void {
    const selectedMotorisationId = e.target.value;
    const selectedMotorisation = this.motorisations.find(motorisation => motorisation._id === selectedMotorisationId);
    if (selectedMotorisation)
      this.selectedMotorisation = selectedMotorisationId;
    this.error = undefined;
  }

  onSubmit(e : any): void {
    e.preventDefault();
    console.log('Selected motorisation:', this.selectedMotorisation);
    if (this.selectedMotorisation) {
      this.router.navigate(['/prestations', this.selectedMotorisation]);
    } else {
      this.error = 'Please select a motorisation before submitting.';
      console.error('Please select a marque and modele before submitting.');
    }
  }

}