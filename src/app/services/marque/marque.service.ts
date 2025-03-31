import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Marque } from '../../models/marque.model';
import { environment } from '../../../environments/environment'; 

@Injectable({
  providedIn: 'root'
})
export class MarqueService {

  private apiUrl = environment.apiURL + '/marques'; // Adjust the URL according to your backend

  constructor(private http: HttpClient) { }

  // Get all marques
  getAllMarques(): Observable<Marque[]> {
    console.log(this.apiUrl);
    return this.http.get<Marque[]>(this.apiUrl);
  }

  // Get marque by id
  getMarqueById(id: number): Observable<Marque> {
    return this.http.get<Marque>(`${this.apiUrl}/${id}`);
  }

  // Create new marque
  createMarque(marque: Marque): Observable<Marque> {
    return this.http.post<Marque>(this.apiUrl, marque);
  }

  // Update marque
  updateMarque(id: number, marque: Marque): Observable<Marque> {
    return this.http.put<Marque>(`${this.apiUrl}/${id}`, marque);
  }

  // Delete marque
  deleteMarque(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
