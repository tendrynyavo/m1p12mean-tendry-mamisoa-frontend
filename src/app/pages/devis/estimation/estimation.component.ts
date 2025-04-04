import { Component } from '@angular/core';
import { TopBarComponent } from '../../../components/top-bar/top-bar.component';
import { NavbarComponent } from '../../../components/navbar/navbar.component';
import { FooterComponent } from '../../../components/footer/footer.component';
import { ItemPrestationComponent } from '../../../components/prestation/item.prestation.component';
import { Diagnostic } from '../../../models/diagnostic.model';

@Component({
  selector: 'app-estimation',
  imports: [TopBarComponent, NavbarComponent, FooterComponent, ItemPrestationComponent],
  templateUrl: './estimation.component.html',
  styleUrl: './estimation.component.scss'
})
export class EstimationComponent {

  diagnostic?: Diagnostic;

  ngOnInit(): void {
    this.loadPrestations();
  }

  loadPrestations(): void {
    
  }

}