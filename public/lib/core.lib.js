'use strict';

var path = require('path');
var hbs = require('express-handlebars');


function Sleekjs() {
   this.Layouts();
}
Sleekjs.prototype.Layouts = function(name) {

    var realpath = path.join(config.root, 'views');
    var layoutsDir = path.join(config.root, 'views/layouts'),
        partialsDir = path.join(config.root, 'views/partials'),
        defaultLayout = path.join(config.root, 'views/layouts', config.theme);


    app.set('views', realpath);
    var exphbs = hbs.create({
                layoutsDir:  layoutsDir,
                partialsDir: partialsDir,
                defaultLayout: defaultLayout,
                extname: config.template_engine               
            });
    app.engine(config.template_engine, exphbs.engine);           
    app.set('view engine', config.template_engine);

    this._renderView = function(fname,res,data){
        res.render(fname, data);
    }

}   

Sleekjs.prototype.Module = function(name) {
    this.name = name.toLowerCase();

    this.setModel =  function(model){
        try {
            return require(path.join(config.root, 'modules/'+ name, 'server/model', model+'.model'));
        } catch (err) {
            console.log(err);
        }
    };

    this.setController = function(controller){
        try { 
            return require(path.join(config.root, 'modules/'+ name, 'server/controller', controller+'.controller'));
        } catch (err) {
            console.log(err);
        }
        
    };
    this.setRouter = function(router){
        try {
            return require(path.join(config.root, 'modules/'+ name, 'server/', router+'.routes'));
        } catch (err) {
            console.log(err);
        }
        
    };
    
    // Middleware to expose the app's shared templates to the cliet-side of the app
    // for pages which need them.
    this.setLayout = function(layout){
        
        var mod_path = path.join(config.root, 'modules/'+ name, 'client/views');
       
        app.set('views', mod_path);

        var layoutsDir = path.join(config.root, 'views/layouts'),
            partialsDir = path.join(config.root, 'views/partials'),
            defaultLayout = path.join(config.root, 'views/layouts', config.theme);

        if(layout){ 
            layoutsDir = path.join(config.root, 'modules/'+ name, 'client/views/layouts');
            partialsDir = path.join(config.root, 'modules/'+ name, 'client/views/partials');
            defaultLayout = path.join(config.root, 'modules/'+ name, 'client/views/layouts', layout);               
        }
        var exphbs = hbs.create({
                layoutsDir:  layoutsDir,
                partialsDir: partialsDir,
                defaultLayout: defaultLayout,
                extname: config.template_engine               
            });
        app.engine(config.template_engine, exphbs.engine);           
        app.set('view engine', config.template_engine);

    };

};

module.exports = exports = new Sleekjs();