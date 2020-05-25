/* eslint-disable no-console */
import { Request, Response } from 'express';
import Site from '../models/Site';

require('dotenv').config();

interface IstoreParams {
  url: string;
  id?: string;
}
export default {
  async store(req: Request, res: Response) {
    const { url }: IstoreParams = req.body;

    let site = await Site.findOne({ url });

    if (!site) {
      site = await Site.create({ url });
      return res.json({ id: site.id, url: site.url });
    }

    return res.sendStatus(404);
  },

  async index(req: Request, res: Response) {
    const sites = await Site.find();
    console.log(process.env.SECRET_KEY);
    return res.json(sites);
  },

  async delete(req: Request, res: Response) {
    const { url, id }: IstoreParams = req.body;

    const site = await Site.findById(id);

    if (site) {
      if (site.url === url) {
        await Site.deleteOne({ url });
        return res.sendStatus(200);
      }
    }

    return res.sendStatus(401);
  },

  async count(req: Request, res: Response) {
    const qtdSites: number = await Site.estimatedDocumentCount();

    return res.json({ qtdSites });
  },
};
