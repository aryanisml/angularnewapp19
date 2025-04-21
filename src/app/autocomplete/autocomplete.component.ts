
// app/models/autocomplete-item.model.ts
export interface AutocompleteItem {
  id: string | number;
  name: string;
  category: string;
}

// app/components/autocomplete/autocomplete.component.ts
import { Component, Input, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Subscription, debounceTime, distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'app-autocomplete',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './autocomplete.component.html',
  styleUrl: './autocomplete.component.css'
})
export class AutocompleteComponent implements OnInit, OnDestroy {
  @Input() items: AutocompleteItem[] = [];
  @Input() placeholder = 'Search...';
  @Output() selected = new EventEmitter<AutocompleteItem>();
  
  searchControl = new FormControl('');
  filteredItems: AutocompleteItem[] = [];
  categories: string[] = [];
  showDropdown = false;
  highlightedIndex = -1;
  
  private subscription: Subscription | null = null;
  
  ngOnInit(): void {
    // Extract unique categories
    this.updateCategories();
    
    // Set up the search input subscriber
    this.subscription = this.searchControl.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged()
    ).subscribe(value => {
      this.filterItems(value || '');
      this.showDropdown = true;
      this.highlightedIndex = -1;
    });
  }
  
  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
  
  updateCategories(): void {
    // Get unique categories
    this.categories = [...new Set(this.items.map(item => item.category))];
  }
  
  filterItems(query: string): void {
    if (!query.trim()) {
      this.filteredItems = [...this.items];
      return;
    }
    
    const lowerQuery = query.toLowerCase();
    this.filteredItems = this.items.filter(item => 
      item.name.toLowerCase().includes(lowerQuery)
    );
  }
  
  selectItem(item: AutocompleteItem): void {
    this.searchControl.setValue(item.name);
    this.selected.emit(item);
    this.showDropdown = false;
  }
  
  // Get items for a specific category
  getItemsByCategory(category: string): AutocompleteItem[] {
    return this.filteredItems.filter(item => item.category === category);
  }
  
  // Track categories for better performance
  trackByCategory(index: number, category: string): string {
    return category;
  }
  
  // Track items for better performance
  trackByItem(index: number, item: AutocompleteItem): string | number {
    return item.id;
  }
  
  // Handle keyboard navigation
  onKeyDown(event: KeyboardEvent): void {
    const totalItems = this.filteredItems.length;
    
    if (totalItems === 0) return;
    
    switch (event.key) {
      case 'ArrowDown':
        event.preventDefault();
        this.highlightedIndex = (this.highlightedIndex + 1) % totalItems;
        break;
      case 'ArrowUp':
        event.preventDefault();
        this.highlightedIndex = (this.highlightedIndex - 1 + totalItems) % totalItems;
        break;
      case 'Enter':
        event.preventDefault();
        if (this.highlightedIndex >= 0 && this.highlightedIndex < totalItems) {
          this.selectItem(this.filteredItems[this.highlightedIndex]);
        }
        break;
      case 'Escape':
        event.preventDefault();
        this.showDropdown = false;
        break;
    }
  }
  
  onFocus(): void {
    this.filterItems(this.searchControl.value || '');
    this.showDropdown = true;
  }
  
  onBlur(): void {
    // Delay hiding to allow click events to trigger
    setTimeout(() => {
      this.showDropdown = false;
    }, 150);
  }
}