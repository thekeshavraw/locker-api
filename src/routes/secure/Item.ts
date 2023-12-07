/**
 * Define all your API web-routes
 *
 * @author Keshav Kumar
 */

import { Router, Request, Response } from 'express';
import { ItemController } from '../../controllers/ItemController'

module.exports = function (app: any) {

     const router = Router();
     const _itemController = new ItemController();

     router.get('/items', async (req: Request, res: Response) => {
          let response = await _itemController.items(req, res);
          return response;
     });

     
     router.post('/item', async (req: Request, res: Response) => {
          let response = await _itemController.create(req, res);
          return response;
     });

     router.put('/item', async (req: Request, res: Response) => {
          let response = await _itemController.update(req, res);
          return response;
     });
     app.use('/api', router);

}
