import { UNPROCESSABLE_ENTITY, NOT_FOUND, FORBIDDEN, BAD_REQUEST, INTERNAL_SERVER_ERROR } from 'http-status';
import Locals from '../../providers/Locals';


const errorMap = {
     ValidationError: UNPROCESSABLE_ENTITY,
     UniqueIndexError: UNPROCESSABLE_ENTITY,
     NotFoundError: NOT_FOUND,
     AuthenticationError: FORBIDDEN,
     BadRequest: BAD_REQUEST
}

class ErrorHandler {

     private getMessage(err: any) {
          if (err.errors) {
               return Object.keys(err.errors).map((k) => err.errors[k].message).join(', ');
          }
          return err.message;
     }

     public handleError(err: any, req: any, res: any) {
          if (Locals.config().environment == 'development') {
               console.log("\n error", err);
          }
          const statusCode: number = errorMap[err.name] || INTERNAL_SERVER_ERROR;
          const message = this.getMessage(err);
          return res.status(statusCode).json({
               'status': 'failure',
               'message': message,
               'data': null
          })
     }
}

export {
     ErrorHandler
}
