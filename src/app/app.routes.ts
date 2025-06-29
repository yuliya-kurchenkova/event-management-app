import { Routes } from '@angular/router';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';

export const routes: Routes = [
  { path: '', component: LandingPageComponent, pathMatch: 'full' },
  { path: 'events', loadComponent: () => import('./pages/event-page/event-page/event-page.component'), },
  { path: '**', redirectTo: '' }
];
