import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app';
import { provideAnimations } from '@angular/platform-browser/animations'; // Souvent nécessaire, même si pas direct
import { provideHttpClient } from '@angular/common/http'; // Pour futures requêtes HTTP
import { registerLocaleData } from '@angular/common'; // Pour les données de localisation
import localeFr from '@angular/common/locales/fr'; // Importez les données de locale pour le français

registerLocaleData(localeFr); // Enregistrez la locale pour l'ensemble de l'application

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
