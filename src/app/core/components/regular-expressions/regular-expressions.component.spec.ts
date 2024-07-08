import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegularExpressionsComponent } from './regular-expressions.component';

describe('RegularExpressionsComponent', () => {
  let component: RegularExpressionsComponent;
  let fixture: ComponentFixture<RegularExpressionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegularExpressionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegularExpressionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
