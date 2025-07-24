import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
import { AboutComponent } from './pages/about/about';
import { ShopComponent } from './pages/shop/shop';
import { ContactComponent } from './pages/contact/contact';
import { TemoignageComponent } from './pages/testimonial/testimonial';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'shop', component: ShopComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'testimonial', component: TemoignageComponent },
  { path: '**', redirectTo: '' }
];
