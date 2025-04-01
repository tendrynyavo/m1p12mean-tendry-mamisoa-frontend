import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from "../../components/footer/footer.component";
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { TopBarComponent } from "../../components/top-bar/top-bar.component";
import { ItemPrestationComponent } from "../../components/prestation/item.prestation.component";

@Component({
  selector: 'app-prestation',
  imports: [CommonModule, TopBarComponent, NavbarComponent, FooterComponent, ItemPrestationComponent],
  templateUrl: './prestation.component.html',
  styleUrl: './prestation.component.scss'
})
export class PrestationComponent {

  prestations = [
    { nom: 'Prestation 1', details: 'Details of Prestation 1', validation: 'Validation 1' },
    { nom: 'Prestation 2', details: 'Details of Prestation 2', validation: 'Validation 2' },
    { nom: 'Prestation 3', details: 'Details of Prestation 3', validation: 'Validation 3' },
    { nom: 'Prestation 4', details: 'Details of Prestation 4', validation: 'Validation 4' },
    { nom: 'Prestation 5', details: 'Details of Prestation 5', validation: 'Validation 5' }
  ];

}