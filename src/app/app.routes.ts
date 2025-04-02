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
import { LoginService } from './services/login/login.service';
import { CookieService } from 'ngx-cookie-service';


export const routes: Routes = [
    { path: 'articles', component: ArticleListComponent },
    { path: 'home', component: HomeComponent },
    { path: 'home-mecanicien', component: HomeMecanicienComponent },
    { path: 'login', component: LoginComponent},    
    { 
        path: 'logout', 
        resolve: {
            logout: () => {
                const cookieService = inject(CookieService);
                cookieService.delete('token', '/'); // Delete the token from cookies
                return true;
            }
        },
        redirectTo: 'home',
        pathMatch: 'full'
    },
    { path: 'login-mecanicien', component: LoginMecanicienComponent},
    { path: 'devis', component: DevisComponent},
    { path: 'prestation', component: PrestationComponent},
    { path: '', redirectTo: 'home', pathMatch: 'full' }
];

// // Ensure the resolve function is properly registered and executed
// export function logoutResolver() {
//     const cookieService = inject(CookieService);
//     cookieService.delete('token', '/'); // Delete the token from cookies
//     return true;
// }

// // Update the route to use the resolver function
// routes.find(route => route.path === 'logout')!.resolve = { logout: logoutResolver };
