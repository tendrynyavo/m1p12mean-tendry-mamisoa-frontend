import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Besoin, Prestation } from '../../models/besoin.model';

@Injectable({
  providedIn: 'root'
})
export class BesoinService {
  private apiUrl = environment.apiURL + '/besoins';

  constructor(private http: HttpClient) { }

  // Get all besoins
  getAllBesoins(): Observable<Besoin[]> {
    return this.http.get<Besoin[]>(this.apiUrl);
  }

  // Get besoin by id
  getBesoinById(id: string): Observable<Besoin> {
    return this.http.get<Besoin>(`${this.apiUrl}/${id}`);
  }

  // Create new besoin
  createBesoin(besoin: Besoin): Observable<Besoin> {
    return this.http.post<Besoin>(this.apiUrl, besoin);
  }

  // Update besoin
  updateBesoin(id: string, besoin: Besoin): Observable<Besoin> {
    return this.http.put<Besoin>(`${this.apiUrl}/${id}`, besoin);
  }

  // Delete besoin
  deleteBesoin(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  getBesoinByMotorisationId(motorisationId: string): Observable<Prestation[]> {
    return this.http.get<Prestation[]>(`${this.apiUrl}/motorisations/${motorisationId}`);
  }

}
