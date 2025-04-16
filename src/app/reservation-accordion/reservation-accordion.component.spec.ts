import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationAccordionComponent } from './reservation-accordion.component';

describe('ReservationAccordionComponent', () => {
  let component: ReservationAccordionComponent;
  let fixture: ComponentFixture<ReservationAccordionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReservationAccordionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservationAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
