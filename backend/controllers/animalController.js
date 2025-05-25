const Animal = require('../models/Animal');

exports.getAllAnimals = async (req, res) => {
    try {
        const animals = await Animal.find();
        res.json(animals);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.createAnimal = async (req, res) => {
    try {
        const { nom, especie, edat, propietari, observacions } = req.body;

        const nouAnimal = new Animal({
            nom,
            especie,
            edat,
            propietari,
            observacions,
            imatge: req.file ? req.file.filename : null
        });

        const animalDesat = await nouAnimal.save();
        res.status(201).json(animalDesat);
    } catch (error) {
        console.error('Error creant animal:', error);
        res.status(400).json({ error: 'Error en crear l\'animal' });
    }
};

exports.deleteAnimal = async (req, res) => {
    try {
        await Animal.findByIdAndDelete(req.params.id);
        res.status(204).end();
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.updateAnimal = async (req, res) => {
    try {
        const { id } = req.params;

        const updatedData = {
            nom: req.body.nom,
            especie: req.body.especie,
            edat: req.body.edat,
            propietari: req.body.propietari,
            observacions: req.body.observacions,
        };
        const updatedAnimal = await Animal.findByIdAndUpdate(id, updatedData, { new: true });

        if (!updatedAnimal) {
            return res.status(404).json({ missatge: 'Animal no trobat' });
        }

        res.json(updatedAnimal);
    } catch (error) {
        console.error(error);
        res.status(500).json({ missatge: 'Error actualitzant l\'animal' });
    }
};

