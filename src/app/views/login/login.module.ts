import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './login.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { LoginFooterComponent } from './login-footer/login-footer.component';

@NgModule({
  declarations: [
    LoginComponent,
    LoginFormComponent,
    LoginFooterComponent
  ],
  imports: [
    CommonModule
  ]
})
export class LoginModule {}