import { Router } from 'express';

import SiteController from '~/Controllers/SiteController';

const routes = Router();

routes.post('/addSite', SiteController.store);

export default routes;
