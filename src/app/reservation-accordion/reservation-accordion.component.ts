// reservation-accordion.component.ts
import { Component, OnInit, OnDestroy, AfterViewInit, ElementRef, ViewChild, Renderer2 } from '@angular/core';
import { ReservationCardComponent } from '../reservation-card/reservation-card.component';
import { interval, Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';

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
  isPastDue: boolean;
  exactTime?: string; // Store the exact reservation time
}

export interface TimeSlot {
  time: string; // The hour-based time slot (e.g., "09:00 AM")
  reservations: Reservation[];
}

export interface Location {
  name: string;
  id: string;
  reservationCount: number;
  timeSlots: TimeSlot[];
  isOpen: boolean;
}

@Component({
  selector: 'app-reservation-accordion',
  templateUrl: './reservation-accordion.component.html',
  styleUrls: ['./reservation-accordion.component.scss'],
  standalone: true,
  imports: [CommonModule, ReservationCardComponent]
})
export class ReservationAccordionComponent implements OnInit, OnDestroy {
  // Current time related properties
  currentTime: Date = new Date();
  timeIndicatorVisible: boolean = false;
  currentTimeSlot: string | null = null;
  currentTimePercentage: number = 0;
  private timerSubscription!: Subscription;

  // Original data with exact reservation times
  private originalReservations = [
    {
      name: 'MK',
      time: '07:00 AM',
      vehicleType: 'Cube Van Shelf',
      tripType: 'Round Trip',
      customerType: 'Consumer',
      hasPhone: true,
      hasFavorite: true,
      hasWarning: false,
      accentColor: 'red',
      assigned: true,
      isPastDue: false,
      unitNumber: '',
      towNumber: ''
    },
    {
      name: 'John Stone',
      time: '09:00 AM',
      unitNumber: '#544387',
      towNumber: '#987654',
      vehicleType: 'Cube Van Shelf',
      tripType: 'Round Trip',
      customerType: 'Consumer',
      hasPhone: true,
      hasFavorite: true,
      hasWarning: false,
      accentColor: 'green',
      assigned: true,
      isPastDue: false
    },
    {
      name: 'Hubert Blaine Wolfe',
      time: '10:00 AM',
      unitNumber: '#544387',
      towNumber: '#987654',
      vehicleType: 'Cube Van Shelf',
      tripType: 'Round Trip',
      customerType: 'Consumer',
      hasPhone: true,
      hasFavorite: true,
      hasWarning: false,
      accentColor: 'green',
      assigned: true,
      isPastDue: false
    },
    {
      name: 'Alexander Dough',
      time: '10:15 AM',
      towNumber: '#987654',
      vehicleType: 'Cube Van Shelf',
      tripType: 'Round Trip',
      customerType: 'Consumer',
      hasFavorite: true,
      hasWarning: false,
      hasPhone: true,
      accentColor: 'red',
      assigned: true,
      isPastDue: false,
      unitNumber: ''
    },
    {
      name: 'Edward Smith',
      time: '10:45 AM',
      towNumber: '#987654',
      vehicleType: 'Cube Van Shelf',
      tripType: 'Round Trip',
      customerType: 'Consumer',
      hasFavorite: true,
      hasWarning: false,
      hasPhone: true,
      accentColor: 'red',
      assigned: true,
      isPastDue: false,
      unitNumber: ''
    },
    {
      name: 'Edward Smith',
      time: '01:00 PM',
      vehicleType: 'Cube Van Shelf',
      tripType: 'Round Trip',
      customerType: 'Consumer',
      hasPhone: true,
      hasFavorite: true,
      hasWarning: false,
      accentColor: 'gray',
      assigned: false,
      isPastDue: false,
      unitNumber: '',
      towNumber: ''
    },
    {
      name: 'REC Corp',
      time: '01:45 PM',
      vehicleType: 'Cube Van Shelf',
      tripType: 'Round Trip',
      customerType: 'Consumer',
      hasPhone: true,
      hasFavorite: true,
      hasWarning: false,
      accentColor: 'gray',
      assigned: false,
      isPastDue: false,
      unitNumber: '',
      towNumber: ''
    },
    {
      name: 'REC Corp3',
      time: '01:50 PM',
      vehicleType: 'Cube Van Shelf',
      tripType: 'Round Trip',
      customerType: 'Consumer',
      hasPhone: true,
      hasFavorite: true,
      hasWarning: false,
      accentColor: 'gray',
      assigned: false,
      isPastDue: false,
      unitNumber: '',
      towNumber: ''
    },
    {
      name: 'John Stone',
      time: '01:55 PM',
      unitNumber: '#544387',
      towNumber: '#987654',
      vehicleType: 'Cube Van Shelf',
      tripType: 'Round Trip',
      customerType: 'Consumer',
      hasPhone: true,
      hasFavorite: true,
      hasWarning: false,
      accentColor: 'green',
      assigned: true,
      isPastDue: false
    },
  ];

  // Locations with grouped time slots
  locations: Location[] = [];
  
  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    // Group reservations into hourly time slots for each location
    this.locations = this.generateLocations();
    
    // Initial calculation of time indicator position
    this.calculateTimeIndicatorPosition();
    
    // Update current time every minute
    this.timerSubscription = interval(60000).subscribe(() => {
      this.currentTime = new Date();
      this.calculateTimeIndicatorPosition();
    });
  }
  
  ngOnDestroy(): void {
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
    }
  }

  // Calculate where to show the time indicator
  private calculateTimeIndicatorPosition(): void {
    const now = this.currentTime;
    const currentHour = now.getHours();
    const currentMinute = now.getMinutes();
    
    // Reset visibility
    this.timeIndicatorVisible = false;
    this.currentTimeSlot = null;
    
    // Get all time slots in chronological order
    const allTimeSlots = this.getAllTimeSlots();
    
    // Find which time slot the current time falls in or between
    for (let i = 0; i < allTimeSlots.length; i++) {
      const slotTime = this.parseTimeString(allTimeSlots[i].time);
      if (!slotTime) continue;
      
      // Check if we're in this hour
      if (currentHour === slotTime.hours) {
        this.timeIndicatorVisible = true;
        this.currentTimeSlot = allTimeSlots[i].time;
        this.currentTimePercentage = (currentMinute / 60) * 100;
        break;
      }
      
      // If we're between this slot and the next one
      if (i < allTimeSlots.length - 1) {
        const nextSlotTime = this.parseTimeString(allTimeSlots[i + 1].time);
        if (!nextSlotTime) continue;
        
        const currentTimeInMinutes = currentHour * 60 + currentMinute;
        const slotTimeInMinutes = slotTime.hours * 60;
        const nextSlotTimeInMinutes = nextSlotTime.hours * 60;
        
        if (currentTimeInMinutes >= slotTimeInMinutes && currentTimeInMinutes < nextSlotTimeInMinutes) {
          this.timeIndicatorVisible = true;
          this.currentTimeSlot = allTimeSlots[i].time;
          
          // Calculate percentage between this slot and the next
          const totalMinutes = nextSlotTimeInMinutes - slotTimeInMinutes;
          const elapsedMinutes = currentTimeInMinutes - slotTimeInMinutes;
          this.currentTimePercentage = (elapsedMinutes / totalMinutes) * 100;
          break;
        }
      }
    }
  }

  // Generate locations with reservations grouped by hour
  private generateLocations(): Location[] {
    // Example - in a real app, this would use your data source
    const locations: Location[] = [
      {
        name: 'Penske Reading',
        id: '0666-10',
        reservationCount: this.originalReservations.length,
        isOpen: true,
        timeSlots: this.groupReservationsByHour(this.originalReservations)
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

    return locations;
  }

  // Group reservations into hourly time slots
  private groupReservationsByHour(reservations: any[]): TimeSlot[] {
    const hourGroups: { [key: string]: Reservation[] } = {};
    
    // Group reservations by hour
    reservations.forEach(reservation => {
      const timeObj = this.parseTimeString(reservation.time);
      if (!timeObj) return;
      
      // Create hourly time slot key (e.g., "09:00 AM")
      const hourKey = this.formatHourTimeSlot(timeObj.hours);
      
      if (!hourGroups[hourKey]) {
        hourGroups[hourKey] = [];
      }
      
      // Add reservation to its hour group with the exact time
      hourGroups[hourKey].push({
        ...reservation,
        exactTime: reservation.time
      });
    });
    
    // Convert grouped object to array of time slots
    const timeSlots: TimeSlot[] = Object.keys(hourGroups).map(hourKey => ({
      time: hourKey,
      reservations: hourGroups[hourKey].sort((a, b) => {
        // Sort reservations within each hour by their exact time
        const timeA = this.parseTimeString(a.exactTime || '');
        const timeB = this.parseTimeString(b.exactTime || '');
        if (!timeA || !timeB) return 0;
        
        const minutesA = timeA.hours * 60 + timeA.minutes;
        const minutesB = timeB.hours * 60 + timeB.minutes;
        return minutesA - minutesB;
      })
    }));
    
    // Sort time slots chronologically
    return timeSlots.sort((a, b) => {
      const timeA = this.parseTimeString(a.time);
      const timeB = this.parseTimeString(b.time);
      if (!timeA || !timeB) return 0;
      
      const minutesA = timeA.hours * 60 + timeA.minutes;
      const minutesB = timeB.hours * 60 + timeB.minutes;
      return minutesA - minutesB;
    });
  }

  // Find all time slots across all open locations
  getAllTimeSlots(): TimeSlot[] {
    return this.locations
      .filter(loc => loc.isOpen)
      .flatMap(loc => loc.timeSlots);
  }

  // Format an hour to a time slot string (e.g., 9 -> "09:00 AM")
  private formatHourTimeSlot(hours: number): string {
    const isPM = hours >= 12;
    const hour12 = hours % 12 || 12;
    const hour = hour12.toString().padStart(2, '0');
    return `${hour}:00 ${isPM ? 'PM' : 'AM'}`;
  }

  // Toggle location expansion
  toggleLocation(location: Location): void {
    location.isOpen = !location.isOpen;
    
    // Update time indicator after expansion/collapse
    setTimeout(() => {
      this.calculateTimeIndicatorPosition();
    }, 0);
  }

  // Handle color safely
  getAccentColorSafe(color: string): 'green' | 'red' | 'blue' | 'gray' {
    if (color === 'green' || color === 'red' || color === 'blue' || color === 'gray') {
      return color as 'green' | 'red' | 'blue' | 'gray';
    }
    return 'green';
  }

  // Get formatted current time
  getCurrentTimeString(): string {
    return this.currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }

  // Check if we should show time indicator for a specific time slot
  shouldShowTimeIndicatorForSlot(slot: TimeSlot): boolean {
    return this.timeIndicatorVisible && slot.time === this.currentTimeSlot;
  }
  
  // Helper to parse time strings like "09:00 AM" into hours and minutes
  parseTimeString(timeStr: string): { hours: number, minutes: number } | null {
    try {
      const match = timeStr.match(/(\d+):(\d+)\s*(AM|PM)/i);
      if (!match) return null;
      
      let hours = parseInt(match[1], 10);
      const minutes = parseInt(match[2], 10);
      const period = match[3].toUpperCase();
      
      // Convert to 24-hour format
      if (period === 'PM' && hours < 12) {
        hours += 12;
      } else if (period === 'AM' && hours === 12) {
        hours = 0;
      }
      
      return { hours, minutes };
    } catch (e) {
      return null;
    }
  }
}