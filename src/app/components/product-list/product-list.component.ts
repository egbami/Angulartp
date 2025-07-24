import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../product-card/product-card.component';
import { ProductDetailsComponent } from '../product-details/product-details.component';

interface Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  description: string;
}

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCardComponent, ProductDetailsComponent],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})


export class ProductListComponent {
  products: Product[] = [
    {
      id: 1,
      name: 'Crème Hydratante',
      price: 19.99,
      imageUrl: 'assets/products/creme-hydratante.jpg',
      description: 'Une crème pour hydrater votre peau toute la journée.'
    },
    {
      id: 2,
      name: 'Sérum Visage',
      price: 29.99,
      imageUrl: 'assets/products/serum-visage.jpg',
      description: 'Sérum anti-âge pour une peau éclatante.'
    },
    // Ajoute d'autres produits ici
  ];

  selectedProduct: Product | null = null;

  selectProduct(product: Product) {
    this.selectedProduct = product;
  }
}
