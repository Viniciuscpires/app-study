import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { PlatformDetectorService } from '../../../services/platform-detector/platform-detector.service';

@Component({
  selector: 'as-study-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})
export class SignupFormComponent implements OnInit {

  signUpForm: FormGroup;
  @ViewChild('emailInput') emailInput: ElementRef<HTMLInputElement>;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private platformDetectorService: PlatformDetectorService
  ) { }

  ngOnInit(): void {
    this.signUpForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  signUp() {
    const email = this.signUpForm.get('email').value;
    const password = this.signUpForm.get('password').value;

    this.authService.signUp(
      email,
      password
    ).then(user => {
      console.log('user created and autheticated');
      console.log(user);
      
      if (user.email) {
        this.router.navigate(['home']);
      } else {
        this.signUpForm.reset();
        this.platformDetectorService.isPlatformBrowser() &&
          this.emailInput.nativeElement.focus();
        // TODO: better error message display
        alert(user);
      }
    });
  }

}
