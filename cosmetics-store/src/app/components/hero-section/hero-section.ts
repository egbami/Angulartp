import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface HeroSlide {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  buttonText: string;
  buttonLink: string;
  textPosition: 'left' | 'center' | 'right';
}

interface HighlightItem {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  link: string;
}

interface BannerItem {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  link: string;
  buttonText: string;
}

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './hero-section.html',
  styleUrls: ['./hero-section.css'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HeroSectionComponent {


  // Données des slides
  slides: HeroSlide[] = [
    {
      id: 1,
      title: 'Nouvelle Collection Printemps',
      subtitle: 'Découvrez nos produits frais pour une peau éclatante',
      image: 'assets/images/hero-slide-1.jpg',
      buttonText: 'Acheter maintenant',
      buttonLink: '/shop',
      textPosition: 'center'
    },
    {
      id: 2,
      title: 'Soins de la peau bio',
      subtitle: 'Des ingrédients naturels pour une peau saine',
      image: 'assets/images/hero-slide-2.jpg',
      buttonText: 'Découvrir',
      buttonLink: '/collections/skincare',
      textPosition: 'right'
    },
    {
      id: 3,
      title: 'Parfums exclusifs',
      subtitle: 'Des fragrances uniques pour chaque personnalité',
      image: 'assets/images/hero-slide-3.jpg',
      buttonText: 'Explorer',
      buttonLink: '/collections/fragrances',
      textPosition: 'left'
    }
  ];

  // Données des mises en avant
  highlights: HighlightItem[] = [
    {
      id: 1,
      title: 'Livraison gratuite',
      subtitle: 'À partir de 50€ d\'achat',
      image: 'assets/icons/shipping.svg',
      link: '/shipping'
    },
    {
      id: 2,
      title: 'Paiement sécurisé',
      subtitle: '100% sécurisé',
      image: 'assets/icons/payment.svg',
      link: '/payment'
    },
    {
      id: 3,
      title: 'Retour facile',
      subtitle: 'Sous 30 jours',
      image: 'assets/icons/return.svg',
      link: '/returns'
    },
    {
      id: 4,
      title: 'Service client',
      subtitle: '7j/7',
      image: 'assets/icons/support.svg',
      link: '/contact'
    }
  ];

  // Données des bannières
  banners: BannerItem[] = [
    {
      id: 1,
      title: 'Offre spéciale',
      subtitle: 'Jusqu\'à -30% sur les soins du visage',
      image: 'assets/images/banner-1.jpg',
      link: '/sale/facial-care',
      buttonText: 'Voir l\'offre'
    },
    {
      id: 2,
      title: 'Nouveautés',
      subtitle: 'Découvrez nos dernières arrivées',
      image: 'assets/images/banner-2.jpg',
      link: '/new-arrivals',
      buttonText: 'Voir les produits'
    }
  ];



  // Méthode pour obtenir la classe de position du texte
  getTextPositionClass(position: string): string {
    return `text-${position}`;
  }
}


