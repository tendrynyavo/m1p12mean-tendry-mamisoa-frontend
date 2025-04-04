import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Diagnostic } from '../../models/diagnostic.model';
import { BaseService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class DiagnosticService extends BaseService {
  
  override baseUrl = `/besoins`;

  // Get all diagnostics
  getAllDiagnostics(): Observable<Diagnostic[]> {
    return this.http.get<Diagnostic[]>(this.getBaseUrl(), this.getAuthHeaders());
  }

  // Get diagnostic by id
  getDiagnosticById(id: string): Observable<Diagnostic> {
    return this.http.get<Diagnostic>(`${this.getBaseUrl()}/${id}`, this.getAuthHeaders());
  }

  // Create new diagnostic
  createDiagnostic(diagnostic: Diagnostic): Observable<Diagnostic> {
    return this.http.post<Diagnostic>(this.getBaseUrl(), diagnostic, this.getAuthHeaders());
  }

  // Update diagnostic
  updateDiagnostic(id: string, diagnostic: Diagnostic): Observable<Diagnostic> {
    return this.http.put<Diagnostic>(`${this.getBaseUrl()}/${id}`, diagnostic, this.getAuthHeaders());
  }

  // Delete diagnostic
  deleteDiagnostic(id: string): Observable<void> {
    return this.http.delete<void>(`${this.getBaseUrl()}/${id}`, this.getAuthHeaders());
  }

  // Get diagnostics by mecanicien
  getDiagnosticsByMecanicien(mecanicienId: string): Observable<Diagnostic[]> {
    return this.http.get<Diagnostic[]>(`${this.getBaseUrl()}/mecanicien/${mecanicienId}`, this.getAuthHeaders());
  }

  // Update diagnostic status
  updateDiagnosticStatus(id: string, status: number): Observable<Diagnostic> {
    return this.http.patch<Diagnostic>(`${this.getBaseUrl()}/${id}/status`, { status }, this.getAuthHeaders());
  }
}