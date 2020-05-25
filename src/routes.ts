import { Router } from 'express';

import SiteController from '~/Controllers/SiteController';

const routes = Router();

routes.post('/addSite', SiteController.store);
routes.get('/getSites', SiteController.index);
routes.delete('/deleteSite', SiteController.delete);
export default routes;
