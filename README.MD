# Alive Always - Backend
  [![Languages](https://img.shields.io/github/languages/count/NicolasLopes7/always-live-backend?style=flat-square)](#) [![Size](https://img.shields.io/github/repo-size/NicolasLopes7/always-live-backend?style=flat-square)]()

  ### This API it's responsible for https://alive-always-heroku.netlify.app/ a completely free service that doesn't let your application on heroku sleep.
----------
  ## The structure
  ### We have a class "App" and this is responsible to connect our application:
  ```typescript
  import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import routes from './routes';

require('dotenv').config();

  class App {
  public express: express.Application;

  public mongoURL: string;

  public constructor() {
    this.express = express();
    if (process.env.MONGO_DB_URL) {
      this.mongoURL = process.env.MONGO_DB_URL;
    } else {
      this.mongoURL = ' ';
    }

    this.middlewares();
    this.routes();
    this.database();
  }

  private middlewares() {
    this.express.use(express.json());
    this.express.use(cors());
  }

  private database() {
    mongoose.connect(this.mongoURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  }

  private routes() {
    this.express.use(routes);
  }
}
export default new App().express;
```
## Routes
### To have more security in the application, we have the database URL in an .env file. This Class imports the "routes.js" that contains our routes:
```js
POST /addSite
{
  "url": "x"
}
returns the id, and url

GET /getSites
returns all the sites objs

GET /getQtd
returns the rows count of sites

DELETE /deleteSite
{
  "url":"x",
   "id":"y"
}
returns the 200 statusCode

GET /pingToAll
returns the 200 statusCode
```
## The magic happens here
### Going to the services, we found the Api.ts (Create axios instance) and PingtoAll.ts, This file contains the ping function, which goes through all the urls in the database and sends a request to the endpoint /
```typescript
async ping(req: Request, res: Response) {
    const sites = await Site.find();
    try {
      sites.forEach(async (site) => {
        await api.get(site.url);
      });
      return res.sendStatus(200);
    } catch {
      return res.sendStatus(200);
    }
  }
  ```
## Database
### I'm using MongoDB, and to host out from my machine the MongoDB Atlas a very good and free service to host small databases (https://www.mongodb.com/cloud/atlas). At the models we found a simple Schema of Site which only contains the url and a typescript interface.
```typescript
interface Isite extends Document {
  url: string;
}

const SiteSchema = new Schema(
  {
    url: String,
  },
  {
    timestamps: true,
  }
);

export default model<Isite>('Site', SiteSchema);
```
## Controller
### And finally we have only one controller for site, this is a very simple CRUD you can see more of this here [SiteController.ts](src/Controllers/SiteController.ts)

## Enjoy this API, fork and contribute :)
