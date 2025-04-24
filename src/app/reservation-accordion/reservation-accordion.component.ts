// reservation-accordion.component.ts
import { Component, OnInit, OnDestroy } from '@angular/core';
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
      time: '11:00 AM',
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
      time: '11:10 AM',
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
      time: '11:15 AM',
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
      time: '11:36 AM',
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
      time: '11:45 AM',
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
      time: '11:55 PM',
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
      time: '01:15 PM',
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
  
  constructor() {}

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
 // Modified calculateTimeIndicatorPosition method

private calculateTimeIndicatorPosition(): void {
  const now = this.currentTime;
  const currentHour = now.getHours();
  const currentMinute = now.getMinutes();
  
  // Reset visibility - always default to not visible
  this.timeIndicatorVisible = false;
  this.currentTimeSlot = null;
  
  // Get visible time slots that have reservations
  const slotsWithReservations = this.getAllTimeSlots().filter(slot => 
    slot.reservations && slot.reservations.length > 0
  );
  
  if (slotsWithReservations.length === 0) {
    return; // No slots with reservations, exit early
  }
  
  // First check: Does a time slot exist for the current hour?
  const currentHourSlot = slotsWithReservations.find(slot => {
    const slotTime = this.parseTimeString(slot.time);
    return slotTime && slotTime.hours === currentHour;
  });
  
  // If we have a slot for the current hour, set indicator for that slot only
  if (currentHourSlot) {
    this.timeIndicatorVisible = true;
    this.currentTimeSlot = currentHourSlot.time;
    this.currentTimePercentage = (currentMinute / 60) * 100;
    return; // Exit early - we found our slot
  }
  
  // If we reach here, there's no slot for the current hour
  // We should NOT show indicator between slots when the current hour doesn't have its own slot
  
  // To be certain, explicitly set these to default values
  this.timeIndicatorVisible = false;
  this.currentTimeSlot = null;
  this.currentTimePercentage = 0;
}
  

  // Generate locations with reservations grouped by hour
  private generateLocations(): Location[] {
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
      .flatMap(loc => loc.timeSlots)
      .filter(slot => slot.reservations.length > 0);
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
    return this.timeIndicatorVisible && slot.time === this.currentTimeSlot &&  
    slot.reservations.length > 0;
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
  
has30MinutesPassedFromFirstReservation(reservations: any[]): boolean {
  if (!reservations || reservations.length < 2) return false;

  // Get all reservation times in minutes from the start of the day
  const reservationMinutes: number[] = [];
  for (const reservation of reservations) {
    const timeObj = this.parseTimeString(reservation.exactTime || reservation.time);
    if (!timeObj) continue;
    
    const totalMinutes = timeObj.hours * 60 + timeObj.minutes;
    reservationMinutes.push(totalMinutes);
  }
  
  // Sort times in ascending order
  reservationMinutes.sort((a, b) => a - b);
  
  // Check for gaps between consecutive reservations
  for (let i = 0; i < reservationMinutes.length - 1; i++) {
    const gap = reservationMinutes[i + 1] - reservationMinutes[i];
    
    // If there's a gap of at least 20 minutes, show divider
    if (gap >= 20) {
      return true;
    }
  }
  
  // Also check if any reservation crosses the half-hour mark
  const hourSlot = this.parseTimeString(reservations[0].time);
  if (!hourSlot) return false;
  
  const halfHourMark = hourSlot.hours * 60 + 30;
  let beforeHalfHour = false;
  let afterHalfHour = false;
  
  for (const minutes of reservationMinutes) {
    if (minutes < halfHourMark) beforeHalfHour = true;
    if (minutes >= halfHourMark) afterHalfHour = true;
  }
  
  return beforeHalfHour && afterHalfHour;
}

// Calculate the position of the divider based on reservations in a slot
calculateDividerPosition(reservations: any[]): string {
  if (!reservations || reservations.length < 2) return '50%';
  
  // Get all reservation times with their indices
  const reservationTimes: {minutes: number, index: number}[] = [];
  
  for (let i = 0; i < reservations.length; i++) {
    const timeObj = this.parseTimeString(reservations[i].exactTime || reservations[i].time);
    if (!timeObj) continue;
    
    const totalMinutes = timeObj.hours * 60 + timeObj.minutes;
    reservationTimes.push({minutes: totalMinutes, index: i});
  }
  
  // Sort by time
  reservationTimes.sort((a, b) => a.minutes - b.minutes);
  
  // Find the largest gap
  let maxGap = 0;
  let gapAfterIndex = 0;
  
  for (let i = 0; i < reservationTimes.length - 1; i++) {
    const gap = reservationTimes[i + 1].minutes - reservationTimes[i].minutes;
    if (gap > maxGap) {
      maxGap = gap;
      gapAfterIndex = i;
    }
  }
  
  // Calculate position based on reservations
  // If there's a significant gap, place divider proportionally between items
  if (maxGap >= 20) {
    // Place divider after a certain percentage of reservations
    const percentageComplete = (gapAfterIndex + 1) / reservations.length;
    const position = Math.min(85, Math.max(15, percentageComplete * 100));
    return `${position}%`;
  }
  
  // Default to middle if no significant gap
  return '50%';
}
}