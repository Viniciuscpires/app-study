import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
    BrowserModule
  ]
})
export class StudiesModule {}