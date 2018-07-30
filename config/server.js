/**Importar o módulo do framework express */
var express = require('express');
/**Importa o módulo do consign */
var consign = require('consign');
/**Importa o módulo do body-parser */
var bodyParser = require('body-parser');
/**Importa o módulo do express-validator */
var expressValidator = require('express-validator');

/**Importa o módulo do express-Sessio */
var expressSession = require('express-session');


/**Iniciar o Objeto do express */
var app = express();

/*Setar as variáveis 'view engine' e 'views' do express*/
app.set('view engine', 'ejs');
app.set('views', './app/views');

/*Configurar o middleware express.static*/
app.use(express.static('./app/public'));

/**Configurar o middleware body-parser */
app.use(bodyParser.urlencoded({ extended: true }));

/**Configurar o middleware express-validator */
app.use(expressValidator());

/**Configurar o middleware express-Session */
app.use(expressSession({
    secret: 'jDaEsijfu',
    resave: false,
    saveUninitialized: false
}));

/**Efetua o autoload das rotas, dos models e dos controllers para o objeto app */
consign()
    .include('app/routes')
    .then('config/dbConnection.js')
    .then('app/models')
    .then('app/controllers')
    .into(app);

/**Exportar o objeto app */
module.exports = app;