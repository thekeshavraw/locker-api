/**
 * Define all your API web-routes
 *
 * @author Keshav Kumar
 */

import { Router, Request, Response } from 'express';
import { CategoryController } from './../../controllers/CategoryController'

module.exports = function (app: any) {

     const router = Router();
     const category = new CategoryController();

     router.get('/categories', async (req: Request, res: Response) => {
          let response = await category.getAllCategories(req, res);
          return response;
     });
     
     
     router.post('/category', async (req: Request, res: Response) => {
          let response = await category.create(req, res);
          return response;
     });

     router.put('/category', async (req: Request, res: Response) => {
          let response = await category.update(req, res);
          return response;
     });

     app.use('/api', router);

}
