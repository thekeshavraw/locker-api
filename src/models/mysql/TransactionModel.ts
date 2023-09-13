// /**
//  * Define User model
//  *
//  * @author Abhishek Kumar
//  */


// import { Schema, Document, Model, model } from 'mongoose';
// import { IOrganization, INetworkUser } from '../interfaces/Organization';

// // Create the model schema & register your custom methods here
// export interface IOrganizationModel extends IOrganization, Document {
// }

// export interface INetworkUserModel extends INetworkUser, Document {
// }

// export class TransactionModel {

//      private _model: Model<IOrganizationModel>;
//      private collectionName = 'networks';

//      constructor() {
//           const schema = new Schema({
//                name: {
//                     type: String
//                },
//                desc: {
//                     type: String
//                },
//                category: {
//                     id: {
//                          type: Number
//                     },
//                     name: {
//                          type: String
//                     }
//                },
//                isActive: {
//                     type: Boolean
//                },
//                users: {
//                     type: []
//                },
//                visibility: {
//                     type: String
//                }
//           });
//           this._model = model<IOrganizationModel>(this.collectionName, schema);
//      }

//      public get model(): Model<IOrganizationModel> {
//           return this._model;
//      }

//      public async create(obj: IOrganizationModel): Promise<IOrganizationModel> {
//           return await this._model.create(obj);
//      }
// }
