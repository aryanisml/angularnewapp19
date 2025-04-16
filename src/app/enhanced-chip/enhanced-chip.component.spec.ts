import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnhancedChipComponent } from './enhanced-chip.component';

describe('EnhancedChipComponent', () => {
  let component: EnhancedChipComponent;
  let fixture: ComponentFixture<EnhancedChipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnhancedChipComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnhancedChipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
