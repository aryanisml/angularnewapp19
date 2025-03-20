import { Component, input } from '@angular/core';
import { TruckReservationComponent } from './truck-reservation/truck-reservation.component';

import { SelectModule } from 'primeng/select';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';
interface City {
  name: string;
  code: string;
}
@Component({
  selector: 'app-root',
  imports: [TruckReservationComponent, SelectModule, CommonModule, FormsModule, DropdownModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone:true
})
export class AppComponent {
   locationCode = input.required<string>();
  title = 'angularbuild';
  cities: City[] | undefined;

  selectedCity: City | undefined;

  ngOnInit() {
      this.cities = [
          { name: 'New York', code: 'NY' },
          { name: 'Rome', code: 'RM' },
          { name: 'London', code: 'LDN' },
          { name: 'Istanbul', code: 'IST' },
          { name: 'Paris', code: 'PRS' }
      ];
  }
}
