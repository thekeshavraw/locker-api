/**
 * Define all your API web-routes
 *
 * @author Abhishek Kumar
 */

import { Router, Request, Response } from 'express';
import { Validator } from './../../helpers/Validator';
import { UserController } from './../../controllers/UserController';

module.exports = function (app: any) {

     const router = Router();
     const validator = new Validator();
     const user = new UserController();

     router.post('/user', validator.validate(), async (req: Request, res: Response) => {
          let response = await user.signup(req, res);
          return response;
     });

     router.post('/login', validator.validate(), async (req: Request, res: Response) => {
          let response = await user.login(req, res);
          return response;
     });

     router.get('/users', async (req, res) => {
          let response = await user.getAllUsers(req, res);
          return response;
     });
     router.put('/users', async (req, res) => {
          let response = await user.getAllUsers(req, res);
          return response;
     });

     app.use('/auth', router);

}
