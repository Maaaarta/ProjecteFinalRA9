const mongoose = require('mongoose');

const animalSchema = new mongoose.Schema({
    nom: { type: String, required: true },
    especie: { type: String, required: true },
    edat: { type: Number, required: true },
    propietari: { type: String, required: true },
    observacions: { type: String }
});

module.exports = mongoose.model('Animal', animalSchema);
