var mongoose = require('mongoose');

var VooSchema = new mongoose.Schema({
    origem: String,
    destino: String,
    assentos: Number,
    dataOrigem: Date,
    dataDestino: Date,
    precoBasico: Number,
    precoExecutivo: Number,
    aberto: Boolean
});

module.exports = mongoose.model('Voo', VooSchema);
