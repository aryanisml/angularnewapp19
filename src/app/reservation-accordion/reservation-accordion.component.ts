export interface Reservation {
  name: string;
  unitNumber?: string;
  towNumber?: string;
  vehicleType: string;
  tripType: string;
  customerType: string;
  hasPhone: boolean;
  hasFavorite: boolean;
  hasWarning: boolean;
  accentColor: string;
  assigned: boolean;
}

// time-slot.model.ts
export interface TimeSlot {
  time: string;
  reservations: Reservation[];
}

// location.model.ts
export interface Location {
  name: string;
  id: string;
  reservationCount: number;
  timeSlots: TimeSlot[];
  isOpen: boolean;
}

// reservation-schedule.component.ts
import { Component } from '@angular/core';
import { ReservationCardComponent } from '../reservation-card/reservation-card.component';


@Component({
  selector: 'app-reservation-accordion',
  templateUrl: './reservation-accordion.component.html',
  styleUrls: ['./reservation-accordion.component.scss'],
  standalone:true,
  imports :[ReservationCardComponent]
})
export class ReservationAccordionComponent {
  locations: Location[] = [
    {
      name: 'Penske Reading',
      id: '0666-10',
      reservationCount: 15,
      isOpen: true,
      timeSlots: [
        {
          time: '09:00 AM',
          reservations: [
            {
              name: 'Edward Smith',
              vehicleType: 'Cube Van Shelf',
              tripType: 'Round Trip',
              customerType: 'Consumer',
              hasPhone: true,
              hasFavorite: false,
              hasWarning: false,
              accentColor: 'gray',
              assigned: false
            }
          ]
        },
        {
          time: '10:00 AM',
          reservations: [
            {
              name: 'REC Corp',
              vehicleType: 'Cube Van Shelf',
              tripType: 'Round Trip',
              customerType: 'Commercial',
              hasPhone: true,
              hasFavorite: false,
              hasWarning: false,
              accentColor: 'gray',
              assigned: false
            },
            {
              name: 'Hubert Blaine Wolfe',
              unitNumber: '#544387',
              towNumber: '#987654',
              vehicleType: 'Refrigerator',
              tripType: 'Round Trip',
              customerType: 'Consumer',
              hasPhone: true,
              hasFavorite: true,
              hasWarning: false,
              accentColor: 'green',
              assigned: true
            },
            {
              name: 'Alexander Dough',
              towNumber: '#987654',
              vehicleType: 'Box Truck',
              tripType: 'One Way',
              customerType: 'Commercial',
              hasFavorite: true,
              hasWarning: true,
              hasPhone: false,
              accentColor: 'red',
              assigned: true
            }
          ]
        },
        {
          time: '09:00 PM',
          reservations: [
            {
              name: 'John Stone',
              unitNumber: '#544387',
              towNumber: '#987654',
              vehicleType: 'Refrigerator',
              tripType: 'Lease',
              customerType: 'Substitute',
              hasPhone: false,
              hasFavorite: true,
              hasWarning: false,
              accentColor: 'green',
              assigned: true
            }
          ]
        },
        {
          time: '10:00 PM',
          reservations: [
            {
              name: 'MK',
              vehicleType: 'Refrigerator',
              tripType: '',
              customerType: '',
              hasPhone: false,
              hasFavorite: false,
              hasWarning: false,
              accentColor: 'red',
              assigned: true
            }
          ]
        }
      ]
    },
    {
      name: 'Pottstown Rental',
      id: '7570-10',
      reservationCount: 12,
      isOpen: false,
      timeSlots: []
    },
    {
      name: 'USS Pottstown',
      id: '6478-10',
      reservationCount: 18,
      isOpen: false,
      timeSlots: []
    }
  ];



  toggleLocation(location: Location): void {
    location.isOpen = !location.isOpen;
  }

  // Add this method to your reservation-accordion.component.ts file
getAccentColorSafe(color: string): 'green' | 'red' | 'blue' | 'gray' {
  // Check if the color value is one of the allowed values
  if (color === 'green' || color === 'red' || color === 'blue' || color === 'gray') {
    return color as 'green' | 'red' | 'blue' | 'gray';
  }
  
  // Return a default color if the provided color is not valid
  return 'green';
}


}