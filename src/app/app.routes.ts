import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { Routes } from '@angular/router';
import { ArticleListComponent } from './components/article-list/article-list.component';
import { HomeMecanicienComponent } from './components/home-mecanicien/home-mecanicien.component';
import { HomeComponent } from './components/home/home.component';
import { LoginMecanicienComponent } from './components/login-mecanicien/login-mecanicien.component';
import { LoginComponent } from './components/login/login.component';
import { DevisComponent } from './pages/devis/devis.component';
import { PrestationComponent } from './pages/prestation/prestation.component';
import { CookieService } from 'ngx-cookie-service';

import { EstimationComponent } from './pages/devis/estimation/estimation.component';

export const routes: Routes = [
    { path: 'articles', component: ArticleListComponent },
    { path: 'home', component: HomeComponent },
    { path: 'home-mecanicien', component: HomeMecanicienComponent },
    { path: 'login', component: LoginComponent},    
    { 
        path: 'logout', 
        resolve: {
            logout: () => {
                const cookieService: CookieService = inject(CookieService);
                cookieService.delete('token', '/'); // Delete the token from cookies
                return true;
            }
        },
        redirectTo: 'home',
        pathMatch: 'full'
    },
    { path: 'login-mecanicien', component: LoginMecanicienComponent},
    { path: 'devis', component: DevisComponent},
    { path: 'prestations/:motorisationId', component: PrestationComponent},
    { path: 'estimations/:id', component: EstimationComponent},
    { path: '', redirectTo: 'home', pathMatch: 'full' }
];