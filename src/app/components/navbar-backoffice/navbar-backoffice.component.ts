import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'Navbar-backoffice',
  imports: [CommonModule],
  templateUrl: './navbar-backoffice.component.html',
  styleUrl: './navbar-backoffice.component.scss'
})
export class NavbarBackofficeComponent {
  isLoggedIn: boolean = false;

  constructor() { }
  
  ngOnInit(): void {
    this.checkLoginStatus(); // Check login status on initialization
  }

  ngOnChanges(): void {
    this.checkLoginStatus(); // Check login status on changes
  }

  checkLoginStatus() {
    const token = localStorage.getItem('token'); // Assuming token is stored in localStorage
    this.isLoggedIn = !!token; // Convert to boolean
    return;
  }
}
