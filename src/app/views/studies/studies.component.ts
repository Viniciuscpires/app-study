import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-studies',
  templateUrl: './studies.component.html',
  styleUrls: ['./studies.component.scss']
})
export class StudiesComponent implements OnInit {
  studies: Object[] = []

  constructor() { }

  ngOnInit(): void {
    this.studies = [
      { name: 'Lucas' },
      { name: 'Gustavo' },
      { name: 'Vinicius' },
      { name: 'Giovanni' }
    ]
  }

}
