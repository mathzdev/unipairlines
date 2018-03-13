var express = require('express');
var router = express.Router();

/* GET Página inicial. */
router.get('/', function (req, res) {
    res.render('index', {
        title: "Voo's"
    });
});

/* GET Página Passagens. */
router.get('/passagens', function (req, res) {
    res.render('passagens', {
        title: 'Passagens'
    });
});

/* GET Página Alunos. */
router.get('/alunos', function (req, res) {
    res.render('alunos', {
        title: 'Alunos'
    });
});

/* GET Página API. */
router.get('/api', function (req, res) {
    res.render('api', {
        title: 'API'
    });
});

module.exports = router;
