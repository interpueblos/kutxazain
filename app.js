var express         = require("express"),
    app             = express(),
    bodyParser      = require("body-parser"),
    methodOverride  = require("method-override"),
    mongoose        = require('mongoose');

// Connection to DB
mongoose.connect('mongodb://localhost:27017/Kutxazain', function(err, res) {
  if(err) throw err;
  console.log('Connected to bank Database');
});

// Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

// Import Models and controllers
var models     = require('./models/kutxazainModel')(app, mongoose);
var KutxazainCtrl = require('./controllers/kutxazainController');

// Example Route
var router = express.Router();
router.get('/', function(req, res) {
  res.send("Hello boot!");
});
app.use(router);

// API routes
var kutxazainak = express.Router();

kutxazainak.route('/kutxazain')
  .get(KutxazainCtrl.findAllKutxazain)
  .post(KutxazainCtrl.addKutxazain);

kutxazainak.route('/kutxazain/:id')
  .get(KutxazainCtrl.findById)
  .put(KutxazainCtrl.updateKutxazain)
  .delete(KutxazainCtrl.deleteKutxazain);

app.use('/api', kutxazainak);

// Start server
app.listen(3000, function() {
  console.log("Node server running on http://localhost:3000");
});