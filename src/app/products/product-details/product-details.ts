// src/app/products/product-details/product-details.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router'; // Importez ActivatedRoute et Router
import { PRODUCTS, Product } from '../../data/products.data'; // Importez vos données de produits

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css'
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined; // Le produit à afficher, peut être indéfini

  constructor(
    private route: ActivatedRoute, // Pour accéder aux paramètres de l'URL
    private router: Router // Pour rediriger si le produit n'est pas trouvé
  ) {}

  ngOnInit(): void {
    // Récupérer l'ID du produit depuis l'URL
    const productId = Number(this.route.snapshot.paramMap.get('id'));

    // Trouver le produit correspondant dans notre tableau de données
    this.product = PRODUCTS.find(p => p.id === productId);

    // Si le produit n'est pas trouvé, rediriger vers la page d'accueil ou une page 404
    if (!this.product) {
      console.warn(`Produit avec ID ${productId} non trouvé. Redirection vers l'accueil.`);
      this.router.navigate(['/']); // Redirige vers la page d'accueil
    }
  }

  // Méthode pour revenir à la liste des produits (bouton "Retour")
  goBack(): void {
    this.router.navigate(['/shop']); // Redirige vers la page de la boutique
  }
}