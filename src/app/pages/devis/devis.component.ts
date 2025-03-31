import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarqueService } from '../../services/marque/marque.service';
import { Marque } from '../../models/marque.model';
import { Modele } from '../../models/modele.model';
import { Motorisation } from '../../models/motorisation.model';

@Component({
  selector: 'app-devis',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './devis.component.html',
  styleUrl: './devis.component.scss'
})
export class DevisComponent implements OnInit {

  marques: Marque[] = [];
  modeles: Modele[] = [];
  motorisations: Motorisation[] = [];
  selectedMarque?: string;
  loading = false;
  error?: string;

  constructor(private marqueService: MarqueService) { }

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
    this.selectedMarque = e.target.value;
    this.modeles = this.marques.find(marque => marque._id === this.selectedMarque)?.modeles || [];
  }

  onModeleSelect(e : any): void {
    const selectedModeleId = e.target.value;
    const selectedModele = this.modeles.find(modele => modele._id === selectedModeleId);
    console.log(selectedModele);
    this.motorisations = selectedModele ? selectedModele.motorisations : [];
  }

}
