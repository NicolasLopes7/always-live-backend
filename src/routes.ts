import { Router } from 'express';

import SiteController from './Controllers/SiteController';
import PingToAll from './services/pingToAll';

const routes = Router();

routes.post('/addSite', SiteController.store);
routes.get('/getSites', SiteController.index);
routes.delete('/deleteSite', SiteController.delete);
routes.get('/pingToAll', PingToAll.ping);
export default routes;
