/**
 * Responsible to handle API response.
 *
 * @author Abhishek Kumar
 */

import { Request, Response, NextFunction } from 'express';

export class ResponseBuilder {

     constructor() {

     }

     public build(rs: any, res: Response): Response {
          if (rs.code == 200) {
               return res.status(rs.code).json(
                    {
                         'status': rs.status,
                         'message': rs.message,
                         'data': rs.data
                    }
               );
          } else {
               return res.status(rs.code).json(
                    {
                         'status': rs.status,
                         'message': rs.message,
                         'data': rs.data
                    }
               );
          }
     }
}

export default ResponseBuilder;