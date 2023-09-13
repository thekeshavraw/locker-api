/**
 * Define User Controller
 *
 * @author Abhishek Kumar
 */

import { Request, Response } from 'express';
// import { UserModel } from './../models/UserModel';
// import { IUser } from './../interfaces/User';
import { ResponseBuilder } from './../helpers/Response';
import { UserService } from '../services/UserService';

export class UserController {

     public response: ResponseBuilder;
     private _uservice : UserService; 

     constructor(
          // private _umodel : UserModel
     ) {
          // console.log('here');
          this.response = new ResponseBuilder();
          this._uservice = new UserService();
     }

     public async signup(req: Request, res: Response) {

          let user = await this._uservice.create(req.body);

          // console.log(this.umodel);
          // console.log(this._umodel);
          // let user = await this.umodel.create(req.body);
          // let rs = {
          //      'code': 201,
          //      'status': 'success',
          //      'message': 'User Created Successfully.',
          //      'data': user
          // };
          // return this.response.build(rs, res);

          // return res.json(req.body);

          // let ubody = {
          //      uname: req.body.uname,
          //      email: req.body.email,
          //      password: req.body.password,
          //      firstname: req.body.firstname,
          //      lastname: req.body.lastname,
          //      gender: req.body.gender,
          //      source: req.body.source,
          //      avatar: req.body.avatar,
          // }
          // let rs = {
          //      'code': 500,
          //      'status': 'fail',
          //      'message': 'User Not Created.',
          //      'data': []
          // };
          // return this.response.build(rs, res);
          // const _email = req.body.email.toLowerCase();
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


     public async getAllUsers(req: Request, res: Response) {
          let users = await this._uservice.getAllUsers();
          let rs = {
               'code': 201,
               'status': 'success',
               'message': 'User fetched successfully.',
               'data': users
          };
          return this.response.build(rs, res);
     }

     public get(req: Request, res: Response) {
          // let rs = {
          //      'code': 200,
          //      'status': 'fail',
          //      'message': 'User Not Created.',
          //      'data': []
          // };
          // return this.response.build(rs, res);

          return res.status(200).json(
               {
                    'status': 'test',
                    'message': '',
                    'data': []
               });
     }
}

// export default UserController;
