import { Component, ViewChild } from '@angular/core';
import { Animal } from './Animal.model';
import { AnimalService } from '../../shared/services/animal.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-exo1',
  templateUrl: './exo1.component.html',
  styleUrl: './exo1.component.scss',
})
export class Exo1Component {
  @ViewChild('form') form!: NgForm;
  selectedAnimal: Animal | null = null; // Propriété pour stocker l'animal actuellement sélectionné
  animals: Animal[] = []; // Tableau pour stocker les animaux

  selectedRace: string = '';
  customRace: string = '';
  isOtherSelected: boolean = false;

  // Constructeur qui injecte le service AnimalService
  constructor(private animalService: AnimalService) {}

  // Hook ngOnInit pour initialiser le composant
  ngOnInit(): void {
    this.animals = this.animalService.getAnimals(); // Récupère tous les animaux au démarrage du composant
  }

  onRaceChange(): void {
    this.isOtherSelected = this.selectedRace === 'autre';
    if (!this.isOtherSelected) {
      this.customRace = ''; // Réinitialiser la race personnalisée
    }
  }
  // Méthode pour ajouter un nouvel animal
  onAddAnimal(animalData: {
    nom: string;
    age: number;
    parents: Animal[];
    sexe: string;
    couleur: string;
  }) {
    const race = this.isOtherSelected ? this.customRace : this.selectedRace;
    const newAnimal: Animal = {
      nom: animalData.nom,
      age: animalData.age,
      parents: animalData.parents,
      race: race, // Utilisez 'race' ici
      sexe: animalData.sexe,
      couleur: animalData.couleur,
    };
    this.animalService.addAnimal(newAnimal);
    this.animals = this.animalService.getAnimals();
    this.form.resetForm();
  }

  // Méthode pour sélectionner un animal
  onSelectAnimal(animalNom: string): void {
    this.selectedAnimal = this.animalService.getAnimalByName(animalNom); // Sélectionne un animal par son nom
  }
}
