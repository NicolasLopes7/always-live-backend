import { Request, Response } from 'express';
import Site from '../models/Site';
import api from './Api';

export default {
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
  },
};
