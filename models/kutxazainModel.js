exports = module.exports = function(app, mongoose) {

  var kutxazainSchema = new mongoose.Schema({
    entidad:    { type: String },
    numero:     { type: Number, min: 0 },
    coorX:      { type: Number},
    coorY:      { type: Number},
    municipio:     { type: String },
    CP:  { type: String },
    calle:   { type: String },
    horario:  { type: String },
    servicios:  { type: String }
  },{ collection: 'kutxazain'});

  mongoose.model('kutxazain', kutxazainSchema);

};