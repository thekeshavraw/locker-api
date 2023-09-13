import { UserModel } from './../models/mysql/UserModel';

export class UserService {

     private _umodel : UserModel;

     constructor() {
          this._umodel = new UserModel();
     }

     public async create(payload) {
          await this._umodel.create(payload);
     }

     public async getAllUsers() {
          return await this._umodel.getAllUsers();
     }
}
