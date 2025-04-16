import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnhancedChipListComponent } from './enhanced-chip-list.component';

describe('EnhancedChipListComponent', () => {
  let component: EnhancedChipListComponent;
  let fixture: ComponentFixture<EnhancedChipListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnhancedChipListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnhancedChipListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
