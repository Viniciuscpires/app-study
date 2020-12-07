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

const routes: Routes = [{
  path: 'home',
  component: HomeComponent,
  canActivate: [AuthGuard]
}, {
  path: 'login',
  component: LoginComponent,
  canActivate: [AuthGuard]
}, {
  path: 'forgot',
  component: ForgotComponent,
  canActivate: [AuthGuard]
}, {
  path: 'signup',
  component: SignupComponent,
  canActivate: [AuthGuard]
}, {
  path: 'profile',
  component: ProfileComponent,
  canActivate: [ProfileGuard],
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
