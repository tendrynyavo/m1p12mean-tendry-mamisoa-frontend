import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Besoin, Prestation } from '../../models/besoin.model';
import { BaseService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class BesoinService extends BaseService {

  override baseUrl = `/besoins`;

  // Get all besoins
  getAllBesoins(): Observable<Besoin[]> {
    return this.http.get<Besoin[]>(this.getBaseUrl(), this.getAuthHeaders());
  }

  // Get besoin by id
  getBesoinById(id: string): Observable<Besoin> {
    return this.http.get<Besoin>(`${this.getBaseUrl()}/${id}`, this.getAuthHeaders());
  }

  // Create new besoin
  createBesoin(besoin: Besoin): Observable<Besoin> {
    return this.http.post<Besoin>(this.getBaseUrl(), besoin, this.getAuthHeaders());
  }

  // Update besoin
  updateBesoin(id: string, besoin: Besoin): Observable<Besoin> {
    return this.http.put<Besoin>(`${this.getBaseUrl()}/${id}`, besoin, this.getAuthHeaders());
  }

  // Delete besoin
  deleteBesoin(id: string): Observable<void> {
    return this.http.delete<void>(`${this.getBaseUrl()}/${id}`, this.getAuthHeaders());
  }

  getBesoinByMotorisationId(motorisationId: string): Observable<Prestation[]> {
    return this.http.get<Prestation[]>(`${this.getBaseUrl()}/motorisations/${motorisationId}`, this.getAuthHeaders());
  }

}
