import { Component } from '@angular/core';
import { User } from '../../models/user';
import { LoginService } from '../../services/login/login.service';
import { MessageErrorToastComponent } from "../common/message-error-toast/message-error-toast.component";
import { MessageToastComponent } from "../common/message-toast/message-toast.component";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'Login-mecanicien',
  imports: [CommonModule, FormsModule, MessageErrorToastComponent, MessageToastComponent],
  templateUrl: './login-mecanicien.component.html',
  styleUrl: './login-mecanicien.component.scss'
})
export class LoginMecanicienComponent {

  user: User;
  message: string = "";
  showMessage: boolean = false;
  showMessageError: boolean = false;

  constructor(private loginService: LoginService) {
    this.user = new User();
  }

  login(): void {
    if (this.user.email && this.user.password) {
      this.loginService.login(this.user).subscribe((response) => {
        if (response.Success) {
          this.message = 'Connecté avec succès';
          localStorage.setItem('token', response.Data); // Store the token in localStorage
          this.showMessage = true;
          window.location.href = '/home-mecanicien';
        } else {
          this.message = 'Connexion échouée, veuillez vérifier vos identifiants';
          // this.user.email = '';
          this.showMessageError = true;
        }
      });
    } else {
      this.message = 'Veuillez remplir tous les champs';
      this.showMessageError = true;
    }
  }
}
