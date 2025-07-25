// src/app/products/product-list/product-list.component.ts
import { Component, OnInit } from '@angular/core'; // Importez OnInit
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from '../product-card/product-card'; // Importez ProductCardComponent
import { PRODUCTS, Product } from '../../data/products.data'; // Importez les données et l'interface Product

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCardComponent], // Ajoutez ProductCardComponent ici
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})
export class ProductListComponent implements OnInit {
  products: Product[] = []; // Tableau pour stocker les produits

  ngOnInit(): void {
    this.products = PRODUCTS;
  }
}
