import { Component } from '@angular/core';
import { NavbarBackofficeComponent } from "../navbar-backoffice/navbar-backoffice.component";

@Component({
  selector: 'Home-mecanicien',
  imports: [NavbarBackofficeComponent],
  templateUrl: './home-mecanicien.component.html',
  styleUrl: './home-mecanicien.component.scss'
})
export class HomeMecanicienComponent {

  constructor() { }

  ngOnInit(): void {}
  
}
