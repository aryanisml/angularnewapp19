import { Component, EventEmitter, Input, Output } from '@angular/core';
import { EnhancedChipComponent } from '../enhanced-chip/enhanced-chip.component';
import { CommonModule } from '@angular/common';
export type ChipVariant = 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'info';
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
  selector: 'app-enhanced-chip-list',
  standalone: true,
  imports: [CommonModule, EnhancedChipComponent],
  template: `
    <div class="flex flex-wrap gap-2">
      <app-enhanced-chip
        *ngFor="let chip of chips"
        [id]="chip.id"
        [label]="chip.label"
        [removable]="chip.removable !== false"
        [selected]="chip.selected ?? false"
        [size]="chip.size || 'md'"
        [icon]="chip.icon || ''"
        [disabled]="chip.disabled ?? false"
        (remove)="onRemoveChip($event)"
        (click)="onChipClick($event)">
      </app-enhanced-chip>
    </div>
  `,
  styles: []
})
export class EnhancedChipListComponent {
  @Input() chips: EnhancedChipItem[] = [];
  
  @Output() chipRemoved = new EventEmitter<string | number>();
  @Output() chipClicked = new EventEmitter<string | number>();

  onRemoveChip(id: string | number): void {
    this.chipRemoved.emit(id);
  }

  onChipClick(id: string | number): void {
    this.chipClicked.emit(id);
  }
}