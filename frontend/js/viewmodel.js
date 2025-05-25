import {
    obtenirAnimals,
    afegirAnimal,
    actualitzarAnimal,
    eliminarAnimal
} from './model.js';

import {
    mostrarAnimals,
    configurarFormulari
} from './view.js';

let idEditant = null;

async function carregarAnimals() {
    const animals = await obtenirAnimals();
    mostrarAnimals(animals, prepararEdicio, manejarEliminar);
}

async function manejarNouAnimal(animal) {
    if (idEditant) {
        await actualitzarAnimal(idEditant, animal);
        idEditant = null;
    } else {
        await afegirAnimal(animal);
    }

    await carregarAnimals();
}

function prepararEdicio(animal) {
    const formulari = document.getElementById('formulari-animal');
    formulari.nom.value = animal.nom;
    formulari.especie.value = animal.especie;
    formulari.edat.value = animal.edat;
    formulari.propietari.value = animal.propietari;
    formulari.observacions.value = animal.observacions || '';
    idEditant = animal._id;
}

async function manejarEliminar(id) {
    const confirmat = window.confirm("Segur que vols eliminar aquest registre d'animal?");
    if (!confirmat) return;

    await eliminarAnimal(id);
    await carregarAnimals();
}

export function inicialitzarApp() {
    carregarAnimals();
    configurarFormulari(manejarNouAnimal);
}
