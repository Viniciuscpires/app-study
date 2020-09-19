import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './views/home/home.component'
import { ForgotComponent } from './views/forgot/forgot.component'
import { ProfileComponent } from './views/profile/profile.component'
import { SignupComponent } from './views/signup/signup.component'
import { StudiesComponent } from './views/studies/studies.component'
import { TeacherFormComponent } from './views/teacher-form/teacher-form.component'

const routes: Routes = [{
  path: '',
  component: HomeComponent
}, {
  path: '/signup',
  component: SignupComponent
}, {
  path: '/forgot',
  component: ForgotComponent
}, {
  path: '/sudies',
  component: StudiesComponent
}, {
  path: '/profile',
  component: ProfileComponent
}, {
  path: '/teacherform',
  component: TeacherFormComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
