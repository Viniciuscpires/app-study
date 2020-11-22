import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudyCardComponent } from 'src/app/components/study-card/study-card.component';
import { StudiesComponent } from './studies.component';
import { StudyFilterComponent } from './study-filter/study-filter/study-filter.component';

@NgModule({
  declarations: [
    StudiesComponent,
    StudyCardComponent,
    StudyFilterComponent
  ],
  imports: [
    CommonModule
  ]
})
export class StudiesModule {}