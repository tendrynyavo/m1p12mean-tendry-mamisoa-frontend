import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LoginService } from '../../services/login.service';
import { User } from '../../models/user';

@Component({
  standalone: true,
  selector: 'Login',
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  user: User;

  constructor(private loginService: LoginService) {
    this.user = new User();
  }

  ngOnInit(): void { }


  login(): void {
    if (this.user.email && this.user.password) {
      this.loginService.login(this.user).subscribe((response) => {
        if (response.Success) {
          console.log('Login successful:', response);
        } else {
          console.log('Login failed');
        }
      });
    }
  }

}