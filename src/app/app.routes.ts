import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadComponent:() => import('./pages/home-page/home-page.component').then(c => c.HomePageComponent)},
  { path: 'properties', loadComponent:() => import('./pages/properties-page/properties-page.component').then(c => c.PropertiesPageComponent)},
  { path: 'properties/:id', loadComponent:() => import('./pages/house-details-page/house-details-page.component').then(c => c.HouseDetailsPageComponent)},
  { path: 'about', loadComponent:()=> import('./pages/about-page/about-page.component').then(c => c.AboutPageComponent)},
  { path: 'contact', loadComponent:()=> import('./pages/contact/contact.component').then(c => c.ContactComponent)},
  { path: '**', redirectTo: 'home' },
];
