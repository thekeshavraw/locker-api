/**
 * Define all your routes
 *
 * @author Abhishek Kumar
 */

import { Application } from 'express';
import Locals from './Locals';
import Log from '../middlewares/Log';
import fs from 'fs';
import path from 'path';

class Routes {
     public mountApi(_express: Application): Application {
          const apiPrefix = Locals.config().apiPrefix;
          Log.info('Routes :: Mounting API Routes...');

          let publicRoutesPath = path.join(__dirname, './../routes/public/');
          var secureRoutesPath = path.join(__dirname, './../routes/secure/');

          /**
           * Loding all routes from routes folder
           */
          fs.readdirSync(publicRoutesPath).forEach(function (file) {
               var route = publicRoutesPath + file;
               require(route)(_express);
          });
          fs.readdirSync(secureRoutesPath).forEach(function (file) {
               var route = secureRoutesPath + file;
               require(route)(_express);
          });
          return _express;

     }
}

export default new Routes;
