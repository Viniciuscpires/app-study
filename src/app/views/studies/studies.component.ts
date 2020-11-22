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
    const description = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse posuere massa vitae sem vulputate, id interdum risus sagittis. Curabitur hendrerit gravida est, molestie rutrum massa egestas et. In luctus laoreet purus at gravida. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In eget odio egestas neque consequat lobortis a ac est. Donec ac est vitae diam semper pellentesque. Nulla nec sapien mauris. Nunc lectus mi, interdum posuere cursus at, posuere vitae risus. Proin sed consequat tellus.

    Nunc blandit vulputate porta. Aenean ut accumsan odio. Praesent condimentum, nibh in tempor condimentum, lectus nibh molestie sem, eget suscipit ante ex sed augue. Morbi condimentum libero a auctor mollis. Mauris enim ipsum, gravida in scelerisque et, imperdiet nec urna. Suspendisse nec accumsan libero, nec dapibus metus. Morbi consequat libero at suscipit hendrerit. Fusce lacinia ante lacinia augue hendrerit, nec volutpat lorem ultricies. Integer tempor faucibus lectus, ac egestas arcu scelerisque vitae.`

    this.studies = [
      { 
        name: 'Lucas',
        subject: 'Quimica',
        photo: 'https://cdn6.f-cdn.com/contestentries/1376995/30494909/5b566bc71d308_thumbCard.jpg',
        description
      },
      { 
        name: 'Gustavo',
        subject: 'Fisica',
        photo: 'https://cdn6.f-cdn.com/contestentries/1376995/30494909/5b566bc71d308_thumbCard.jpg',
        description
      },
      { 
        name: 'Vinicius',
        subject: 'Matematica',
        photo: 'https://cdn6.f-cdn.com/contestentries/1376995/30494909/5b566bc71d308_thumbCard.jpg',
        description
      },
      { 
        name: 'Giovanni',
        subject: 'Biologia',
        photo: 'https://cdn6.f-cdn.com/contestentries/1376995/30494909/5b566bc71d308_thumbCard.jpg',
        description
      }
    ];
  }

}
