const express = require('express');
const cors = require('cors')


class Server{

    constructor(){
        this.app = express();
        this.puerto = process.env.PORT;
        
        // Middlewares:
        this.middlewares();

        // Rutas: 
        this.routes();
    }

    middlewares(){
        // Public
        this.app.use( express.static('public') );
        
        // CORS
        this.app.use(cors());

        // Lectura y parseo de body    #para leer datos de un POST
        this.app.use( express.json() );

    }

    routes(){
        this.app.use( '/api/usuarios', require('../routes/user') );
    }

    listen(){
        this.app.listen(this.puerto);
    }

}


module.exports = Server;