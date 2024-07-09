import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReflexivePronounsComponent } from './reflexive-pronouns.component';

describe('ReflexivePronounsComponent', () => {
  let component: ReflexivePronounsComponent;
  let fixture: ComponentFixture<ReflexivePronounsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReflexivePronounsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReflexivePronounsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
