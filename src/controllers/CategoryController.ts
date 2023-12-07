/**
 * Define User Controller
 *
 * @author Abhishek Kumar
 */

import { Request, Response } from 'express';
import { ResponseBuilder } from '../helpers/Response';
import { CategoryService } from '../services/CategoryService';

export class CategoryController {

     private _response: ResponseBuilder;
     private _cservice: CategoryService;

     constructor() {
          this._response = new ResponseBuilder();
          this._cservice = new CategoryService();
     }

     public async getAllCategories(req: Request, res: Response) {
          let categories = await this._cservice.getAllCategories();
          let rs = {
               'code': 200,
               'status': 'success',
               'message': 'Categories fetched successfully.',
               'data': categories
          };
          return this._response.build(rs, res);
     }
     public async create(req: Request, res: Response){
          let data = await this._cservice.create(req.body);
          if (data) {
               let rs = {
                    'code': 201,
                    'status': 'success',
                    'message': 'Item created successfully.',
                    'data': data
               };
               return this._response.build(rs, res);
          } else {
               let rs = {
                    'code': 500,
                    'status': 'fail',
                    'message': 'Item not created.',
                    'data': []
               };
               return this._response.build(rs, res);
          
          }
     }
     public async update (req,res){

     }

}

