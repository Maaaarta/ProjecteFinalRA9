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
        const newAnimal = new Animal(req.body);
        await newAnimal.save();
        res.status(201).json(newAnimal);
    } catch (err) {
        res.status(400).json({ error: err.message });
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
        const updated = await Animal.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updated);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};
