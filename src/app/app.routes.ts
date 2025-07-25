// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { Home } from './home/home';
import { ProductListComponent } from './products/product-list/product-list';
import { ProductDetailsComponent } from './products/product-details/product-details';

import { Component } from '@angular/core';

@Component({
  standalone: true,
  template: '<h2>Page Boutique</h2><p>Contenu de la page boutique.</p>'
})
class ShopComponent {} // Composant temporaire pour la boutique

@Component({
  standalone: true,
  template: '<h2>Page Témoignages</h2><p>Contenu des témoignages.</p>'
})
class TestimonialsComponent {} // Composant temporaire pour les témoignages

@Component({
  standalone: true,
  template: '<h2>Page À Propos</h2><p>Contenu de la page à propos.</p>'
})
class AboutComponent {} // Composant temporaire pour A Propos

@Component({
  standalone: true,
  template: '<h2>Page Contact</h2><p>Contenu de la page de contact.</p>'
})
class ContactComponent {} // Composant temporaire pour Contact


export const routes: Routes = [
  { path: '', component: Home }, // Page d'accueil (Home)
  { path: 'shop', component: ProductListComponent }, // Page Boutique
  { path: 'product/:id', component: ProductDetailsComponent },
  { path: 'testimonials', component: TestimonialsComponent }, // Page Témoignages
  { path: 'about', component: AboutComponent }, // Page À Propos
  { path: 'contact', component: ContactComponent }, // Page Contact
  { path: '**', redirectTo: '' } // Route générique pour les URL introuvables (redirige vers Home)
];