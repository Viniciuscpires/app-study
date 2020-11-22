import { Component, Input, OnInit } from '@angular/core';
import { Study } from './study';

@Component({
  selector: 'as-study-card',
  templateUrl: './study-card.component.html',
  styleUrls: ['./study-card.component.scss']
})
export class StudyCardComponent implements OnInit {

  @Input() study: Study = null;

  constructor() { }

  ngOnInit(): void {
  }

}
