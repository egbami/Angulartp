// src/app/header/header.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Important pour les directives comme *ngIf, *ngFor etc.
import { RouterLink } from '@angular/router'; // Important pour routerLink

@Component({
  selector: 'app-header',
  standalone: true, // <-- Ajoutez cette ligne
  imports: [CommonModule, RouterLink], // <-- Ajoutez cette ligne et importez RouterLink
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class HeaderComponent {

}
