const express = require('express');
const router = express.Router();
const Animal = require('../models/Animal');

// GET Llistar tots els animals
router.get('/animals', async (req, res) => {
    try {
        const animals = await Animal.find();
        res.json(animals);
    } catch (err) {
        res.status(500).json({ message: 'Error en obtenir els animals' });
    }
});

// POST Afegir un nou animal
router.post('/animals', async (req, res) => {
    const nouAnimal = new Animal(req.body);
    try {
        const animalDesat = await nouAnimal.save();
        res.status(201).json(animalDesat);
    } catch (err) {
        res.status(400).json({ message: 'Error en desar l\'animal', error: err });
    }
});

module.exports = router;
