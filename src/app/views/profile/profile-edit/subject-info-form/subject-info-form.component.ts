import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'as-subject-info-form',
  templateUrl: './subject-info-form.component.html',
  styleUrls: ['./subject-info-form.component.scss']
})
export class SubjectInfoFormComponent implements OnInit {

  @Input() profileForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

}
