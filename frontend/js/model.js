const API_URL = 'http://localhost:3003/api/animals';

export async function obtenirAnimals() {
    const resposta = await fetch(API_URL);
    const dades = await resposta.json();
    return dades;
}

export async function afegirAnimal(animal) {
    const resposta = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(animal)
    });
    return await resposta.json();
}
