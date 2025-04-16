// unit-card.component.ts
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface UnitCardData {
  unitNumber: string;
  status: 'Available' | 'Due-in' | string;
  lineType: string;
  pmDate: string;
  location?: string;
}

@Component({
  selector: 'app-unit-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './unit-card.component.html',
  styleUrls: ['./unit-card.component.scss']
})
export class UnitCardComponent {
  @Input() data!: UnitCardData;

  getStatusColor(): { bg: string, text: string, outline: string, icon: string } {
    switch (this.data.status) {
      case 'Available':
        return {
          bg: 'bg-green-50',
          text: 'text-green-500',
          outline: 'outline-green-500',
          icon: 'bg-green-700'
        };
      case 'Due-in':
        return {
          bg: 'bg-red-50',
          text: 'text-red-500',
          outline: 'outline-red-500',
          icon: 'text-red-500'
        };
      default:
        return {
          bg: 'bg-gray-50',
          text: 'text-gray-500',
          outline: 'outline-gray-500',
          icon: 'bg-gray-500'
        };
    }
  }

  getStatusIcon(): string {
    switch (this.data.status) {
      case 'Available':
        return 'check';
      case 'Due-in':
        return 'calendar';
      default:
        return 'info';
    }
  }
}