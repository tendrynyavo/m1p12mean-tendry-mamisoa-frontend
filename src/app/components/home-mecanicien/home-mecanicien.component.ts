import { Component, Inject } from '@angular/core';
import { NavbarBackofficeComponent } from "../navbar-backoffice/navbar-backoffice.component";
import { LoginService } from '../../services/login/login.service';
import { User } from '../../models/user';
import { CookieService } from 'ngx-cookie-service';
import { DOCUMENT } from '@angular/common';
import { Realisation } from '../../models/realisation.model';
import { Diagnostic } from '../../models/diagnostic.model';
import { DiagnosticService } from '../../services/diagnostic/diagnostic.service';
import { RealisationService } from '../../services/realisation/realisation.service';

@Component({
  selector: 'Home-mecanicien',
  imports: [NavbarBackofficeComponent],
  templateUrl: './home-mecanicien.component.html',
  styleUrl: './home-mecanicien.component.scss',
  providers: [LoginService, CookieService],
})
export class HomeMecanicienComponent {

  user: User;
  realisation: Realisation[] = []; // Initialize realization as an empty array
  diagnostic: Diagnostic[] = []; // Initialize diagnostic as an empty array

  constructor(
    private loginService: LoginService, 
    private cookieService: CookieService,
    private diagnosticService: DiagnosticService,
    private realisationService: RealisationService,
    @Inject(DOCUMENT) private document: Document // Inject DOCUMENT
  ) {
    this.user = new User();
  }

  ngOnInit(): void {
    this.checkIfLogged(); // Check login status on initialization
    this.getUserDetails(); // Fetch user details on initialization
  }

  ngOnChange(): void {
    this.checkIfLogged(); // Check login status on changes
    this.getUserDetails(); // Fetch user details on changes
  }

  checkIfLogged() {
    const token = this.cookieService.get('token'); // Assuming token is stored in localStorage
    const status = token ? true : false; // Convert to boolean
    if (!status) {
      this.document.location.href = '/login-mecanicien';
    }
    return;
  }

  getUserDetails(): void {
    const token = this.cookieService.get('token') ?? ''; // Assuming token is stored in localStorage
    const dataToSend = {
      token: token,
    };
    this.loginService.getUserDetails(dataToSend).subscribe((response) => {
      this.user = response.Data;
      console.log(this.user); // Log user details to console
    });
  }

  getRealisationAndDiagnostic(): void {
    this.realisationService.getRealisationByMecanicien(this.user._id).subscribe((response) => {
      this.realisation = response as Realisation[];
    });
  }
}
