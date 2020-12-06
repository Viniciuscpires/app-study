import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { SignupComponent } from './signup.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { ErrorMessageModule } from 'src/app/components/error-message/error-message-module';
import { StudyTitleModule } from '../../components/study-title/study-title-module';

@NgModule({
  declarations: [
    SignupComponent,
    SignupFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ErrorMessageModule,
    StudyTitleModule
  ]
})
export class SignUpModule {}
