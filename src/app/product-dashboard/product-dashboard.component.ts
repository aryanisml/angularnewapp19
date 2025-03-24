import { Component, effect, inject, signal, computed } from '@angular/core';
import { HttpResource } from '@angular/common/http';
import { CommonModule, DecimalPipe } from '@angular/common';

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

@Component({
  selector: 'app-product-dashboard',
  standalone: true,
  imports: [CommonModule, DecimalPipe],
  template: `
    <div class="dashboard">
      <h1>Product Dashboard</h1>
      
      <div class="status">
        Status: {{ statusMessage() }}
      </div>
      
      <div class="stats" *ngIf="products().length > 0">
        <p>Total Products: {{ products().length }}</p>
        <p>Average Price: {{ averagePrice() | number:'1.2-2' }}</p>
      </div>
      
      <button (click)="loadProducts()">Refresh Products</button>
      
      <div class="products">
        <div *ngFor="let product of products()" class="product-card">
          <h3>{{ product.title }}</h3>
          <p>${{ product.price }}</p>
        </div>
      </div>
    </div>
  `
})
export class ProductDashboardComponent {
  // Angular 19 HttpResource
  private productResource:any = inject(HttpResource.forRoot<Product>('https://fakestoreapi.com/products'));
  
  // Signals
  products = signal<Product[]>([]);
  isLoading = signal<boolean>(false);
  error = signal<string | null>(null);
  lastLoadTime = signal<Date | null>(null);
  
  // Computed signal
  averagePrice = computed(() => {
    const prods = this.products();
    if (prods.length === 0) return 0;
    return prods.reduce((sum, product) => sum + product.price, 0) / prods.length;
  });
  
  // Status message computed from multiple signals
  statusMessage = computed(() => {
    if (this.isLoading()) return 'Loading products...';
    if (this.error()) return `Error: ${this.error()}`;
    if (this.products().length === 0) return 'No products loaded';
    
    const time = this.lastLoadTime();
    return `${this.products().length} products loaded at ${time?.toLocaleTimeString() || 'unknown time'}`;
  });
  
  constructor() {
    // Effect that runs whenever products change
    effect(() => {
      const productCount = this.products().length;
      
      // Log to console when products change
      console.log(`Product list updated with ${productCount} products`);
      
      // Save to localStorage when products change
      if (productCount > 0) {
        localStorage.setItem('lastProductCount', productCount.toString());
      }
    });
    
    // Initial data load
    this.loadProducts();
  }
  
  loadProducts() {
    this.isLoading.set(true);
    this.error.set(null);
    
    this.productResource.get().subscribe({
      next: (data :any) => {
        this.products.set(data);
        this.isLoading.set(false);
        this.lastLoadTime.set(new Date());
      },
      error: (err:any) => {
        console.error('Failed to load products', err);
        this.error.set(err.message || 'Failed to load products');
        this.isLoading.set(false);
      }
    });
  }
}