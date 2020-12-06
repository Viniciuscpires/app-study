import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudyTitleComponent } from './study-title.component';

@NgModule({
  declarations: [StudyTitleComponent],
  exports: [StudyTitleComponent],
  imports: [CommonModule]
})
export class StudyTitleModule {}
