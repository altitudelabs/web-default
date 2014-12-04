var fs = require('fs');
var path = require('path');

module.exports = function (app) {
  app.get('/', function () {
    console.log('index');
  });

  app.get('*', function (req, res) {
    res.redirect('/');
  });

  // applying all the routes defined in ./controllers
  fs.readdirSync(path.join(__dirname, 'controllers')).forEach(function (file) {
    if(file.substr(-3) === '.js') {
      var route = require('./controllers/' + file);
      route(app);
    }
  });

};
