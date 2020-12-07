import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProfileService } from '../../../services/profile/profile.service';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.scss']
})
export class ProfileEditComponent implements OnInit {

  public profileForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private profileService: ProfileService
  ) {
    this.profileForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  saveProfile() {
    this.profileService.create({})
  }

  ngOnInit(): void {
    this.profileForm = this.formBuilder.group({
      name: ['', Validators.required],
      whatsapp: ['', Validators.required],
      bio: ['', Validators.required],
      subject: ['', Validators.required],
      cost: ['', Validators.required],
      schedule: ['', Validators.required],
    });
  }

}
