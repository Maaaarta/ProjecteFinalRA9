// token; 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
// backend/config/db.js
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
