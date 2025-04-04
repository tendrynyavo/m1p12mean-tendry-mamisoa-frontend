import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../models/user';
import { ResponseMessageData } from '../../models/response';
import { BaseService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService extends BaseService {
  
  override baseUrl = `/login`;

  login(credentials: User): Observable<ResponseMessageData<string>> {
    return this.http.post<ResponseMessageData<string>>(this.getBaseUrl(), credentials);
  }

  getUserDetails(data : {token: string}): Observable<ResponseMessageData<User>> {
    if (!data) {
      throw new Error('No token found'); // Handle the case where no token is present
    } else {
      const dataUser = this.http.post<ResponseMessageData<User>>(this.getBaseUrl() + '/details-user', data);
      return dataUser;
    }
  }
}
