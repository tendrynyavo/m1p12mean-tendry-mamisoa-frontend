import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../../models/user';
import { ResponseMessageData } from '../../models/response';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = environment.apiURL + '/login';
  constructor(private http: HttpClient) { }


  login(credentials: User): Observable<ResponseMessageData<string>> {
    return this.http.post<ResponseMessageData<string>>(this.apiUrl, credentials);
  }

  logout(): void {
    if (typeof localStorage !== 'undefined') {
      window.localStorage.removeItem('token'); // Remove the token from localStorage
    }
    if (typeof window !== 'undefined') {
      window.location.href = '/home'; // Redirect to home page or login page
    }
  }

  getUserDetails(token : string): Observable<ResponseMessageData<User>> {
    if (!token) {
      throw new Error('No token found'); // Handle the case where no token is present
    } else {
      const dataUser = this.http.post<ResponseMessageData<User>>(this.apiUrl + '/details-user', token);
      return dataUser;
    }
  }
}
