// src/app/app.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header'; // Assurez-vous que cet import est correct

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent // Votre HeaderComponent est importé ici
  ],
  // Corrigez l'URL du template ici :
  templateUrl: './app.html', // <-- CETTE LIGNE EST LA CORRECTION
  styleUrl: './app.css'
})
export class AppComponent {
  title = 'cosmetics-store';
}
