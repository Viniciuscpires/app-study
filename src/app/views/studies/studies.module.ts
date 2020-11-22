import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StudyCardComponent } from '../../components/study-card/study-card.component';
import { StudyFilterComponent } from './study-filter/study-filter/study-filter.component';
import { StudiesComponent } from './studies.component';

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