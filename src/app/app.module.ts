import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './views/home/home.component';
import { ProfileComponent } from './views/profile/profile.component';
import { TeacherFormComponent } from './views/teacher-form/teacher-form.component';
import { ForgotComponent } from './views/forgot/forgot.component';
import { StudiesModule } from './views/studies/studies.module';
import { LoginModule } from './views/login/login.module';
import { DatabaseModule } from './database.module';
import { SignUpModule } from './views/signup/singup.module';
import { ForgotModule } from './views/forgot/forgot.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ProfileComponent,
    TeacherFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StudiesModule,
    LoginModule,
    SignUpModule,
    ForgotModule,
    DatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
