import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import routes from './routes';

class App {
  public express: express.Application;

  public constructor() {
    this.express = express();
    this.middlewares();
    this.routes();
  }

  private middlewares() {
    this.express.use(express.json());
    this.express.use(cors());
  }

  private database() {
    mongoose.connect(
      'mongodb+srv://admin:admin@cluster0-xb1ss.mongodb.net/always-live?retryWrites=true&w=majority',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
  }

  private routes() {
    this.express.use(routes);
  }
}
export default new App().express;
