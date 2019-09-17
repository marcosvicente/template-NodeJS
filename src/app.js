import express from 'express'
import bodyParse from 'body-parser'

import routes from './routes'

class App{
    constructor() {
        this.app = express()
        this.routes()
        this.middlewares();
        this.server()
        this.bodyParse()
    }
    routes(){
        this.app.use(routes)
    }
    bodyParse(){
        this.app.use(bodyParse.json())
    }
    middlewares() {
        this.app.use(express.json());
    }
    server(){
        this.app.listen(3000,()=> console.log('Server is listening on port 3000'))
    }
}

module.exports = new App().express;
