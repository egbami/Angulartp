// src/app/products/product-card/product-card.component.ts
import { Component, Input } from '@angular/core'; // Importez Input
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router'; // Pour le lien vers les détails du produit
import { Product } from '../../data/products.data'; // Importez l'interface Product

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule, RouterLink], // Ajoutez RouterLink
  templateUrl: './product-card.html',
  styleUrl: './product-card.css'
})
export class ProductCardComponent {
  @Input() product!: Product; // Déclarez une propriété d'entrée 'product'
}
