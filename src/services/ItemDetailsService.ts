import { ItemDetailsModel } from '../models/mysql/ItemDetailsModel';

export class ItemDetailsService {
     private _iDmodel: ItemDetailsModel;

     constructor() {
          this._iDmodel = new ItemDetailsModel();
     }

     public async create(payload) {
         let data= await this._iDmodel.create(payload);
         if(data.length){
          if(data[0][0]){
               return data[0][0];
          }else{
               return data[0];
          }
         }
         return data;
     }

     public async update() {

     }

     public async getCategory() {
         
     }

     public async itemDetails() {
          return await this._iDmodel.itemDetails();
     }
}
