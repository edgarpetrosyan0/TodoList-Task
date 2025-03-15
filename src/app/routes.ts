import { Routes } from '@angular/router';
import { LoginComponent } from './auth/components/login/login/login.component';
import { RegistrationComponent } from './auth/components/register/register/register.component';
import { AuthGuard } from './guards/auth.guard';
import { HomeComponent } from './home/home/home.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
];
