import { Component } from '@angular/core';
import { TopBarComponent } from "../top-bar/top-bar.component";
import { NavbarComponent } from "../navbar/navbar.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'App-filtre-vehicule',
  imports: [TopBarComponent, NavbarComponent, FooterComponent],
  templateUrl: './filtre-vehicule.component.html',
  styleUrl: './filtre-vehicule.component.scss'
})
export class FiltreVehiculeComponent {

}
