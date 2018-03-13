var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Passagem = require('../models/Passagem.js');
var Voo = require('../models/Voo.js');

/* GET /passagem Listagem de passagens. */
router.get('/', function (req, res, next) {
    Passagem.find(function (err, passagem) {
        if (err) return next(err);
        res.json(passagem);
    });
});

/* POST /passagem Cadastro de passagem */
router.post('/', function (req, res, next) {
    Passagem.create(req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* GET /passagem/id  Lista filtrada por um passagem */
router.get('/:id', function (req, res, next) {
    Passagem.findById(req.params.id, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* PUT /passagem/:id Salva a edição de passagem */
router.put('/:id', function (req, res, next) {
    Passagem.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* DELETE /passagem/:id Deletando o passagem a partir do id */
router.delete('/:id', function (req, res, next) {
    Passagem.findByIdAndRemove(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* GET /passagem/disponivel/:id Listagem de passagens. */
router.get('/disponivel/:voo', function (req, res, next) {
    Passagem.find({'_voo': req.params.voo}, function (err, passagem) {
        if (err) return next(err);

        Voo.findById(req.params.voo, function (err, voo) {
            if (err) return next(err);
            res.json({
                'passagens': passagem,
                'voo': req.params.voo,
                'qtdPassagens': passagem.length,
                'capacidadeVoo': voo.assentos,
                'passagensRestantes': voo.assentos - passagem.length,
                'disponivel': voo.aberto
            });
        });
    });
});

module.exports = router;
