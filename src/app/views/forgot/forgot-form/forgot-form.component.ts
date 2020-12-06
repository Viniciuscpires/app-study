import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { PlatformDetectorService } from '../../../services/platform-detector/platform-detector.service';

@Component({
  selector: 'as-study-forgot-form',
  templateUrl: './forgot-form.component.html',
  styleUrls: ['./forgot-form.component.scss']
})
export class ForgotFormComponent implements OnInit {

  forgotForm: FormGroup;
  @ViewChild('emailInput') emailInput: ElementRef<HTMLInputElement>;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private platformDetectorService: PlatformDetectorService
  ) { }

  ngOnInit(): void {
    this.forgotForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  sendResetPasswordEmail() {
    const email = this.forgotForm.get('email').value;

    this.authService.sendResetPasswordEmail(
      email
    ).then(sent => {      
      if (sent.valid) {
        this.router.navigate(['login']);
      } else {
        this.forgotForm.reset();
        this.platformDetectorService.isPlatformBrowser() &&
          this.emailInput.nativeElement.focus();
        // TODO: better error message display
        alert(sent.message);
      }
    });
  }

}
