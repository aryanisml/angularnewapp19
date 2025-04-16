import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibraryDemoComponent } from './library-demo.component';

describe('LibraryDemoComponent', () => {
  let component: LibraryDemoComponent;
  let fixture: ComponentFixture<LibraryDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LibraryDemoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LibraryDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
