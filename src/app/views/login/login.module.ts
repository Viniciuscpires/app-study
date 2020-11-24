import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './login.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { LoginFooterComponent } from './login-footer/login-footer.component';
import { StudyTitleComponent } from '../../components/study-title/study-title.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LoginComponent,
    LoginFormComponent,
    LoginFooterComponent,
    StudyTitleComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class LoginModule {}