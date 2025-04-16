import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

// Updated variant types to include base and secondary
export type ChipVariant = 'base' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info';
export type ChipSize = 'sm' | 'md' | 'lg';

export interface EnhancedChipItem {
  id: string | number;
  label: string;
  removable?: boolean;
  selected?: boolean;
  variant?: ChipVariant;
  size?: ChipSize;
  icon?: string; // Material icon name or custom SVG path
  disabled?: boolean;
}

@Component({
  selector: 'app-enhanced-chip',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div 
      class="inline-flex items-center rounded-full cursor-pointer transition-all border h-[26px] max-h-[26px]"
      [ngClass]="[
        getChipColorClasses(),
        disabled ? 'opacity-50 cursor-not-allowed' : '',
        removable ? 'pr-2' : 'pr-3'
      ]"
      (click)="!disabled && onChipClick()">
      
      <!-- Icon (if provided) -->
      <span *ngIf="icon" class="ml-2 mr-1 flex items-center justify-center">
        <svg *ngIf="icon.startsWith('path:')" class="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor">
          <path [attr.d]="icon.replace('path:', '')"></path>
        </svg>
        <span *ngIf="!icon.startsWith('path:')" class="material-icons text-sm">{{ icon }}</span>
      </span>
      
      <!-- Label -->
      <span [ngClass]="icon ? 'pl-0' : 'pl-3'" class="text-xs leading-none chiptitle">{{ label }}</span>
      
      <!-- Remove button -->
      <button 
        *ngIf="removable && !disabled" 
        class="ml-1.5 focus:outline-none flex items-center justify-center"
        [ngClass]="getCloseButtonClasses()"
        (click)="onRemove($event)">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
        </svg>
      </button>
    </div>
  `,
   styleUrls: ['./enhanced-chip.component.scss'],
})
export class EnhancedChipComponent {
  @Input() id!: string | number;
  @Input() label!: string;
  @Input() removable: boolean = true;
  @Input() selected: boolean = false;
  @Input() variant: ChipVariant = 'base';
  @Input() size: ChipSize = 'md';
  @Input() icon: string = '';
  @Input() disabled: boolean = false;

  @Output() remove = new EventEmitter<string | number>();
  @Output() click = new EventEmitter<string | number>();

  onRemove(event: MouseEvent): void {
    event.stopPropagation();
    if (!this.disabled) {
      this.remove.emit(this.id);
    }
  }

  onChipClick(): void {
    if (!this.disabled) {
      this.click.emit(this.id);
    }
  }

  getCloseButtonClasses(): string {
    if (this.selected) {
      switch (this.variant) {
        case 'primary': return 'text-white hover:text-gray-200';
        case 'secondary': return 'text-white hover:text-gray-200';
        case 'success': return 'text-white hover:text-gray-200';
        case 'warning': return 'text-white hover:text-gray-200';
        case 'danger': return 'text-white hover:text-gray-200';
        case 'info': return 'text-white hover:text-gray-200';
        case 'base':
        default: return 'text-gray-400 hover:text-gray-600';
      }
    } else {
      switch (this.variant) {
        case 'primary': return 'text-blue-500 hover:text-blue-700';
        case 'secondary': return 'text-purple-500 hover:text-purple-700';
        case 'success': return 'text-green-500 hover:text-green-700';
        case 'warning': return 'text-yellow-600 hover:text-yellow-800';
        case 'danger': return 'text-red-500 hover:text-red-700';
        case 'info': return 'text-indigo-500 hover:text-indigo-700';
        case 'base':
        default: return 'text-gray-400 hover:text-gray-600';
      }
    }
  }

  getChipColorClasses(): string {
    if (this.selected) {
      // Selected state overrides variant
      switch (this.variant) {
        case 'primary': return 'bg-blue-600 text-white border-blue-600';
        case 'secondary': return 'bg-purple-600 text-white border-purple-600';
        case 'success': return 'bg-green-600 text-white border-green-600';
        case 'warning': return 'bg-yellow-600 text-white border-yellow-600';
        case 'danger': return 'bg-red-600 text-white border-red-600';
        case 'info': return 'bg-indigo-600 text-white border-indigo-600';
        case 'base':
        default: return 'bg-white text-gray-700 border-gray-300';
      }
    } else {
      // Unselected state
      switch (this.variant) {
        case 'primary': return 'bg-white text-blue-600 border-blue-300 hover:bg-blue-50';
        case 'secondary': return 'bg-white text-purple-600 border-purple-300 hover:bg-purple-50';
        case 'success': return 'bg-white text-green-600 border-green-300 hover:bg-green-50';
        case 'warning': return 'bg-white text-yellow-600 border-yellow-300 hover:bg-yellow-50';
        case 'danger': return 'bg-white text-red-600 border-red-300 hover:bg-red-50';
        case 'info': return 'bg-white text-indigo-600 border-indigo-300 hover:bg-indigo-50';
        case 'base':
        default: return 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50';
      }
    }
  }
}