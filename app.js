const express = require('express');

class AppController {
    constructor() {
        this.express = express();
        this.middlewares();
        this.routes();
    }
    middlewares(){
        this.express.use(express.join);
    }

    routes(){
        this.express.use(require('./routes'));
    }
}
module.exports = new AppController().express;
