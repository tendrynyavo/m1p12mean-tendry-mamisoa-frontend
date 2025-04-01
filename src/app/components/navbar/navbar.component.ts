import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CookieService } from 'ngx-cookie-service';

@Component({
  standalone: true,
  selector: 'Navbar',
  imports: [CommonModule, FormsModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
  providers: [CookieService]
})
export class NavbarComponent implements OnInit {
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