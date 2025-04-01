import { Routes } from '@angular/router';
import { ArticleListComponent } from './components/article-list/article-list.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { DevisComponent } from './pages/devis/devis.component';
import { FiltreVehiculeComponent } from './components/filtre-vehicule/filtre-vehicule.component';

export const routes: Routes = [
    { path: 'articles', component: ArticleListComponent },
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent},
    { path: 'filtre', component: FiltreVehiculeComponent},
    { path: 'devis', component: DevisComponent},
    { path: '', redirectTo: 'home', pathMatch: 'full' }
];
