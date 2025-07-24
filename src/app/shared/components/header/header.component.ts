// header.component.ts
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isMenuOpen = false;
  isSearchOpen = false;
  cartItemsCount = 0;

  constructor(private router: Router) {}

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  toggleSearch() {
    this.isSearchOpen = !this.isSearchOpen;
  }

  navigateTo(route: string) {
    this.router.navigate([route]);
    this.isMenuOpen = false; // Fermer le menu mobile après navigation
  }

  onSearch(searchTerm: string) {
    if (searchTerm.trim()) {
      this.router.navigate(['/products'], { queryParams: { search: searchTerm } });
      this.isSearchOpen = false;
    }
  }
}