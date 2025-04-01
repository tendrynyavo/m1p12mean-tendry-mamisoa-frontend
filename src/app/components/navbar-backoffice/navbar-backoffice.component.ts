import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'Navbar-backoffice',
  imports: [CommonModule],
  templateUrl: './navbar-backoffice.component.html',
  styleUrl: './navbar-backoffice.component.scss',
  providers: [CookieService],
})
export class NavbarBackofficeComponent {
  isLoggedIn: boolean = false;

  constructor(private cookieService: CookieService) { }
  
  ngOnInit(): void {
    this.checkLoginStatus(); // Check login status on initialization
  }

  ngOnChanges(): void {
    this.checkLoginStatus(); // Check login status on changes
  }

  checkLoginStatus() {
    const token = this.cookieService.get('token'); // Assuming token is stored in localStorage
    this.isLoggedIn = !!token; // Convert to boolean
    return;
  }
}
