import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { PlatformDetectorService } from '../../services/platform-detector/platform-detector.service';
import { AuthService } from '../../services/auth/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'as-study-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.scss']
})
export class ForgotComponent implements OnInit {

  constructor() {}

  ngOnInit() {}

}
