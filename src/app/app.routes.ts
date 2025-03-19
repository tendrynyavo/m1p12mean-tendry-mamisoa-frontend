import { Routes } from '@angular/router';
import { ArticleListComponent } from './components/article-list/article-list.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
    { path: 'articles', component: ArticleListComponent },
    { path: 'home', component: HomeComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' }

];
