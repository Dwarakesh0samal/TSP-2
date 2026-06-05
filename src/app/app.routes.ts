import {Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./components/portfolio').then(m => m.Portfolio),
  },
  {
    path: 'print',
    loadComponent: () => import('./components/print-resume').then(m => m.PrintResume),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
