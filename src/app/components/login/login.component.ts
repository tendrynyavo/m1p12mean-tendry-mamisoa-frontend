import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LoginService } from '../../services/login.service';
import { User } from '../../models/user';
import { MessageToastComponent } from "../common/message-toast/message-toast.component";
import { MessageErrorToastComponent } from "../common/message-error-toast/message-error-toast.component";

@Component({
  standalone: true,
  selector: 'Login',
  imports: [CommonModule, FormsModule, MessageToastComponent, MessageErrorToastComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  user: User;
  confirmPassword: string = "";
  message: string = "";
  showMessage: boolean = false;
  showMessageError: boolean = false;
  showLogin: boolean = true;
  showRegister: boolean = false;

  constructor(private loginService: LoginService) {
    this.user = new User();
  }

  ngOnInit(): void { }

  toggleLogin() {
    this.showLogin = !this.showLogin;
    this.showRegister = false;
  }

  toggleRegister() {
    this.showRegister = !this.showRegister;
    this.showLogin = false;
  }

  register() {
    if (this.user.password !== this.confirmPassword) {
      console.log('Register:', this.user);
    }
    this.showMessageError = true;
    this.message = 'Les mots de passe ne correspondent pas';
  }

  login(): void {
    this.showMessage = true;
    if (this.user.email && this.user.password) {
      this.loginService.login(this.user).subscribe((response) => {
        if (response.Success) {
          this.message = 'Connecté avec succès';
          console.log('Login successful:', response);
        } else {
          console.log('Login failed');
        }
      });
    }
  }

}