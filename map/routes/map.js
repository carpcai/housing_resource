var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var Address = mongoose.model('Address');

/* GET Address listing. */
router.get('/', function (req, res, next) {
    //res.send('respond with a resource');
    res.render('map', {title: 'Express'});
});

router.get('/test', function (req, res, next) {

    Address.find({}, function (err, docs) {
        if (err) {
            res.end('Error');
            return next();
        }

        res.render('map',{title: docs} );
    });
});

router.get('/data', function (req, res, next) {

    Address.find({}, function (err, docs) {
        if (err) {
            res.end('Error');
            return next();
        }


        res.json(docs);
    });
});

module.exports = router;
