import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../../models/user';
import { ResponseMessageData } from '../../models/response';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = environment.apiURL + '/login';
  constructor(private http: HttpClient, private cookieService: CookieService) { }


  login(credentials: User): Observable<ResponseMessageData<string>> {
    return this.http.post<ResponseMessageData<string>>(this.apiUrl, credentials);
  }

  getUserDetails(data : {token: string}): Observable<ResponseMessageData<User>> {
    if (!data) {
      throw new Error('No token found'); // Handle the case where no token is present
    } else {
      const dataUser = this.http.post<ResponseMessageData<User>>(this.apiUrl + '/details-user', data);
      return dataUser;
    }
  }
}
