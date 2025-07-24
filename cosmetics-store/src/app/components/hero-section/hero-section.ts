import { Component, CUSTOM_ELEMENTS_SCHEMA, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { register } from 'swiper/element/bundle';
import { SwiperOptions, Swiper } from 'swiper/types';

declare global {
  interface HTMLElement {
    swiper: any;
  }
  
}

// Enregistrer les composants Swiper
register();

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
export class HeroSectionComponent implements AfterViewInit {
  @ViewChild('swiper') swiperEl?: ElementRef;
  // Référence à l'instance Swiper
  private swiperInstance?: Swiper;

  // Configuration de Swiper
  public sliderConfig: SwiperOptions = {
    // Configuration de base
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    speed: 1000,
    
    // Autoplay
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
      waitForTransition: true
    },
    
    // Pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      type: 'bullets',
      dynamicBullets: true
    },
    
    // Navigation
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    
    // Effets
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    
    // Callbacks
    on: {
      init: (swiper: any) => {
        console.log('Swiper initialized');
        this.animateSlideIn(swiper.activeIndex);
      },
      slideChange: (swiper: any) => {
        console.log('Slide changed to', swiper.activeIndex);
        this.animateSlideIn(swiper.activeIndex);
      },
      autoplayStart: () => console.log('Autoplay started'),
      autoplayStop: () => console.log('Autoplay stopped')
    },
    
    // Options supplémentaires
    watchOverflow: true,
    updateOnWindowResize: true,
    observer: true,
    observeParents: true,
    observeSlideChildren: true
  };

  // Méthode pour obtenir la classe de position du texte
  getTextPositionClass(position: string): string {
    return `text-${position || 'center'}`;
  }

  private animateSlideIn(slideIndex: number) {
    // Réinitialiser les animations
    const slides = document.querySelectorAll('.swiper-slide');
    slides.forEach((slide: any, index: number) => {
      if (index === slideIndex) {
        const title = slide.querySelector('.slide-title');
        const subtitle = slide.querySelector('.slide-subtitle');
        const button = slide.querySelector('.btn');

        if (title) {
          title.style.opacity = '0';
          title.style.transform = 'translateY(30px)';
          setTimeout(() => {
            title.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            title.style.opacity = '1';
            title.style.transform = 'translateY(0)';
          }, 100);
        }

        if (subtitle) {
          subtitle.style.opacity = '0';
          subtitle.style.transform = 'translateY(30px)';
          setTimeout(() => {
            subtitle.style.transition = 'opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s';
            subtitle.style.opacity = '1';
            subtitle.style.transform = 'translateY(0)';
          }, 200);
        }

        if (button) {
          button.style.opacity = '0';
          button.style.transform = 'translateY(30px)';
          setTimeout(() => {
            button.style.transition = 'opacity 0.8s ease 0.4s, transform 0.8s ease 0.4s';
            button.style.opacity = '1';
            button.style.transform = 'translateY(0)';
          }, 300);
        }
      }
    });
  }


  // Données des slides
  slides: HeroSlide[] = [
    {
      id: 1,
      title: 'Beauty & Spa',
      subtitle: 'Découvrez nos soins de beauté naturels et biologiques pour une peau éclatante',
      image: '/assets/images/slide1.jpg',
      buttonText: 'Découvrir la collection',
      buttonLink: '/shop',
      textPosition: 'center'
    },
    {
      id: 2,
      title: 'Soins du visage',
      subtitle: 'Des produits de soin de la peau de haute qualité pour tous les types de peau',
      image: '/assets/images/slide2.jpg',
      buttonText: 'Voir les produits',
      buttonLink: '/collections/visage',
      textPosition: 'center'                
    }
  ];

  // Données des mises en avant
  highlights: HighlightItem[] = [
    {
      id: 1,
      title: 'Livraison gratuite',
      subtitle: 'À partir de 50€ d\'achat',
      image: '/assets/icons/truck.svg',
      link: '/shipping'
    },
    {
      id: 2,
      title: 'Paiement sécurisé',
      subtitle: 'Paiement 100% sécurisé',
      image: '/assets/icons/credit-card.svg',
      link: '/payment'
    },
    {
      id: 3,
      title: 'Retour facile',
      subtitle: 'Retour sous 30 jours',
      image: '/assets/icons/refresh-cw.svg',
      link: '/returns'
    },
    {
      id: 4,
      title: 'Service client',
      subtitle: 'Assistance 7j/7',
      image: '/assets/icons/headphones.svg',
      link: '/contact'
    }
  ];

  // Initialisation après le rendu de la vue
  ngAfterViewInit() {
    this.initSwiper();
  }

  // Initialisation manuelle de Swiper
  private initSwiper() {
    if (this.swiperEl?.nativeElement) {
      // Configuration de base
      const swiperEl = this.swiperEl.nativeElement;
      
      // Initialisation manuelle
      Object.assign(swiperEl, this.sliderConfig);
      
      // Initialisation de Swiper
      swiperEl.initialize();
      
      // Stockage de l'instance
      this.swiperInstance = swiperEl.swiper;
      
      // Démarrage de l'autoplay de manière sécurisée
      if (this.swiperInstance && 'autoplay' in this.swiperInstance) {
        const autoplay = (this.swiperInstance as any).autoplay;
        if (autoplay && typeof autoplay.start === 'function') {
          autoplay.start();
        }
      }
      
      console.log('Swiper initialized manually:', this.swiperInstance);
    } else {
      console.error('Swiper container not found');
    }
  }

  // Données des bannières
  banners: BannerItem[] = [
    {
      id: 1,
      title: 'Soins visage',
      subtitle: 'Découvrez notre gamme complète de soins pour le visage',
      image: '/assets/images/slide1.jpg',
      link: '/collections/soins-visage',
      buttonText: 'Découvrir'
    },
    {
      id: 2,
      title: 'Parfums',
      subtitle: 'Trouvez votre fragrance préférée parmi nos parfums exclusifs',
      image: '/assets/images/slide2.jpg',
      link: '/collections/parfums',
      buttonText: 'Explorer'
    }
  ];


}


