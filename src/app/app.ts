import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgClass, NgStyle } from '@angular/common';

interface Product {
  name: string;
  category: string;
  price: number;
  stock: number;
  status: 'Available' | 'Out of Stock';
  progress: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  imports: [FormsModule, NgClass, NgStyle]
})
export class App {

  // [(ngModel)]
  searchText = '';

  selectedCategory = 'All';

  // Dynamic theme
  selectedColor = 'blue';

  products: Product[] = [
    {
      name: 'iPhone 15',
      category: 'Mobile',
      price: 120000,
      stock: 15,
      status: 'Available',
      progress: 80
    },
    {
      name: 'MacBook Pro',
      category: 'Laptop',
      price: 250000,
      stock: 0,
      status: 'Out of Stock',
      progress: 20
    },
    {
      name: 'Samsung S24',
      category: 'Mobile',
      price: 180000,
      stock: 8,
      status: 'Available',
      progress: 60
    }
  ];


  // Search + category filtering
  get filteredProducts() {

    return this.products.filter(product => {

      const matchesSearch =
        product.name
          .toLowerCase()
          .includes(this.searchText.toLowerCase());

      const matchesCategory =
        this.selectedCategory === 'All' ||
        product.category === this.selectedCategory;

      return matchesSearch && matchesCategory;
    });

  }


  // Change product status
  changeStatus(product: Product) {

    if (product.status === 'Available') {

      product.status = 'Out of Stock';
      product.stock = 0;
      product.progress = 0;

    } else {

      product.status = 'Available';
      product.stock = 100;
      product.progress = 40;

    }

  }


  // Dynamic progress color
  getProgressColor(progress: number) {

    if (progress >= 70) {
      return 'green';
    }

    if (progress >= 40) {
      return 'orange';
    }

    return 'red';

  }


  // Dynamic theme
  getThemeClass() {

    return {
      'border-blue-500': this.selectedColor === 'blue',
      'border-purple-500': this.selectedColor === 'purple',
      'border-green-500': this.selectedColor === 'green'
    };

  }

}