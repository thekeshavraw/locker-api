/**
 * Define all your API web-routes
 *
 * @author Keshav Kumar
 */

import { Router, Request, Response } from 'express';
import { ItemDetailsController } from './../../controllers/ItemDetailsController'

module.exports = function (app: any) {

     const router = Router();
     const _ItemDetailsController = new ItemDetailsController();

     router.get('/itemDetails', async (req: Request, res: Response) => {
          let response = await _ItemDetailsController.itemDetails(req, res);
          return response;
     });

     router.post('/itemDetails', async (req: Request, res: Response) => {
          let response = await _ItemDetailsController.create(req, res);
          return response;
     });

     app.use('/api', router);

}
