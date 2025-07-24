import { Routes } from '@angular/router';

import { Contact } from './contact/contact';

import { About } from './about/about';

//et importer sa classe aussi 

export const routes: Routes = [
   { path: 'contact', component: Contact},
   { path: 'about', component: About},
];  //venir déclarer pour témoignages hein ils sont là seulement pour casser les couilles
