var mongoose = require('mongoose');

var PassagemSchema = new mongoose.Schema({
    _voo: {type: mongoose.Schema.Types.ObjectId, ref: 'Voo', required: true},
    tipoAssento: String,
    numeroAssento: Number,
    nomePassageiro: String
});

module.exports = mongoose.model('Passagem', PassagemSchema);
