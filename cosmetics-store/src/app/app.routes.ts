import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { TestImageComponent } from './test-image/test-image.component';

export const routes: Routes = [
  { path: '', component: Home, title: 'Home' },
  { path: 'test-image', component: TestImageComponent, title: 'Test Image' }
];
