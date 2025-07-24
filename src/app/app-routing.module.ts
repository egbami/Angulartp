// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/* Import des composants (à créer par les autres membres)
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
*/
const routes: Routes = [
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    // Configuration du routing
    enableTracing: false, // Set to true for debugging
    scrollPositionRestoration: 'top',
    anchorScrolling: 'enabled',
    onSameUrlNavigation: 'reload',
    // Préchargement des modules lazy-loaded
    preloadingStrategy: 'default'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// Guards pour la sécurité (optionnel)
// export class AuthGuard implements CanActivate {
//   constructor(private router: Router, private authService: AuthService) {}
  
//   canActivate(): boolean {
//     if (this.authService.isLoggedIn()) {
//       return true;
//     }
//     this.router.navigate(['/login']);
//     return false;
//   }
// }