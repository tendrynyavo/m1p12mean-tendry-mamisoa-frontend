import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LoginService } from '../../services/login/login.service';
import { User } from '../../models/user';
import { MessageToastComponent } from "../common/message-toast/message-toast.component";
import { MessageErrorToastComponent } from "../common/message-error-toast/message-error-toast.component";
import { UsersService } from '../../users/users.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  standalone: true,
  selector: 'Login',
  imports: [CommonModule, FormsModule, MessageToastComponent, MessageErrorToastComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  providers: [LoginService, UsersService, CookieService],
})
export class LoginComponent implements OnInit {
  user: User;
  confirmPassword: string = "";
  message: string = "";
  showMessage: boolean = false;
  showMessageError: boolean = false;
  showLogin: boolean = true;
  showRegister: boolean = false;

  constructor(private loginService: LoginService, private userService: UsersService, private cookieService: CookieService) {
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

  register(): void {
    console.log(this.user.password, " ", this.confirmPassword);
    if (this.user.password !== this.confirmPassword) {
      this.message = 'Les mots de passe ne correspondent pas';
      this.showMessageError = true;
      return;
    } else {
      this.userService.generateUsers(this.user).subscribe((response) => {
        if (response.Success) {
          this.message = 'Inscription réussie'; 
          this.showMessage = true;
          window.location.href = '/login';
        } else {
          this.message = 'Erreur lors de l\'inscription';
          this.showMessageError = true;
        }
      })
    }
  }

  login(): void {
    if (this.user.email && this.user.password) {
      this.loginService.login(this.user).subscribe((response) => {
        if (response.Success) {
          this.message = 'Connecté avec succès';
          this.cookieService.set('token', response.Data); // Store the token in localStorage
          this.showMessage = true;
          window.location.href = '/devis';
        } else {
          this.message = 'Connexion échouée, veuillez vérifier vos identifiants';
          // this.user.email = '';  
          this.showMessageError = true;
        }
      });
    }else {
      this.message = 'Veuillez remplir tous les champs';
      this.showMessageError = true;
    }
  }

}