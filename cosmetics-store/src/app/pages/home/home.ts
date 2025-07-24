import { Component } from '@angular/core';
import { HeroSectionComponent } from '../../components/hero-section/hero-section';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroSectionComponent],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  
}
