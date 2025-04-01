import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { Observable } from 'rxjs';
import { ResponseMessageData } from '../models/response';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private apiUrl = environment.apiURL + '/users';
  constructor(private http: HttpClient) { }
  
  generateUsers(user: User): Observable<ResponseMessageData<User>> {
    try {
      const response = this.http.post<ResponseMessageData<User>>(this.apiUrl, user);
      return response;
    } catch (error) {
      throw error; 
    }
  }

}
