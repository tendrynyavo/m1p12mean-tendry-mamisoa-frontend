import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Realisation } from '../../models/realisation.model';
import { BaseService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class RealisationService extends BaseService {
  
  override baseUrl = `/realisations`;

  // Get all Realisations
  getAllRealisations(): Observable<Realisation[]> {
    return this.http.get<Realisation[]>(this.getBaseUrl(), this.getAuthHeaders());
  }

  // Get Realisation by id
  getRealisationById(id: string): Observable<Realisation> {
    return this.http.get<Realisation>(`${this.getBaseUrl()}/${id}`, this.getAuthHeaders());
  }

  // Create new Realisation
  createRealisation(Realisation: Realisation): Observable<Realisation> {
    return this.http.post<Realisation>(this.getBaseUrl(), Realisation, this.getAuthHeaders());
  }

  // Update Realisation
  updateRealisation(id: string, Realisation: Realisation): Observable<Realisation> {
    return this.http.put<Realisation>(`${this.getBaseUrl()}/${id}`, Realisation, this.getAuthHeaders());
  }

  // Delete Realisation
  deleteRealisation(id: string): Observable<void> {
    return this.http.delete<void>(`${this.getBaseUrl()}/${id}`, this.getAuthHeaders());
  }

  // Get Realisations by mecanicien
  getRealisationByMecanicien(mecanicienId: string): Observable<Realisation[]> {
    return this.http.get<Realisation[]>(`${this.getBaseUrl()}/mecanicien/${mecanicienId}`, this.getAuthHeaders());
  }

  // Update Realisation status
  updateRealisationStatus(id: string, status: number): Observable<Realisation> {
    return this.http.patch<Realisation>(`${this.getBaseUrl()}/${id}/status`, { status }, this.getAuthHeaders());
  }

}