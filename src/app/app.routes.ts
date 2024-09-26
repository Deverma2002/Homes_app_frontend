import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailsComponent } from './details/details.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'signup', component: SignUpComponent, title: "Sign Up Page" },
  { path: 'login', component: LoginComponent, title: "Login Page" },
  { path: 'home', component: HomeComponent, title: "Home Page" },
  { path: 'details/:id', component: DetailsComponent, title: "Details Page" }
];
