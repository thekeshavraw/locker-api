/**
 * Define User Controller
 *
 * @author Abhishek Kumar
 */

import { Request, Response } from 'express';
import { ResponseBuilder } from '../helpers/Response';
import { ItemService } from '../services/ItemService';

export class ItemController {

     private _response: ResponseBuilder;
     private _iservice: ItemService;
     
     constructor() {
          this._response = new ResponseBuilder();
          this._iservice = new ItemService();
     }

     public async items(req: Request, res: Response) {
          let categories = await this._iservice.items();
          let rs = {
               'code': 200,
               'status': 'success',
               'message': 'Items fetched successfully.',
               'data': categories
          };
          return this._response.build(rs, res);
     }

     public async create(req: Request, res: Response) {
          let data = await this._iservice.create(req.body);
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

     public async update(req: Request, res: Response) {

     }
}

