/* eslint-disable no-console */
import { Request, Response } from 'express';
import Site from '../models/Site';

interface IstoreParams {
  url: string;
}
export default {
  async store(req: Request, res: Response) {
    const { url }: IstoreParams = req.body;

    let site = await Site.findOne({ url });

    if (!site) {
      site = await Site.create({ url, createdAt: new Date() });
    }

    return res.json(site);
  },
};
