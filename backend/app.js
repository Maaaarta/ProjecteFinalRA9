// backend/app.js
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 3000;
const connectDB = require('./config/db');
connectDB();


// Middleware per JSON
app.use(express.json());

// Connexió MongoDB
mongoose.connect('mongodb://localhost:27017/veterinaria', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("✅ Connexió a MongoDB establerta");
}).catch((error) => {
    console.error("❌ Error connectant a MongoDB:", error);
});

// Rutes (de moment buides)
app.get('/', (req, res) => {
    res.send('API Veterinària activa!');
});

// Escoltar port
app.listen(PORT, () => {
    console.log(`🚀 Servidor escoltant al port ${PORT}`);
});
