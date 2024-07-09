import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectivePronounsComponent } from './subjective-pronouns.component';

describe('SubjectivePronounsComponent', () => {
  let component: SubjectivePronounsComponent;
  let fixture: ComponentFixture<SubjectivePronounsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubjectivePronounsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubjectivePronounsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
