/**
 * Define User Controller
 *
 * @author Abhishek Kumar
 */
// OM pandeY
import { Request, Response } from 'express';
import { ResponseBuilder } from './../helpers/Response';
import { UserService } from '../services/UserService';

export class UserController {

     private _response: ResponseBuilder;
     private _uservice: UserService;

     constructor() {
          this._response = new ResponseBuilder();
          this._uservice = new UserService();
     }

     public async login(req: Request, res: Response) {
          let data = await this._uservice.verifyAndGet(req.body);
          if (data.length) {
               if (data[0].id == -1) {
                    let rs = {
                         'code': 404,
                         'status': 'fail',
                         'message': 'Either email or password is wrong.',
                         'data': []
                    };
                    return this._response.build(rs, res);
               } else {
                    let rs = {
                         'code': 200,
                         'status': 'success',
                         'message': 'User logged in successfully',
                         'data': []
                    };
                    return this._response.build(rs, res);
               }

          } else {
               let rs = {
                    'code': 201,
                    'status': 'fail',
                    'message': 'User not created.',
                    'data': []
               };
               return this._response.build(rs, res);
          }
     }

     public async signup(req: Request, res: Response) {
          // console.log(req.body);
          let data = await this._uservice.create(req.body);
          console.log(data);
          // it returns id 
          if (data.length) {
               if (data[0].id == -1) {
                    let rs = {
                         'code': 400,
                         'status': 'fail',
                         'message': 'Email is already registered.',
                         'data': []
                    };
                    return this._response.build(rs, res);
               } else {
                    let rs = {
                         'code': 201,
                         'status': 'success',
                         'message': 'User created successfully.',
                         'data': []
                    };
                    return this._response.build(rs, res);
               }
          } else {
               let rs = {
                    'code': 201,
                    'status': 'fail',
                    'message': 'User not created.',
                    'data': []
               };
               return this._response.build(rs, res);
          }
     }


     public async getAllUsers(req: Request, res: Response) {
          let users = await this._uservice.getAllUsers();
          let rs = {
               'code': 201,
               'status': 'success',
               'message': 'User fetched successfully.',
               'data': users
          };
          return this._response.build(rs, res);
     }

     public get(req: Request, res: Response) {

     }
}

