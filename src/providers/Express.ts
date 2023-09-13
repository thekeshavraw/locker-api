/**
 * Primary file for your Clustered API Server
 *
 * @author Abhishek Kumar
 */

import express from 'express';

import Locals from './Locals';
import Routes from './Routes';
import Bootstrap from '../middlewares/Kernel';
import ExceptionHandler from '../exception/Handler';
import Swagger from '../middlewares/Swagger';

class Express {

     /**
      * Create the express object
      */
     public express: express.Application;

     /**
      * Initializes the express server
      */
     constructor() {
          this.express = express();
          this.mountDotEnv();
          this.mountMiddlewares();
          this.mountRoutes();
          this.mountSwagger();
     }

     private mountDotEnv(): void {
          this.express = Locals.init(this.express);
     }

     /**
      * Mounts all the defined middlewares
      */
     private mountMiddlewares(): void {
          this.express = Bootstrap.init(this.express);
     }

     /**
      * Mounts all the defined routes
      */
     private mountRoutes(): void {
          this.express = Routes.mountApi(this.express);
     }

     /**
      * Mounts Swagger configuration
      */
     private mountSwagger(): void {
          this.express = Swagger.mount(this.express);
     }

     /**
      * Starts the express server
      */
     public init(): any {

          const port: number = Locals.config().port;

          // Registering Exception / Error Handlers
          this.express.use(ExceptionHandler.logErrors);
          this.express.use(ExceptionHandler.clientErrorHandler);
          this.express.use(ExceptionHandler.errorHandler);
          this.express = ExceptionHandler.notFoundHandler(this.express);

          // Start the server on the specified port
          this.express.listen(port, () => {
               // if (error) {
               // 	return console.log('Error: ', error);
               // }
               return console.log('\x1b[33m%s\x1b[0m', `Server :: Running @ 'http://localhost:${port}'`);
          });
     }
}
export default new Express();
