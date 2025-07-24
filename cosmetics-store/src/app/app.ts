import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './pages/home/home';
import { HeroSectionComponent } from './components/hero-section/hero-section';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Home, HeroSectionComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})

export class App {
  protected readonly title = signal('cosmetics-store');
}
