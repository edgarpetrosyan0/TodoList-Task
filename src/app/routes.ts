import { Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { HomeComponent } from './home/home/home.component';
import { RegistrationComponent } from './auth/components/registration/registrationcomponent';
import { LoginComponent } from './auth/components/login/login.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
];
