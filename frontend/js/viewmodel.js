import { obtenirAnimals, afegirAnimal } from './model.js';
import { mostrarAnimals, configurarFormulari } from './view.js';

async function carregarAnimals() {
    const animals = await obtenirAnimals();
    mostrarAnimals(animals);
}

async function manejarNouAnimal(animal) {
    await afegirAnimal(animal);
    await carregarAnimals();
}

export function inicialitzarApp() {
    carregarAnimals();
    configurarFormulari(manejarNouAnimal);
}
