import { Injectable } from '@angular/core';
import { Animal } from '../../exos/exo1/Animal.model';

@Injectable({
  providedIn: 'root',
})
export class AnimalService {
  private animals: Animal[] = [
    {
      nom: 'Max',
      age: 5,
      parents: [],
      race: 'Chien',
      sexe: 'Mâle',
      couleur: 'Noir',
    },
    {
      nom: 'Mia',
      age: 4,
      parents: [],
      race: 'Chat',
      sexe: 'Femelle',
      couleur: 'Blanc',
    },
    {
      nom: 'Perry',
      age: 3,
      parents: [],
      race: 'Ornithorynque',
      sexe: 'Mâle',
      couleur: 'Vert',
    },
    // Ajoutez d'autres animaux ici selon vos besoins
  ]; // Un tableau privé pour stocker les objets Animal

  constructor() {}

  // Méthode pour ajouter un nouvel animal au tableau
  addAnimal(animal: Animal) {
    this.animals.push(animal);
  }

  // Méthode pour obtenir tous les animaux stockés
  getAnimals(): Animal[] {
    return [...this.animals]; // Retourne une copie du tableau pour éviter la manipulation directe
  }

  // Méthode pour obtenir un animal spécifique par son nom
  getAnimalByName(nom: string): Animal | null {
    const foundAnimal = this.animals.find((animal) => animal.nom === nom);
    return foundAnimal !== undefined ? foundAnimal : null;
  }
}
