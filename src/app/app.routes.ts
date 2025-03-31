import { Routes } from '@angular/router';
import { ArticleListComponent } from './components/article-list/article-list.component';
import { HomeComponent } from './components/home/home.component';
import { DevisComponent } from './pages/devis/devis.component';

export const routes: Routes = [
    { path: 'articles', component: ArticleListComponent },
    { path: 'home', component: HomeComponent },
    { path: 'devis', component: DevisComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' }

];
