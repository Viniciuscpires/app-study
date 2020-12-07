import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileViewComponent } from './profile-view/profile-view.component';
import { ProfileEditComponent } from './profile-edit/profile-edit.component';
import { ProfileComponent } from './profile.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { SubjectInfoFormComponent } from './profile-edit/subject-info-form/subject-info-form.component';
import { BasicInfoFormComponent } from './profile-edit/basic-info-form/basic-info-form.component';
import { ScheduleFormComponent } from './profile-edit/schedule-form/schedule-form.component';
import { ErrorMessageModule } from '../../components/error-message/error-message-module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ProfileComponent,
    ProfileViewComponent, 
    ProfileEditComponent, SubjectInfoFormComponent, BasicInfoFormComponent, ScheduleFormComponent
  ],
  imports: [
    CommonModule,
    ErrorMessageModule,
    ReactiveFormsModule,
    BrowserModule,
    RouterModule
  ]
})
export class ProfileModule { }
