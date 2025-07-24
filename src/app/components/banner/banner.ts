import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from '../button/button';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  templateUrl: './banner.html',
  styleUrls: ['./banner.css']
})
export class BannerComponent {
  @Input() title = 'Bienvenue';
  @Input() subtitle = 'Découvrez nos produits';
  @Input() imageUrl = '/assets/images/banner.jpg';
}
