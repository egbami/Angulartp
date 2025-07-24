import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-test-image',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="test-container">
      <h1>Test d'affichage d'images</h1>
      
      <div class="image-test">
        <h3>Image 1 (slide1.jpg)</h3>
        <img src="assets/images/slide1.jpg" alt="Test Image 1" class="test-image">
        <p>Chemin: /assets/images/slide1.jpg</p>
      </div>

      <div class="image-test">
        <h3>Image 2 (slide2.jpg)</h3>
        <img src="assets/images/slide2.jpg" alt="Test Image 2" class="test-image">
        <p>Chemin: /assets/images/slide2.jpg</p>
      </div>

      <div class="help-section">
        <h2>Résolution du problème</h2>
        <p>Si vous ne voyez aucune image ci-dessus, vérifiez :</p>
        <ol>
          <li>Que les images existent bien dans le dossier <code>src/assets/images/</code></li>
          <li>Que le serveur de développement est en cours d'exécution</li>
          <li>Que la configuration des assets dans <code>angular.json</code> est correcte</li>
        </ol>
      </div>
    </div>
  `,
  styles: [`
    .test-container {
      max-width: 800px;
      margin: 0 auto;
      padding: 20px;
      font-family: Arial, sans-serif;
    }
    
    .image-test {
      margin: 30px 0;
      padding: 20px;
      border: 1px solid #ddd;
      border-radius: 5px;
      background-color: #f9f9f9;
    }
    
    .test-image {
      max-width: 100%;
      height: auto;
      margin: 15px 0;
      border: 1px solid #eee;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
    
    .help-section {
      margin-top: 40px;
      padding: 20px;
      background-color: #f5f5f5;
      border-radius: 5px;
    }
    
    code {
      background-color: #f0f0f0;
      padding: 2px 5px;
      border-radius: 3px;
      font-family: monospace;
    }
  `]
})
export class TestImageComponent {}
