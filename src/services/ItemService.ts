import { ItemModel } from '../models/mysql/ItemModel';

export class ItemService {
     private _imodel: ItemModel;

     constructor() {
          this._imodel = new ItemModel();
     }

     public async create(payload) {
          let data = await this._imodel.create(payload);
          if (data.length) {
               if (data[0][0]) {
                    return data[0][0];
               } else {
                    return data[0];
               }
          }
          return data;
     }

     public async update() {

     }

     public async getCategory() {
         
     }

     public async items() {
          return await this._imodel.items();
     }
}
