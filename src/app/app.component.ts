// app.component.ts
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { filter, map, switchMap } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
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
      { charset: 'utf-8' }
    ]);

    // Open Graph tags pour les réseaux sociaux
    this.metaService.addTags([
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: 'Cosmetics Store' },
      { property: 'og:image', content: '/assets/images/og-image.jpg' },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' }
    ]);

    // Twitter Card tags
    this.metaService.addTags([
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: '@cosmeticsstore' },
      { name: 'twitter:image', content: '/assets/images/og-image.jpg' }
    ]);
  }

  // Méthode pour afficher le loading lors de navigation
  onRouterOutletActivated(event: any) {
    // Peut être utilisé pour des animations de transition
  }
}