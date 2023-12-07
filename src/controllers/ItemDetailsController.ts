/**
 * Define User Controller
 *
 * @author Abhishek Kumar
 */

import { Request, Response } from 'express';
import { ResponseBuilder } from '../helpers/Response';
import {ItemDetailsService}from '../services/ItemDetailsService';
export class ItemDetailsController {

     private _response: ResponseBuilder;
     private _iDService: ItemDetailsService;

     constructor() {
          this._response = new ResponseBuilder();
          this._iDService = new ItemDetailsService();
     }

     public async itemDetails(req: Request, res: Response) {
          let itemDetail = await this._iDService.itemDetails();   
          let rs = {
               'code': 201,
               'status': 'success',
               'message': 'ItemDetails fetched successfully.',
               'data': itemDetail
          };
          return this._response.build(rs, res);
     }
     public async create (req: Request, res: Response){
          let data = await this._iDService.create(req.body)
          if (data){
               let rs = {
                    'code': 201,
                    'status': 'success',
                    'message': 'ItemDetails fetched successfully.',
                    'data': data
               };
               return this._response.build(rs, res);
          }else{
               let rs = {
                    'code': 500,
                    'status': 'fail',
                    'message': 'ItemDetails not created.',
                    'data': []
               };
               return this._response.build(rs, res);

          }
     }

}

