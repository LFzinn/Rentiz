import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
  { path: 'properties', loadChildren: () => import('./pages/properties/properties.module').then(m => m.PropertiesModule) },
  { path: '**', redirectTo: 'home' },
];
