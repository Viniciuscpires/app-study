import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { PlatformDetectorService } from '../../../services/platform-detector/platform-detector.service';

@Component({
  selector: 'as-study-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {

  loginForm: FormGroup;
  @ViewChild('emailInput') emailInput: ElementRef<HTMLInputElement>;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private platformDetectorService: PlatformDetectorService
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    })
  }

  login() {
    const email = this.loginForm.get('email').value
    const password = this.loginForm.get('password').value
    
    this.authService.authenticate(
      email,
      password
    ).subscribe(user => {
      console.log('user autheticated')
      console.log(user)
      this.router.navigate(['home'])
    },
      err => {
        console.log(err)
        this.platformDetectorService.isPlatformBrowser() && 
          this.emailInput.nativeElement.focus()
        alert('Invalid email or password')
      })
  }

}
