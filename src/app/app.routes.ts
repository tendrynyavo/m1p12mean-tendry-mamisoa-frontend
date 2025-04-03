import { Routes } from '@angular/router';
import { ArticleListComponent } from './components/article-list/article-list.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { FiltreVehiculeComponent } from './components/filtre-vehicule/filtre-vehicule.component';
import { DevisComponent } from './pages/devis/devis.component';
import { PrestationComponent } from './pages/prestation/prestation.component';
import { EstimationComponent } from './pages/devis/estimation/estimation.component';

export const routes: Routes = [
    { path: 'articles', component: ArticleListComponent },
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent},
    { path: 'devis', component: DevisComponent},
    { path: 'filtre', component: FiltreVehiculeComponent},
    { path: 'prestations/:motorisationId', component: PrestationComponent},
    { path: 'estimations/:id', component: EstimationComponent},
    { path: '', redirectTo: 'home', pathMatch: 'full' }

];
