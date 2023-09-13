/**
 * Define all your API web-routes
 *
 * @author Abhishek Kumar
 */

// import ApiClient from '../../domains/authentication/api-client';
import { OK, INTERNAL_SERVER_ERROR } from 'http-status';
import { Router } from 'express';
import { ErrorHandler } from '../../exception/errors';
import { ResponseBuilder } from './../../helpers/index'
import { Validator } from './../../helpers/Validator';
import { UserController } from './../../controllers/UserController';

module.exports = function (app: any) {

     const router = Router();
     // const client = new ApiClient();
     const errorHandler = new ErrorHandler();
     const validator = new Validator();
     const response = new ResponseBuilder();
     const user = new UserController();

     router.post('/user', validator.validate(), async (req, res) => {
          let response = await user.signup(req, res);
          return response;
          // if(response) {
          //      return response;
          // } else {

          // }
               // .then((data) => {
               //      return data;
               // }).catch((error: Error) => {
               //      errorHandler.handleError(error, req, res);
               // });
     });

     // router.post('/user', validator.validate(), user.signup(req, res));
     router.get('/users', async (req, res) => {
          let response = await user.getAllUsers(req, res);
          return response;
          // if(response) {
          //      return response;
          // } else {

          // }
               // .then((data) => {
               //      return data;
               // }).catch((error: Error) => {
               //      errorHandler.handleError(error, req, res);
               // });
     });

     app.use('/auth', router);

}
