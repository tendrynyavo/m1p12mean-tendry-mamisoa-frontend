import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Diagnostic } from '../../models/diagnostic.model';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class DiagnosticService {
  private apiUrl = `${environment.apiURL}/diagnostics`;

  constructor(private http: HttpClient, private cookieService: CookieService) { }

  private getAuthHeaders() {
    return {
      headers: {
        Authorization: `Bearer ${this.cookieService.get('token')}`
      }
    };
  }
  // Get all diagnostics
  getAllDiagnostics(): Observable<Diagnostic[]> {
    return this.http.get<Diagnostic[]>(this.apiUrl, this.getAuthHeaders());
  }

  // Get diagnostic by id
  getDiagnosticById(id: string): Observable<Diagnostic> {
    return this.http.get<Diagnostic>(`${this.apiUrl}/${id}`, this.getAuthHeaders());
  }

  // Create new diagnostic
  createDiagnostic(diagnostic: Diagnostic): Observable<Diagnostic> {
    return this.http.post<Diagnostic>(this.apiUrl, diagnostic, this.getAuthHeaders());
  }

  // Update diagnostic
  updateDiagnostic(id: string, diagnostic: Diagnostic): Observable<Diagnostic> {
    return this.http.put<Diagnostic>(`${this.apiUrl}/${id}`, diagnostic, this.getAuthHeaders());
  }

  // Delete diagnostic
  deleteDiagnostic(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`, this.getAuthHeaders());
  }

  // Get diagnostics by mecanicien
  getDiagnosticsByMecanicien(mecanicienId: string): Observable<Diagnostic[]> {
    return this.http.get<Diagnostic[]>(`${this.apiUrl}/mecanicien/${mecanicienId}`, this.getAuthHeaders());
  }

  // Update diagnostic status
  updateDiagnosticStatus(id: string, status: number): Observable<Diagnostic> {
    return this.http.patch<Diagnostic>(`${this.apiUrl}/${id}/status`, { status }, this.getAuthHeaders());
  }
}