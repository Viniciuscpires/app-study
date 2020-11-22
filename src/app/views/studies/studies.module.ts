import { NgModule } from '@angular/core';
import { StudyCardComponent } from '../../components/study-card/study-card.component';
import { StudyFilterComponent } from './study-filter/study-filter/study-filter.component';

@NgModule({
  declarations: [
    StudyCardComponent,
    StudyFilterComponent
  ]
})
export class StudiesModule {}