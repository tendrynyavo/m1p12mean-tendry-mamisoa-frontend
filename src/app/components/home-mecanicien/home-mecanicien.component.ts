import { Component } from '@angular/core';
import { NavbarBackofficeComponent } from "../navbar-backoffice/navbar-backoffice.component";
import { LoginService } from '../../services/login/login.service';
import { User } from '../../models/user';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'Home-mecanicien',
  imports: [NavbarBackofficeComponent],
  templateUrl: './home-mecanicien.component.html',
  styleUrl: './home-mecanicien.component.scss',
  providers: [LoginService, CookieService],
})
export class HomeMecanicienComponent {

  user: User;
  constructor(private loginService: LoginService, private cookieService: CookieService) {
    this.user = new User();
  }

  ngOnInit(): void {
    const token = this.cookieService.get('token') ?? ''; // Assuming token is stored in localStorage
    this.loginService.getUserDetails(token).subscribe((response) => {
      this.user = response.Data;
    });
  }

  ngOnChange(): void {
    const token = this.cookieService.get('token') ?? ''; // Assuming token is stored in localStorage
    this.loginService.getUserDetails(token).subscribe((response) => {
      this.user = response.Data;
    });
  }
}
