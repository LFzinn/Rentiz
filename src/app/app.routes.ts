import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { PropertiesPageComponent } from './pages/properties-page/properties-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HouseDetailsPageComponent } from './pages/house-details-page/house-details-page.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadComponent:() => import('./pages/home-page/home-page.component').then(c => HomePageComponent)},
  { path: 'properties', loadComponent:() => import('./pages/properties-page/properties-page.component').then(c => PropertiesPageComponent)},
  { path: 'properties/:id', loadComponent:() => import('./pages/house-details-page/house-details-page.component').then(c => HouseDetailsPageComponent)},
  { path: 'about', loadComponent:()=> import('./pages/about-page/about-page.component').then(c => AboutPageComponent)},
  { path: 'contact', loadComponent:()=> import('./pages/contact/contact.component').then(c => ContactComponent)},
  { path: '**', redirectTo: 'home' },
];
