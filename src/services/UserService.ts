import { UserModel } from './../models/mysql/UserModel';

export class UserService {

     private _umodel: UserModel;

     constructor() {
          this._umodel = new UserModel();
     }

     public async create(payload) {
       
          let data = await this._umodel.create(payload);
         
          if (data.length) {
               if (data[0][0]) {
                    return data[0][0];
               } else {
                    return data[0];
               }
          }
     }
     public async verifyAndGet(payload) {
       
          let data = await this._umodel.getUser(payload);
         
          if (data.length) {
               if (data[0][0]) {
                    return data[0][0];
               } else {
                    return data[0];
               }
          }
     }

     public async getAllUsers() {
          return await this._umodel.getAllUsers();
     }
}
