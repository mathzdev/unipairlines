var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Voo = require('../models/Voo.js');

/* GET /voo Listagem de voos. */
router.get('/', function (req, res, next) {
    Voo.find(function (err, voo) {
        if (err) return next(err);
        res.json(voo);
    });
});

/* POST /voo Cadastro de voo */
router.post('/', function (req, res, next) {
    Voo.create(req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* GET /voo/id  Lista filtrada por um voo */
router.get('/:id', function (req, res, next) {
    Voo.findById(req.params.id, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* PUT /voo/:id Salva a edição de voo */
router.put('/:id', function (req, res, next) {
    Voo.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

/* DELETE /voo/:id Deletando o voo a partir do id */
router.delete('/:id', function (req, res, next) {
    Voo.findByIdAndRemove(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

module.exports = router;
