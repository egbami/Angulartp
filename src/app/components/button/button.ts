import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button
      [ngClass]="[
        'btn',
        variant ? 'btn-' + variant : 'btn-primary',
        size ? 'btn-' + size : 'btn-medium',
        fullWidth ? 'btn-full-width' : ''
      ]"
      [disabled]="disabled"
    >
      <ng-content></ng-content>
    </button>
  `,
  styles: [`
    .btn {
      padding: 0.5rem 1rem;
      border-radius: 6px;
      border: none;
      cursor: pointer;
      transition: all 0.3s ease-in-out;
      font-family: Arial, sans-serif;
    }
    .btn-primary {
      background-color: #ff4081;
      color: white;
    }
    .btn-primary:hover:not(:disabled) {
      background-color: #e0317d;
    }
  `]
})
export class ButtonComponent {
  @Input() variant: 'primary' | 'secondary' | 'outline' = 'primary'; 
  @Input() size: 'small' | 'medium' | 'large' = 'medium';
  @Input() fullWidth = false;
  @Input() disabled = false;
}