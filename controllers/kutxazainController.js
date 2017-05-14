//File: controllers/tvshows.js
var mongoose = require('mongoose');  
var Kutxazain  = mongoose.model('kutxazain');

//GET - Return all tvshows in the DB
exports.findAllKutxazain = function(req, res) {  
    Kutxazain.find(function(err, kutxazain) {
    if(err) res.send(500, "noooo "+err.message);

    console.log('GET /kutxazain')
        res.status(200).jsonp(kutxazain);
    });
};

//GET - Return a kutxazain with specified ID
exports.findById = function(req, res) {  
    Kutxazain.findById(req.params.id, function(err, kutxazain) {
    if(err) return res.send(500, err.message);

    console.log('GET /kutxazain/' + req.params.id);
        res.status(200).jsonp(kutxazain);
    });
};

//POST - Insert a new kutxazain in the DB
exports.addKutxazain = function(req, res) {  
    console.log('POST');
    console.log(req.body);

    var kutxazain = new Kutxazain({
        entidad:    req.body.entidad,
        numero:     req.body.numero,
        coorX:      req.body.coorX,
        coorY:      req.body.coorY,
        municipio:  req.body.municipio,
        CP:         req.body.CP,
        calle:      req.body.calle,
        horario:    req.body.horario,
        servicios:  req.body.servicios,
    });

    kutxazain.save(function(err, kutxazain) {
        if(err) return res.status(500).send( err.message);
    res.status(200).jsonp(kutxazain);
    });
};

//PUT - Update a register already exists
exports.updateKutxazain = function(req, res) {  
    Kutxazain.findById(req.params.id, function(err, kutxazain) {
        kutxazain.entidad=   req.body.entidad,
        kutxazain.numero=     req.body.numero,
        kutxazain.coorX=  req.body.coorX,
        kutxazain.coorY=   req.body.coorY,
        kutxazain.municipio=  req.body.municipio,
        kutxazain.CP=  req.body.CP,
        kutxazain.calle=  req.body.calle,
        kutxazain.horario=  req.body.horario,
        kutxazain.servicios=    req.body.servicios

        kutxazain.save(function(err) {
            if(err) return res.status(500).send(err.message);
      res.status(200).jsonp(kutxazain);
        });
    });
};

//DELETE - Delete a kutxazain with specified ID
exports.deleteKutxazain = function(req, res) {  
    Kutxazain.findById(req.params.id, function(err, kutxazain) {
        kutxazain.remove(function(err) {
            if(err) return res.status(500).send(err.message);
      res.status(200).send();
        })
    });
};
