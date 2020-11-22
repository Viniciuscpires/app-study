import { Component, OnInit } from '@angular/core';
import { Study } from 'src/app/components/study-card/study';

@Component({
  selector: 'app-studies',
  templateUrl: './studies.component.html',
  styleUrls: ['./studies.component.scss']
})
export class StudiesComponent implements OnInit {
  
  studies: Study[] = [];

  constructor() { }

  ngOnInit(): void {
    this.studies = [
      { 
        name: 'Lucas',
        subject: 'Quimica',
        photo: 'https://cdn6.f-cdn.com/contestentries/1376995/30494909/5b566bc71d308_thumbCard.jpg'
      },
      { 
        name: 'Gustavo',
        subject: 'Fisica',
        photo: 'https://cdn6.f-cdn.com/contestentries/1376995/30494909/5b566bc71d308_thumbCard.jpg'
      },
      { 
        name: 'Vinicius',
        subject: 'Matematica',
        photo: 'https://cdn6.f-cdn.com/contestentries/1376995/30494909/5b566bc71d308_thumbCard.jpg'
      },
      { 
        name: 'Giovanni',
        subject: 'Biologia',
        photo: 'https://cdn6.f-cdn.com/contestentries/1376995/30494909/5b566bc71d308_thumbCard.jpg'
      }
    ];
  }

}
