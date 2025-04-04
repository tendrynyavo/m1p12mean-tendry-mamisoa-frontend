import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Marque } from '../../models/marque.model';
import { BaseService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class MarqueService extends BaseService {

  override baseUrl = `/marques`;

  // Get all marques
  getAllMarques(): Observable<Marque[]> {
    return this.http.get<Marque[]>(this.getBaseUrl(), this.getAuthHeaders());
  }

  // Get marque by id
  getMarqueById(id: number): Observable<Marque> {
    return this.http.get<Marque>(`${this.getBaseUrl()}/${id}`, this.getAuthHeaders());
  }

  // Create new marque
  createMarque(marque: Marque): Observable<Marque> {
    return this.http.post<Marque>(this.getBaseUrl(), marque, this.getAuthHeaders());
  }

  // Update marque
  updateMarque(id: number, marque: Marque): Observable<Marque> {
    return this.http.put<Marque>(`${this.getBaseUrl()}/${id}`, marque, this.getAuthHeaders());
  }

  // Delete marque
  deleteMarque(id: number): Observable<void> {
    return this.http.delete<void>(`${this.getBaseUrl()}/${id}`, this.getAuthHeaders());
  }

}
