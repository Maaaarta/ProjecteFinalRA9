export function mostrarAnimals(animals) {
    const llista = document.getElementById('llista-animals');
    llista.innerHTML = '';

    animals.forEach(animal => {
        const item = document.createElement('li');
        item.textContent = `${animal.nom} | ${animal.especie} | ${animal.edat} anys | Propietari: ${animal.propietari} | Observacions: ${animal.observacions}`;
        llista.appendChild(item);
    });
}

export function configurarFormulari(onSubmit) {
    const formulari = document.getElementById('formulari-animal');
    formulari.addEventListener('submit', (e) => {
        e.preventDefault();
        const animal = {
            nom: formulari.nom.value,
            especie: formulari.especie.value,
            edat: parseInt(formulari.edat.value),
            propietari: formulari.propietari.value,
            observacions: formulari.observacions.value
        };
        onSubmit(animal);
        formulari.reset();
    });
}

const missatge = document.getElementById('missatge');
missatge.textContent = "Animal afegit amb èxit!";
setTimeout(() => { missatge.textContent = ""; }, 3000);
