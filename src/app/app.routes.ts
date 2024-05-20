import { Routes } from '@angular/router';
import { LoginComponent } from './componenets/pages/login/login.component';
import { AdminComponent } from './componenets/pages/admin/admin.component';

export const routes: Routes = [
  {
    path: 'pages/login',
    component: LoginComponent},

  {
    path: 'pages/admin',
    component: AdminComponent},
  {
    path: '',
    pathMatch : 'full',
    redirectTo: '/pages/login'
  }
];
