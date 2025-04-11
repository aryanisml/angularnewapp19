import { Component, CUSTOM_ELEMENTS_SCHEMA, Input, input, SimpleChanges } from '@angular/core';
import { TruckReservationComponent } from './truck-reservation/truck-reservation.component';

import { SelectModule } from 'primeng/select';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
import { ButtonModule } from 'primeng/button';
interface City {
  name: string;
  code: string;
}
@Component({
  selector: 'app-root',
  imports: [TruckReservationComponent, SelectModule, CommonModule, FormsModule, DropdownModule, ButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone:true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppComponent {
 
  @Input() locationCode: string = '';
  
  ngOnInit() {
    console.log('Component initialized with LocationCode:', this.locationCode);
    this.cities = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' }
  ];

  }
  
ngOnChanges(changes: SimpleChanges) {
    console.log('Input changes detected:', changes);
    if (changes['locationCode']) {
      console.log('New locationCode value:', changes['locationCode'].currentValue);
    }
  }

  title = 'angularbuild';
  cities: City[] | undefined;

  selectedCity: City | undefined;


}
