/**
 * Creates Route Validator
 *
 * @author Abhishek Kumar
 */

import { Request, Response, NextFunction } from 'express';
import { check, validationResult } from 'express-validator';
import { ResponseBuilder } from './Response';

export class Validator {

     public response: ResponseBuilder;

     constructor() {
          this.response = new ResponseBuilder();
     }

     public validate(): any {
          try {
               return [
                    check('email').notEmpty().withMessage('Email is required').trim().escape(),
                    check('password').not().isEmpty().trim().escape(),
                    check('source').notEmpty().withMessage('Source is required').trim().escape(),
                    (req: Request, res: Response, next: NextFunction) => {
                         const errors = validationResult(req);
                         if (!errors.isEmpty()) {
                              let rs = {
                                   'code': 422,
                                   'status': 'fail',
                                   'message': 'Payload Validation Errors.',
                                   'data': errors.array()
                              };
                              return this.response.build(rs, res);
                         }
                         next();
                    }
               ];

          } catch (error) {
               console.log(error);
          }

     }
}
