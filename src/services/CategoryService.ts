import { CategoryModel } from './../models/mysql/CategoryModel';

export class CategoryService {
     private _cmodel: CategoryModel;

     constructor() {
          this._cmodel = new CategoryModel();
     }

     public async create(payload) {
          let data = await this._cmodel.create(payload);
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

     public async getAllCategories() {
          return await this._cmodel.getAllCategories();
     }
}
