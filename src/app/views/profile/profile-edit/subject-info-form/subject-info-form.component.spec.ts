import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectInfoFormComponent } from './subject-info-form.component';

describe('SubjectInfoFormComponent', () => {
  let component: SubjectInfoFormComponent;
  let fixture: ComponentFixture<SubjectInfoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectInfoFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectInfoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
