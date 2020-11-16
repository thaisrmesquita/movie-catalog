import express from 'express';
import mongoose from 'mongoose';
import routes from './routes';

class App {
    constructor () {
        this.server = express();
        mongoose.connect(
            'mongodb+srv://movie-catalog:movie-catalog@movie-catalog.cxuda.mongodb.net/movie-catalog?retryWrites=true&w=majority',
            {
              useNewUrlParser: true,
              useUnifiedTopology: true,
            }
        );
        this.middlewares();
        this.routes();
    }
    middlewares() {
        this.server.use(express.json());
    }

    routes() {
        this.server.use(routes);
    }
}

export default new App().server;