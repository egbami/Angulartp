// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// Routing
import { AppRoutingModule } from './app-routing.module';

// Components
import { RouterModule } from '@angular/router';   // <-- important
import { CommonModule } from '@angular/common';   // <-- important

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';

/* Pages Components (à créer par les autres membres)
import { HomeComponent } from './pages/home/home.component';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { BlogComponent } from './pages/blog/blog.component';
import { CartComponent } from './pages/cart/cart.component';
import { WishlistComponent } from './pages/wishlist/wishlist.component';
import { AccountComponent } from './pages/account/account.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

// Services
import { ProductService } from './core/services/product.service';
import { CartService } from './core/services/cart.service';
import { WishlistService } from './core/services/wishlist.service';
import { AuthService } from './core/services/auth.service';

// Pipes personnalisés (optionnel)
import { CurrencyPipe } from './shared/pipes/currency.pipe';
import { TruncatePipe } from './shared/pipes/truncate.pipe';*/

@NgModule({
  declarations: [
    AppComponent,
    // Pages Components (à décommenter quand créés)
    // HomeComponent,                    // Membre 2
    // ProductListComponent,             // Membre 3
    // ProductDetailsComponent,          // Membre 3
    // AboutComponent,                   // Membre 4
    // ContactComponent,                 // Membre 4
    // BlogComponent,                    // Membre 4
    // CartComponent,
    // WishlistComponent,
    // AccountComponent,
    // CheckoutComponent,
    // PageNotFoundComponent,
    
    // Shared Components (Membre 5)
    // ButtonComponent,
    // BannerComponent,
    
    // Pipes personnalisés
    // CurrencyPipe,
    // TruncatePipe
  ],
  imports: [
    BrowserModule,
    AppComponent,
    HeaderComponent,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    // Services
    // ProductService,
    // CartService,
    // WishlistService,
    // AuthService,
    
    // Interceptors (optionnel)
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: AuthInterceptor,
    //   multi: true
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

// Instructions pour les autres membres :
// 
// Membre 2 (Hero Section + Accueil) :
// - Décommenter HomeComponent dans declarations
// - Créer le composant : ng generate component pages/home
// - Créer le composant : ng generate component shared/components/hero-section
//
// Membre 3 (Produits) :
// - Décommenter ProductListComponent, ProductDetailsComponent dans declarations
// - Créer : ng generate component pages/product-list
// - Créer : ng generate component pages/product-details
// - Créer : ng generate component shared/components/product-card
// - Décommenter ProductService dans providers
//
// Membre 4 (Footer + Pages secondaires) :
// - Décommenter AboutComponent, ContactComponent, BlogComponent dans declarations
// - Créer : ng generate component shared/components/footer
// - Créer : ng generate component pages/about
// - Créer : ng generate component pages/contact
// - Créer : ng generate component pages/blog
//
// Membre 5 (Composants réutilisables) :
// - Créer : ng generate component shared/components/button
// - Créer : ng generate component shared/components/banner
// - Ajouter les styles responsives globaux