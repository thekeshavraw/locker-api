/**
 * Define User Controller
 *
 * @author Abhishek Kumar
 */

import { Request, Response } from 'express';
// import User from './../models/UserModel';
// import { IUser } from './../interfaces/User';
import { ResponseBuilder } from './../helpers/Response';

export class TransactionController {
     public static signup(req: Request, res: Response): any {

          // console.log(req.body);

          // return res.json({"test" : ""});
          let ubody = {
               uname: req.body.uname,
               email: req.body.email,
               password: req.body.password,
               firstname: req.body.firstname,
               lastname: req.body.lastname,
               gender: req.body.gender,
               source: req.body.source,
               avatar: req.body.avatar,
          }
          const _email = req.body.email.toLowerCase();
          // User.create(ubody, function (error, result) {
          //      if (error) {
          //           let rs = {
          //                'code': 500,
          //                'status': 'fail',
          //                'message': 'User Not Created.',
          //                'data': error
          //           };
          //           return response.build(rs, res);
          //      } else {
          //           let rs = {
          //                'code': 201,
          //                'status': 'success',
          //                'message': 'User Created Successfully.',
          //                'data': result
          //           };
          //           return response.build(rs, res);
          //      }
          // });
          // User.findOne({ email: _email }, (error: any, user: IUser) => {
          //      console.log(user);
          //      if (error) {
          //           return res.json({
          //                error: error
          //           });
          //      }

          //      if (!user) {
          //           return res.json({
          //                error: ['User not found!']
          //           });
          //      }

          //      // if (!user.password) {
          //      //      return res.json({
          //      //           error: ['Please login using your social creds']
          //      //      });
          //      // }
          // });
     }
}

// export default UserController;
