import { Component, OnInit } from '@angular/core';
import { Study } from 'src/app/services/study/study';
import { StudyService } from 'src/app/services/study/study.service';

@Component({
  selector: 'as-study-studies',
  templateUrl: './studies.component.html',
  styleUrls: ['./studies.component.scss']
})
export class StudiesComponent implements OnInit {
  
  studies: Study[] = [];

  constructor(private studyService: StudyService) { }

  ngOnInit(): void {
    this.studyService
      .getStudies()
      .subscribe(studies => this.studies = studies)
  }

}
