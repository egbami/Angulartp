# Hero Section Component

Ce composant Angular représente la section héro du site web d'une boutique de cosmétiques. Il comprend un slider principal, une section de mises en avant et des bannières promotionnelles.

## Fonctionnalités

- **Slider Principal** : Affichage de diapositives avec des images en arrière-plan, des titres, des sous-titres et des boutons d'appel à l'action.
- **Mises en avant** : Section mettant en valeur les avantages de la boutique (livraison, paiement sécurisé, etc.).
- **Bannières** : Bannières promotionnelles avec images, textes et boutons d'appel à l'action.
- **Design Responsive** : Adaptation à toutes les tailles d'écran, des mobiles aux grands écrans.
- **Animations** : Transitions fluides et effets de survol pour une meilleure expérience utilisateur.

## Structure du composant

- **hero-section.component.ts** : Logique du composant et données
- **hero-section.component.html** : Structure HTML du composant
- **hero-section.component.css** : Styles spécifiques au composant

## Données

Le composant utilise trois tableaux de données principaux :

1. **slides** : Contient les informations pour chaque diapositive du slider
2. **highlights** : Contient les informations pour les mises en avant
3. **banners** : Contient les informations pour les bannières promotionnelles

## Installation

1. Assurez-vous que les dépendances suivantes sont installées :
   - Angular
   - Swiper.js (pour le slider)

2. Copiez le dossier `hero-section` dans votre répertoire de composants.

3. Importez le composant dans votre module principal :

```typescript
import { HeroSectionComponent } from './components/hero-section/hero-section.component';

@NgModule({
  declarations: [
    // ...
    HeroSectionComponent
  ],
  // ...
})
```

## Personnalisation

### Couleurs

Les couleurs principales peuvent être modifiées dans le fichier CSS :

- Couleur de fond du slider : `rgba(0, 0, 0, 0.5)`
- Couleur des boutons : `#000` (noir) avec effet de survol transparent
- Couleur du texte : `#fff` (blanc) sur fond sombre

### Images

Les images doivent être placées dans le dossier `assets/images/` et référencées dans les tableaux de données.

### Icônes

Les icônes SVG sont stockées dans le dossier `assets/icons/` et peuvent être remplacées selon les besoins.

## Responsive

Le composant est entièrement responsive et s'adapte à différentes tailles d'écran :

- Grands écrans (> 1200px) : Mise en page complète
- Tablettes (768px - 991px) : Ajustement des tailles de police et des espacements
- Mobiles (< 767px) : Empilement des éléments et optimisation pour les petits écrans

## Navigateurs supportés

- Chrome (dernière version)
- Firefox (dernière version)
- Safari (dernière version)
- Edge (dernière version)
- Mobile Safari (iOS)
- Chrome pour Android

## Licence

Ce composant est sous licence MIT. N'hésitez pas à l'utiliser et à le modifier selon vos besoins.
