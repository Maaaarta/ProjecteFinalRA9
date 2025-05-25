const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/veterinaria', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('✅ Connexió a MongoDB establerta (config/db.js)');
    } catch (err) {
        console.error('❌ Error connectant a MongoDB:', err);
    }
};

module.exports = connectDB;
