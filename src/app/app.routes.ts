import { Routes } from '@angular/router';
import { ArticleListComponent } from './components/article-list/article-list.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { DevisComponent } from './pages/devis/devis.component';
import { FiltreVehiculeComponent } from './components/filtre-vehicule/filtre-vehicule.component';
import { PrestationComponent } from './pages/prestation/prestation.component';
import { LoginMecanicienComponent } from './components/login-mecanicien/login-mecanicien.component';
import { HomeMecanicienComponent } from './components/home-mecanicien/home-mecanicien.component';
import { LoginService } from './services/login/login.service';
import { inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const logout = () => {
    const loginService = new LoginService(inject(HttpClient));
    loginService.logout();
    return true;
}

export const routes: Routes = [
    { path: 'articles', component: ArticleListComponent },
    { path: 'home', component: HomeComponent },
    { path: 'home-mecanicien', component: HomeMecanicienComponent },
    { path: 'login', component: LoginComponent},    
    { 
        path: 'logout', 
        resolve: {logout},
        redirectTo: 'home',
        pathMatch: 'full'
    },
    { path: 'login-mecanicien', component: LoginMecanicienComponent},
    { path: 'devis', component: DevisComponent},
    { path: 'filtre', component: FiltreVehiculeComponent},
    { path: 'prestation', component: PrestationComponent},
    { path: '', redirectTo: 'home', pathMatch: 'full' }
];
