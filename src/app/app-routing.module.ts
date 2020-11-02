import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ForgotComponent } from './views/forgot/forgot.component';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { ProfileComponent } from './views/profile/profile.component';
import { SignupComponent } from './views/signup/signup.component';
import { StudiesComponent } from './views/studies/studies.component';
import { TeacherFormComponent } from './views/teacher-form/teacher-form.component';

const routes: Routes = [{
  path: 'forgot',
  component: ForgotComponent
}, {
  path: 'home',
  component: HomeComponent
}, {
  path: 'login',
  component: LoginComponent
}, {
  path: 'profile',
  component: ProfileComponent
}, {
  path: 'signup',
  component: SignupComponent
}, {
  path: 'studies',
  component: StudiesComponent
}, {
  path: 'teacherform',
  component: TeacherFormComponent
}, {
  path: '',
  component: HomeComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
