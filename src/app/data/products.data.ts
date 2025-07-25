// src/app/data/products.data.ts

export interface Product {
  id: number;
  name: string;
  image: string; // URL de l'image du produit
  price: number;
  description: string;
  category: string;
}

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Sérum Anti-Âge Éclat",
    image: "https://via.placeholder.com/250x250/F8D8C9/555555?text=Serum_Eclat",
    price: 49.99,
    description: "Un sérum puissant pour réduire les signes de l'âge et redonner de l'éclat à votre peau.",
    category: "Soins Visage"
  },
  {
    id: 2,
    name: "Huile Corporelle Coco",
    image: "https://via.placeholder.com/250x250/C9D8F8/555555?text=Huile_Coco",
    price: 25.50,
    description: "Hydrate et nourrit intensément avec un parfum exotique de noix de coco.",
    category: "Soins Corps"
  },
  {
    id: 3,
    name: "Crème Hydratante Quotidienne",
    image: "https://via.placeholder.com/250x250/D8C9F8/555555?text=Creme_Jour",
    price: 35.00,
    description: "Une crème légère pour une hydratation longue durée, idéale pour un usage quotidien.",
    category: "Soins Visage"
  },
  {
    id: 4,
    name: "Nettoyant Visage Purifiant",
    image: "https://via.placeholder.com/250x250/F8C9D8/555555?text=Nettoyant_Purifiant",
    price: 19.99,
    description: "Élimine les impuretés et l'excès de sébum pour une peau fraîche et nette.",
    category: "Soins Visage"
  },
  {
    id: 5,
    name: "Kit de Maquillage Essentiel",
    image: "https://via.placeholder.com/250x250/C9F8D8/555555?text=Kit_Maquillage",
    price: 75.00,
    description: "Tout ce dont vous avez besoin pour un maquillage parfait au quotidien.",
    category: "Maquillage"
  },
  {
    id: 6,
    name: "Masque Capillaire Réparateur",
    image: "https://via.placeholder.com/250x250/D8F8C9/555555?text=Masque_Cheveux",
    price: 22.75,
    description: "Répare les cheveux abîmés et leur redonne force et brillance.",
    category: "Soins Cheveux"
  }
];