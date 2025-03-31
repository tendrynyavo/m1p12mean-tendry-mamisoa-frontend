import { Routes } from '@angular/router';
import { ArticleListComponent } from './components/article-list/article-list.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { FiltreVehiculeComponent } from './components/filtre-vehicule/filtre-vehicule.component';

export const routes: Routes = [
    { path: 'articles', component: ArticleListComponent },
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent},
    { path: 'filtre', component: FiltreVehiculeComponent},
    { path: '', redirectTo: 'home', pathMatch: 'full' }

];
