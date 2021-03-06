import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './login.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { LoginFooterComponent } from './login-footer/login-footer.component';
import { ErrorMessageModule } from 'src/app/components/error-message/error-message-module';
import { StudyTitleModule } from '../../components/study-title/study-title-module';

@NgModule({
  declarations: [
    LoginComponent,
    LoginFormComponent,
    LoginFooterComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ErrorMessageModule,
    StudyTitleModule
  ]
})
export class LoginModule {}
