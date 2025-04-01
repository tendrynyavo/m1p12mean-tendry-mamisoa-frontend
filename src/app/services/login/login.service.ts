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

  private getAuthHeaders(): { [header: string]: string } {
    const token = localStorage.getItem('token'); // Assuming token is stored in localStorage
    return token ? { Authorization: `Bearer ${token}` } : {};
  }

  login(credentials: User): Observable<ResponseMessageData<string>> {
    return this.http.post<ResponseMessageData<string>>(this.apiUrl, credentials, {
      headers: this.getAuthHeaders()
    });
  }

  logout(): void {
    localStorage.removeItem('token'); // Remove the token from localStorage
    window.location.href = '/home'; // Redirect to home page or login page
  }
}
