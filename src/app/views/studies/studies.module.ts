import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudyCardComponent } from 'src/app/components/study-card/study-card.component';
import { StudiesComponent } from './studies.component';
import { StudyFilterComponent } from './study-filter/study-filter/study-filter.component';
import { FormatDateTimePipe } from '../../pipes/format-date-time/format-date-time.pipe';

@NgModule({
  declarations: [
    StudiesComponent,
    StudyCardComponent,
    StudyFilterComponent,
    FormatDateTimePipe,
  ],
  imports: [
    CommonModule
  ]
})
export class StudiesModule {}
