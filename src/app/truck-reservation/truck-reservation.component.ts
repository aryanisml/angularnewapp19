import { Component, HostListener, OnInit, signal, ViewEncapsulation } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { TabMenuModule } from 'primeng/tabmenu';
import { CalendarModule } from 'primeng/calendar';
import { CheckboxModule } from 'primeng/checkbox';
import { TagModule } from 'primeng/tag';
import { SelectModule } from 'primeng/select';
import { TranslatePipe } from '../translate.pipe';
import { ReservationCardComponent } from '../reservation-card/reservation-card.component';
import { ReservationAccordionComponent } from '../reservation-accordion/reservation-accordion.component';
import { Chip } from 'primeng/chip';
import { EnhancedChipListComponent } from '../enhanced-chip-list/enhanced-chip-list.component';
import { TabsModule } from 'primeng/tabs';
import { TabViewModule } from 'primeng/tabview';
import { UnitCardComponent } from '../unit-card/unit-card.component';
interface StatusOption {
  label: string;
  value: string;
}
 type ChipVariant = 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'info';
 type ChipSize = 'sm' | 'md' | 'lg';
 interface EnhancedChipItem {
  id: string | number;
  label: string;
  removable?: boolean;
  selected?: boolean;
  variant?: ChipVariant;
  size?: ChipSize;
  icon?: string; // Material icon name or custom SVG path
  disabled?: boolean;
}

interface Reservation {
  name: string;
  unitNumber: string;
  towNumber: string;
  vehicleType: string;
  tripType: string;
  customerType: string;
  hasPhone: boolean;
  hasFavorite: boolean;
  hasWarning: boolean;
  accentColor: 'green' | 'red' | 'blue' | 'gray';
  assigned : boolean;
}


@Component({
  selector: 'app-truck-reservation',
  templateUrl: './truck-reservation.component.html',
  styleUrls: ['./truck-reservation.component.scss'],
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TableModule,
    CardModule,
    ButtonModule,
    InputTextModule,
    DropdownModule,
    TabMenuModule,
    CalendarModule,
    CheckboxModule,
    TagModule,
    FormsModule,
    SelectModule,
    // TranslatePipe
    ReservationCardComponent,
    // ReservationAccordionComponent,
    Chip,
    EnhancedChipListComponent,
    TabsModule,
    TabViewModule,
    UnitCardComponent
  ]
})
export class TruckReservationComponent implements OnInit {
  blueChecked: boolean = true;
  grayChecked: boolean = true;
  redChecked: boolean = true;
  indentedChecked: boolean = false;
  title = 'angularbuild';
  cities: any[] | undefined;
  pizza: string[] = [];
  selectedCity: any | undefined;
  reservations: Reservation[] = [
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
      assigned:true
    },
    {
      name: 'Alexander Dough',
      unitNumber: '#542111',
      towNumber: '#987654',
      vehicleType: 'Box Truck',
      tripType: 'One Way',
      customerType: 'Commercial',
      hasFavorite: true,
      hasWarning: true,
      hasPhone: false,
      accentColor: 'red',
      assigned:true
    },
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
      assigned :false
    }
  ];
 



  tabItems: MenuItem[] = [];
  activeTab: number = 0;
  filterStatus = signal('');
  
  statusOptions = [
    { name: 'All', value: '' },
    { name: 'Active', value: 'active' },
    { name: 'Completed', value: 'completed' },
    { name: 'Cancelled', value: 'cancelled' }
  ];
  
  onStatusChange(event: any) {
    // Update the signal value
    this.filterStatus.set(event.value);
    console.log('Status changed to:', event.value);
    // Your filter logic here
  }

  
  isFilterModalOpen = false;
  startDate: string | null = null;
  endDate: string | null = null;
  
  toggleFilterModal(): void {
    this.isFilterModalOpen = !this.isFilterModalOpen;
  }
  
  closeFilterModal(): void {
    this.isFilterModalOpen = true;
  }
  
 
  
  onStartDateChange(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.startDate = inputElement.value;
  }
  
  onEndDateChange(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.endDate = inputElement.value;
  }
  
  applyFilters(): void {
    const filters = {
      status: this.filterStatus,
      startDate: this.startDate,
      endDate: this.endDate
    };
    
    //this.filtersChanged.emit(filters);
    this.closeFilterModal();
  }
  
  // Close modal when clicking outside
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    const targetElement = event.target as HTMLElement;
    const clickedInside = targetElement.closest('app-filter-button');
    if (!clickedInside && this.isFilterModalOpen) {
      this.closeFilterModal();
    }
  }
  
  // reservations = [
  //   { 
  //     id: '98765432', 
  //     customer: 'John Stone', 
  //     phone: '(215) 455 1212',
  //     vehicleType: 'Refrigerator', 
  //     tripType: 'One Way',
  //     pickupTime: '02/27/2025 01:25 PM',
  //     pickupLocation: '0666-10 25 Riverfront, Penske Plaza, Reading, PA 19602',
  //     dropoffTime: '03/01/2025 04:15 PM',
  //     dropoffLocation: '6370-10 802 Holly Springs Ave, VA 23224',
  //     status: 'Confirmed'
  //   },
  //   { 
  //     id: '98765433', 
  //     customer: 'Brian Chase', 
  //     phone: '(302) 555 7890',
  //     vehicleType: 'Parcel Van', 
  //     tripType: 'Round Trip',
  //     pickupTime: '02/28/2025 09:30 AM',
  //     pickupLocation: '0666-10 25 Riverfront, Penske Plaza, Reading, PA 19602',
  //     dropoffTime: '03/02/2025 11:45 AM',
  //     dropoffLocation: '6370-10 802 Holly Springs Ave, VA 23224',
  //     status: 'Active'
  //   },
  //   { 
  //     id: '98765434', 
  //     customer: 'Alexander Dough', 
  //     phone: '(717) 555 4321',
  //     vehicleType: 'Box Truck', 
  //     tripType: 'One Way',
  //     pickupTime: '03/01/2025 10:15 AM',
  //     pickupLocation: '0666-10 25 Riverfront, Penske Plaza, Reading, PA 19602',
  //     dropoffTime: '03/03/2025 01:30 PM',
  //     dropoffLocation: '6370-10 802 Holly Springs Ave, VA 23224',
  //     status: 'Pending'
  //   }
  // ];

  filterForm!: FormGroup;
  newReservationForm!: FormGroup;

  stats = {
    totalReservations: 32,
    unassignedReservations: 12,
    availableFleet: 43,
    pickupsToday: 15,
    dropoffsToday: 20,
    revenue: '$33M'
  };

  constructor(private fb: FormBuilder) { }

  ngOnInit() {

    this.cities = [
      { name: 'New York', code: 'NY' },
      { name: 'Rome', code: 'RM' },
      { name: 'London', code: 'LDN' },
      { name: 'Istanbul', code: 'IST' },
      { name: 'Paris', code: 'PRS' }
  ];
    this.tabItems = [
      { label: 'Reservation', icon: 'pi pi-calendar' },
      { label: 'Unit', icon: 'pi pi-truck' },
      { label: 'Tow & Supply', icon: 'pi pi-link' },
      { label: 'Customer', icon: 'pi pi-user' },
      { label: 'Payment', icon: 'pi pi-credit-card' },
      { label: 'Other Specs', icon: 'pi pi-cog' }
    ];

    this.filterForm = this.fb.group({
      customer: [''],
      reservationStatus: ['active'],
      vehicleType: [''],
      tripType: ['']
    });

    this.newReservationForm = this.fb.group({
      customer: ['', Validators.required],
      phone: ['', Validators.required],
      vehicleType: ['', Validators.required],
      pickupDate: ['', Validators.required],
      pickupTime: ['', Validators.required],
      pickupLocation: ['', Validators.required],
      dropoffDate: ['', Validators.required],
      dropoffTime: ['', Validators.required],
      dropoffLocation: ['', Validators.required],
      specialInstructions: ['']
    });
  }

  onFilter() {
    // Filter implementation would go here
    console.log('Filtering with:', this.filterForm.value);
  }

  onCreateReservation() {
    // Create reservation implementation would go here
    console.log('Creating reservation:', this.newReservationForm.value);
  }

  onTabChange(event: any) {
    this.activeTab = event.index;
  }

  basicChips: EnhancedChipItem[] = [
    { id: 'unassigned', label: 'Unassigned', selected: true },
    { id: 'commercial', label: 'Commercial', selected: true },
    { id: 'lease', label: 'Lease', selected: true },
    { id: 'one-way', label: 'One Way', selected: true },
    { id: 'round-trip', label: 'Round Trip', selected: true },
    { id: 'substitute', label: 'Substitute', selected: false },
    { id: 'accident', label: 'Accident', selected: false }
  ];

  // Color variant examples
  variantChips: EnhancedChipItem[] = [
    { id: 'default', label: 'Default', variant: 'default', removable: false },
    { id: 'primary', label: 'Primary', variant: 'primary', removable: false },
    { id: 'success', label: 'Success', variant: 'success', removable: false },
    { id: 'warning', label: 'Warning', variant: 'warning', removable: false },
    { id: 'danger', label: 'Danger', variant: 'danger', removable: false },
    { id: 'info', label: 'Info', variant: 'info', removable: false },
    { id: 'default-selected', label: 'Default Selected', variant: 'default', selected: true, removable: false },
  ];

  // Size examples
  sizeChips: EnhancedChipItem[] = [
    { id: 'small', label: 'Small Size', size: 'sm', variant: 'primary', removable: false },
    { id: 'medium', label: 'Medium Size', size: 'md', variant: 'primary', removable: false },
    { id: 'large', label: 'Large Size', size: 'lg', variant: 'primary', removable: false }
  ]
  // Icon examples
  iconChips: EnhancedChipItem[] = [
    { 
      id: 'location', 
      label: 'Location', 
      icon: 'path:M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z', 
      variant: 'info', 
      removable: false 
    },
    { 
      id: 'warning', 
      label: 'Warning', 
      icon: 'path:M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z', 
      variant: 'warning', 
      removable: false 
    },
    { 
      id: 'success', 
      label: 'Success', 
      icon: 'path:M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z', 
      variant: 'success', 
      removable: true 
    }
  ];

  // Disabled examples
  disabledChips: EnhancedChipItem[] = [
    { id: 'enabled', label: 'Enabled Chip', variant: 'primary', removable: true },
    { id: 'disabled', label: 'Disabled Chip', variant: 'primary', removable: true, disabled: true },
    { id: 'disabled-selected', label: 'Disabled Selected', variant: 'primary', selected: true, removable: true, disabled: true }
  ];

  toggleChip(id: string | number): void {
    // Toggle the selected state of the basic chip
    const chipIndex = this.basicChips.findIndex(chip => chip.id === id);
    if (chipIndex >= 0) {
      this.basicChips = [
        ...this.basicChips.slice(0, chipIndex),
        { ...this.basicChips[chipIndex], selected: !this.basicChips[chipIndex].selected },
        ...this.basicChips.slice(chipIndex + 1)
      ];
    }
  }
  
  removeChip(id: string | number): void {
    // Find the chip and update its selected state to false
    const chipIndex = this.basicChips.findIndex(chip => chip.id === id);
    if (chipIndex >= 0) {
      this.basicChips = [
        ...this.basicChips.slice(0, chipIndex),
        { ...this.basicChips[chipIndex], selected: false },
        ...this.basicChips.slice(chipIndex + 1)
      ];
    }
  }
  
  resetBasicChips(): void {
    // Reset all basic chips to default state
    this.basicChips = this.basicChips.map(chip => ({
      ...chip,
      selected: false
    }));
  }
  availableUnit: any = {
    unitNumber: '544387',
    status: 'Available',
    lineType: 'Wash Line',
    pmDate: '02/27/25'
  };

  dueInUnit: any = {
    unitNumber: '544387',
    status: 'Due-in',
    lineType: 'Service',
    pmDate: '02/27/25'
  };

  readyLineUnit: any = {
    unitNumber: '544387',
    status: 'Available',
    lineType: 'Ready Line',
    pmDate: '02/27/25',
    location: '6850-10'
  };
}