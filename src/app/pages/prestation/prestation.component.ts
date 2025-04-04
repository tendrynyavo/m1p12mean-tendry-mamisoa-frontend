import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from "../../components/footer/footer.component";
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { TopBarComponent } from "../../components/top-bar/top-bar.component";
import { ItemPrestationComponent } from "../../components/prestation/item.prestation.component";
import { BesoinService } from '../../services/besoin/besoin.service';
import { Prestation } from '../../models/besoin.model';
import { Diagnostic } from '../../models/diagnostic.model';
import { DiagnosticService } from '../../services/diagnostic/diagnostic.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-prestation',
  imports: [CommonModule, TopBarComponent, NavbarComponent, FooterComponent, ItemPrestationComponent],
  templateUrl: './prestation.component.html',
  styleUrl: './prestation.component.scss'
})
export class PrestationComponent implements OnInit {

  prestations : Prestation[] = [];
  selectedPrestations: Prestation[] = [];
  motorisationId: string = '';

  constructor(
    private route: ActivatedRoute,
    private besoinService: BesoinService, 
    private diagnosticService: DiagnosticService, 
    private router: Router
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.motorisationId = params['motorisationId'];
      this.loadPrestations();
    });
  }

  loadPrestations(): void {
    this.besoinService.getBesoinByMotorisationId(this.motorisationId).subscribe({
      next: (data) => {
        console.log(data);
        this.prestations = data;
      },
      error: (err) => {
        console.error('Error fetching besoins:', err);
      }
    });
  }

  onItemClickAjouter(id : string): void {
    const index = this.prestations.findIndex(prestation => prestation._id == id);
    const prestation = this.prestations.find(prestation => prestation._id == id);
    if (index !== -1) {
      this.selectedPrestations.push(prestation!);
      this.prestations.splice(index, 1);
      this.prestations.sort((a, b) => a.nom.localeCompare(b.nom));
    }
  }

  onItemClickRetirer(id : string): void {
    const index = this.selectedPrestations.findIndex(prestation => prestation._id == id);
    const prestation = this.selectedPrestations.find(prestation => prestation._id == id);
    if (index !== -1) {
      this.prestations.push(prestation!);
      this.selectedPrestations.splice(index, 1);
      this.prestations.sort((a, b) => a.nom.localeCompare(b.nom));
    }
  }

  onSubmit(): void {
    const diagnostic : Diagnostic = {
      dateDebut: new Date(),
      dateFin: undefined,
      reference: '123456',
      status: 0,
      mecanicien: '67dd506667a6ee4123d69234',
      prestations: this.selectedPrestations,
    };
    this.diagnosticService.createDiagnostic(diagnostic).subscribe({
      next: (data) => {
        this.router.navigate(['/estimations', data._id]);
      },
      error: (err) => {
        console.error('Error creating diagnostic:', err);
      }
    });
  }

}