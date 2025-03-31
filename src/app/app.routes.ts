import { Routes } from '@angular/router';
import { ArticleListComponent } from './components/article-list/article-list.component';
import { HomeComponent } from './components/home/home.component';
<<<<<<< HEAD
import { LoginComponent } from './components/login/login.component';
=======
import { DevisComponent } from './pages/devis/devis.component';
>>>>>>> main

export const routes: Routes = [
    { path: 'articles', component: ArticleListComponent },
    { path: 'home', component: HomeComponent },
<<<<<<< HEAD
    { path: 'login', component: LoginComponent},
=======
    { path: 'devis', component: DevisComponent },
>>>>>>> main
    { path: '', redirectTo: 'home', pathMatch: 'full' }

];
