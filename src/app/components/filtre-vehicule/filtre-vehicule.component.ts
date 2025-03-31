import { Component } from '@angular/core';
import { TopBarComponent } from "../top-bar/top-bar.component";
import { NavbarComponent } from "../navbar/navbar.component";
import { FooterComponent } from "../footer/footer.component";
import { Marque, Modele, VehiculeDetailsFilter } from '../../models/vehicule-details';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'App-filtre-vehicule',
  imports: [TopBarComponent, NavbarComponent, FooterComponent, CommonModule, FormsModule],
  templateUrl: './filtre-vehicule.component.html',
  styleUrl: './filtre-vehicule.component.scss'
})
export class FiltreVehiculeComponent {
  modeleOptionDisabled: boolean = true;
  Marques: Marque[] = [
    {
      _id: '613f1a73a4d8b3a74d3b6e01',
      nom: 'Renault',
      modeles: [
        {
          _id: '613f1a73a4d8b3a74d3b6e02',
          nom: 'Clio IV',
          annee: 2012,
          motorisation: [
            { _id: '613f1a73a4d8b3a74d3b6e03', nom: '1.5 dCi 90', type: 'Essence' },
            { _id: '613f1a73a4d8b3a74d3b6e04', nom: '1.2 TCe 120', type: 'Essence' }
          ]
        },
        {
          _id: '613f1a73a4d8b3a74d3b6e05',
          nom: 'Mégane',
          annee: 2016,
          motorisation: [
            { _id: '613f1a73a4d8b3a74d3b6e06', nom: '1.5 dCi 90', type: 'Essence' },
            { _id: '613f1a73a4d8b3a74d3b6e07', nom: '1.2 TCe 120', type: 'Electrique' }
          ]
        }
      ]
    },
    {
      _id: '613f1a73a4d8b3a74d3b6e08',
      nom: 'Peugeot',
      modeles: [
        {
          _id: '613f1a73a4d8b3a74d3b6e09',
          nom: '208',
          annee: 2012,
          motorisation: [
            { _id: '613f1a73a4d8b3a74d3b6e0a', nom: '1.5 BlueHDi 100', type: 'Essence' },
            { _id: '613f1a73a4d8b3a74d3b6e0b', nom: '1.2 PureTech 82', type: 'Essence' }
          ]
        },
        {
          _id: '613f1a73a4d8b3a74d3b6e0c',
          nom: '308',
          annee: 2013,
          motorisation: [
            { _id: '613f1a73a4d8b3a74d3b6e0d', nom: '1.5 BlueHDi 100', type: 'Diesel' },
            { _id: '613f1a73a4d8b3a74d3b6e0e', nom: '1.2 PureTech 82', type: 'Diesel' }
          ]
        }
      ]
    }
  ];

  MarqueSelected: Marque = this.Marques[0];
  ModeleSelected: Modele = this.MarqueSelected.modeles[0];
  filtre: VehiculeDetailsFilter = {
    marque: this.Marques.length > 0 ? this.Marques[0] : {
      _id: '613f1a73a4d8b3a74d3b6e01',
      nom: 'Renault',
      modeles: [
        {
          _id: '613f1a73a4d8b3a74d3b6e02',
          nom: 'Clio IV',
          annee: 2012,
          motorisation: [
            { _id: '613f1a73a4d8b3a74d3b6e03', nom: '1.5 dCi 90', type: 'Essence' },
            { _id: '613f1a73a4d8b3a74d3b6e04', nom: '1.2 TCe 120', type: 'Essence' }
          ]
        },
        {
          _id: '613f1a73a4d8b3a74d3b6e05',
          nom: 'Mégane',
          annee: 2016,
          motorisation: [
            { _id: '613f1a73a4d8b3a74d3b6e06', nom: '1.5 dCi 90', type: 'Essence' },
            { _id: '613f1a73a4d8b3a74d3b6e07', nom: '1.2 TCe 120', type: 'Electrique' }
          ]
        }
      ]
    },
    annee: 2025,
    consommation: 0
  }; 
  constructor() { }

  ngOnInit(): void {}

  onMarqueChange(marque: Marque) {
    console.log('Marque sélectionnée:', marque);
    this.MarqueSelected = marque;
    this.modeleOptionDisabled = false;
  }
  onModeleChange(modele: Modele) {
    this.ModeleSelected = modele;
  }
  addFiltre() {
    console.log('Filtre ajouté:', this.filtre);
  }
}
