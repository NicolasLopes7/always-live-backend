import { Router } from 'express';

import SiteController from './Controllers/SiteController';
import PingToAll from './services/PingToAll';

const routes = Router();

routes.post('/addSite', SiteController.store);
routes.get('/getSites', SiteController.index);
routes.get('/getQtd', SiteController.count);
routes.delete('/deleteSite', SiteController.delete);
routes.get('/pingToAll', PingToAll.ping);
export default routes;
