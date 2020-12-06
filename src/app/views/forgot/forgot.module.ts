import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ErrorMessageModule } from 'src/app/components/error-message/error-message-module';
import { StudyTitleModule } from '../../components/study-title/study-title-module';
import { ForgotComponent } from './forgot.component';
import { ForgotFormComponent } from './forgot-form/forgot-form.component';

@NgModule({
  declarations: [
    ForgotComponent,
    ForgotFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ErrorMessageModule,
    StudyTitleModule
  ]
})
export class ForgotModule {}
