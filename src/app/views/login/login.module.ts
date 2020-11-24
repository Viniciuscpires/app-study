import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './login.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { LoginFooterComponent } from './login-footer/login-footer.component';
import { StudyTitleComponent } from '../../components/study-title/study-title.component';
import { ErrorMessageModule } from 'src/app/components/error-message/error-message-module';

@NgModule({
  declarations: [
    LoginComponent,
    LoginFormComponent,
    LoginFooterComponent,
    StudyTitleComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ErrorMessageModule
  ]
})
export class LoginModule {}