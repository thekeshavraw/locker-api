/**
 * Swagger Configuration
 *
 * @author Abhishek Kumar
 */

import { Application } from 'express';
import Log from './Log';
import swagger from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import path from 'path';
import fs from 'fs';
import swaggerJson  from './../swagger.json';

class Swagger {
     public mount(_express: Application): Application {
          Log.info('Booting the Swagger Configuration middleware...');
          // console.log(swaggerJson);
          // swaggerJson = {
          //      "definition": {
          //           "openapi": "3.0.0",
          //           "info": {
          //                "title": "Network API",
          //                "version": "1.0.0",
          //                "description": "Tryzent Network API Documentation"
          //           },
          //           "servers": [
          //                {
          //                     "url": "http://localhost:3000/"
          //                }
          //           ]
          //      },
          //      "apis": []
          // };

          let publicRoutesPath = path.join(__dirname, './../routes/public/');
          var secureRoutesPath = path.join(__dirname, './../routes/secure/');

          /**
           * Loding all routes from routes folder
           */
          // fs.readdirSync(publicRoutesPath).forEach(function (file) {
          //      var route = publicRoutesPath + file;
          //      swaggerJson.apis.push(route);
          // });
          // fs.readdirSync(secureRoutesPath).forEach(function (file) {
          //      var route = secureRoutesPath + file;
          //      swaggerJson.apis.push(route);
          // });
          // const swaggerSpecs = swagger(swaggerJson);
          _express.use('/swagger', swaggerUi.serve, swaggerUi.setup(swaggerJson));
          return _express;
     }
}
export default new Swagger;
