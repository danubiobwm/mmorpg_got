module.exports = function(application) {
    application.get('/cadastro', function(req, res) {
        application.app.controllers.cadastro_controllers.cadastro(application, req, res);
    });

    /*formulario de cadastro*/
    application.post('/cadastrar', function(req, res) {
        application.app.controllers.cadastro_controllers.cadastrar(application, req, res);
    });


}