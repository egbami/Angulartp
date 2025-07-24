// src/app/app.component.ts
import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterModule, Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { Subscription, filter, map, switchMap } from 'rxjs';
import { CommonModule } from '@angular/common';

// Import du HeaderComponent
import { HeaderComponent } from './components/header/header';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule, HeaderComponent],
  template: `
    <app-header></app-header>
    <router-outlet (activate)="onRouterOutletActivated($event)"></router-outlet>
  `,
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'cosmetics-store';
  isLoading = false;
  private routerSubscription?: Subscription;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private titleService: Title,
    private metaService: Meta
  ) {}

  ngOnInit() {
    // Gestion dynamique des titres et meta tags
    this.setupRouterEvents();
    
    // Configuration des meta tags par défaut
    this.setDefaultMetaTags();
  }

  ngOnDestroy() {
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
  }

  private setupRouterEvents() {
    this.routerSubscription = this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        map(() => this.activatedRoute),
        map(route => {
          while (route.firstChild) {
            route = route.firstChild;
          }
          return route;
        }),
        switchMap(route => route.data)
      )
      .subscribe(data => {
        // Mise à jour du titre de la page
        if (data['title']) {
          this.titleService.setTitle(data['title']);
        }
        
        // Mise à jour de la description
        if (data['description']) {
          this.metaService.updateTag({
            name: 'description',
            content: data['description']
          });
        }
        
        // Scroll to top après navigation
        window.scrollTo(0, 0);
      });
  }

  private setDefaultMetaTags() {
    // Meta tags généraux
    this.metaService.addTags([
      { name: 'keywords', content: 'cosmétiques, beauté, soins, maquillage, skincare, produits de beauté' },
      { name: 'author', content: 'Cosmetics Store' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { charset: 'utf-8' },
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: 'Cosmetics Store' },
      { property: 'og:image', content: '/assets/images/og-image.jpg' },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: '@cosmeticsstore' },
      { name: 'twitter:image', content: '/assets/images/og-image.jpg' }
    ]);
  }

  // Méthode pour afficher le loading lors de navigation
  onRouterOutletActivated(event: any) {
    // futur loader ou animation
  }
}
