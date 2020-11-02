import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './views/home/home.component';
import { StudiesComponent } from './views/studies/studies.component';
import { ProfileComponent } from './views/profile/profile.component';
import { TeacherFormComponent } from './views/teacher-form/teacher-form.component';
import { SignupComponent } from './views/signup/signup.component';
import { ForgotComponent } from './views/forgot/forgot.component';
import { LoginComponent } from './views/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    StudiesComponent,
    ProfileComponent,
    TeacherFormComponent,
    SignupComponent,
    ForgotComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
