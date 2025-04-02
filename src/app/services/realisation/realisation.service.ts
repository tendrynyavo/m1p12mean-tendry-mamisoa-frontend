import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Realisation } from '../../models/realisation.model';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class RealisationService {
  private apiUrl = `${environment.apiURL}/realisations`;

  constructor(private http: HttpClient, private cookieService: CookieService) { }

  private getAuthHeaders() {
    return {
      headers: {
        Authorization: `Bearer ${this.cookieService.get('token')}`
      }
    };
  }
  // Get all Realisations
  getAllRealisations(): Observable<Realisation[]> {
    return this.http.get<Realisation[]>(this.apiUrl, this.getAuthHeaders());
  }

  // Get Realisation by id
  getRealisationById(id: string): Observable<Realisation> {
    return this.http.get<Realisation>(`${this.apiUrl}/${id}`, this.getAuthHeaders());
  }

  // Create new Realisation
  createRealisation(Realisation: Realisation): Observable<Realisation> {
    return this.http.post<Realisation>(this.apiUrl, Realisation, this.getAuthHeaders());
  }

  // Update Realisation
  updateRealisation(id: string, Realisation: Realisation): Observable<Realisation> {
    return this.http.put<Realisation>(`${this.apiUrl}/${id}`, Realisation, this.getAuthHeaders());
  }

  // Delete Realisation
  deleteRealisation(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`, this.getAuthHeaders());
  }

  // Get Realisations by mecanicien
  getRealisationByMecanicien(mecanicienId: string): Observable<Realisation[]> {
    return this.http.get<Realisation[]>(`${this.apiUrl}/mecanicien/${mecanicienId}`, this.getAuthHeaders());
  }

  // Update Realisation status
  updateRealisationStatus(id: string, status: number): Observable<Realisation> {
    return this.http.patch<Realisation>(`${this.apiUrl}/${id}/status`, { status }, this.getAuthHeaders());
  }
}
