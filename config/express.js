const express    = require('express');
const config     = require('config');
const cors       = require('cors');
const path       = require('path');

module.exports = () => {
  const app = express();

  // SETANDO VARIÁVEIS DA APLICAÇÃO
  app.set('port', process.env.PORT || config.get('server.port'));
  app.use(express.static('public'));
  app.engine('html', require('ejs').renderFile);
  app.use(cors({
    credentials: true,
    origin: function(origin, callback) {
      callback(null, true)
    }
  }))

  app.route('/')
  .get((req, res) => {
    res.render('../index.html');
  })

  return app;
};