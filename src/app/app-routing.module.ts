import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './services/auth/auth.guard';

import { ForgotComponent } from './views/forgot/forgot.component';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { ProfileComponent } from './views/profile/profile.component';
import { SignupComponent } from './views/signup/signup.component';
import { StudiesComponent } from './views/studies/studies.component';
import { ProfileViewComponent } from './views/profile/profile-view/profile-view.component';
import { ProfileEditComponent } from './views/profile/profile-edit/profile-edit.component';
import { ProfileGuard } from './services/profile/profile.guard';
import { LoginGuard } from './services/auth/login.guard';

const routes: Routes = [{
  path: 'home',
  component: HomeComponent,
  canActivate: [AuthGuard]
}, {
  path: 'login',
  component: LoginComponent,
  canActivate: [LoginGuard]
}, {
  path: 'forgot',
  component: ForgotComponent,
  canActivate: [LoginGuard]
}, {
  path: 'signup',
  component: SignupComponent,
  canActivate: [LoginGuard]
}, {
  path: 'profile',
  component: ProfileComponent,
  canActivate: [ProfileGuard],
  canActivateChild: [ProfileGuard],
  children: [
    { path: '', component: ProfileViewComponent },
    { path: 'edit', component: ProfileEditComponent },
  ],
}, {
  path: 'studies',
  component: StudiesComponent,
  canActivate: [AuthGuard]
}, {
  path: '',
  component: HomeComponent,
  canActivate: [AuthGuard]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
