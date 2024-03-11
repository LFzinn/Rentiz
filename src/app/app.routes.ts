import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadComponent:() => import('./pages/home-page/home-page.component') },
  {path: 'properties', loadComponent:() => import('./pages/properties-page/properties-page.component') },
  { path: 'about', loadComponent:()=> import('./pages/about-page/about-page.component')},
  { path: '**', redirectTo: 'home' },
];
