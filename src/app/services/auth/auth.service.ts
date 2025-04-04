import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Besoin, Prestation } from '../../models/besoin.model';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

    private apiUrl = environment.apiURL;
    protected baseUrl = `/diagnostics`;

    constructor(protected http: HttpClient, protected cookieService: CookieService) { }

    protected getAuthHeaders() {
        return {
            headers: {
                Authorization: `Bearer ${this.cookieService.get('token')}`
            }
        };
    }

    protected getApiUrl(url : string = ''): string {
        return this.apiUrl + url;
    }

    protected getBaseUrl(): string {
        return this.getApiUrl(this.baseUrl);
    }

}
