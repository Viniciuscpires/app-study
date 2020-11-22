import { Component, OnInit } from '@angular/core';
import { Study } from 'src/app/components/study-card/study';

@Component({
  selector: 'as-study-studies',
  templateUrl: './studies.component.html',
  styleUrls: ['./studies.component.scss']
})
export class StudiesComponent implements OnInit {
  
  studies: Study[] = [];

  constructor() { }

  ngOnInit(): void {
    this.studies = []
  }

}
