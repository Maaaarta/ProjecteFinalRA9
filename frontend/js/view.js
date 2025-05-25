export function mostrarAnimals(animals, onEdit, onDelete) {
    const llista = document.getElementById('llista-animals');
    llista.innerHTML = `
        <table class="taula-animals">
            <thead>
                <tr>
                    <th>Nom</th>
                    <th>Espècie</th>
                    <th>Edat</th>
                    <th>Propietari</th>
                    <th>Observacions</th>
                    <th>Imatge</th>
                    <th>Accions</th>
                </tr>
            </thead>
            <tbody id="cos-taula-animals"></tbody>
        </table>
    `;

    const cosTaula = document.getElementById('cos-taula-animals');

    animals.forEach(animal => {
        const fila = document.createElement('tr');

        const imatgeSrc = animal.imatge || 'https://via.placeholder.com/60';

        fila.innerHTML = `
            <td>${animal.nom}</td>
            <td>${animal.especie}</td>
            <td>${animal.edat}</td>
            <td>${animal.propietari}</td>
            <td>${animal.observacions || ''}</td>
            <td><img src="${imatgeSrc}" alt="Null" class="imatge-animal"></td>
            <td>
                <button class="boto-editar btn-editar">✏️</button>
                <button class="boto-eliminar btn-eliminar">❌</button>
            </td>
        `;

        fila.querySelector('.btn-editar').addEventListener('click', () => onEdit(animal));
        fila.querySelector('.btn-eliminar').addEventListener('click', () => onDelete(animal._id));

        cosTaula.appendChild(fila);
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
missatge.textContent = "Llista carregada amb èxit!";
setTimeout(() => { missatge.textContent = ""; }, 3000);
