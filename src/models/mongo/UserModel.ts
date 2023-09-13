// /**
//  * Define User model
//  *
//  * @author Abhishek Kumar
//  */

// import { Schema, Document, Model, model } from 'mongoose';
// import { IUser } from './../interfaces/User';

// // Create the model schema & register your custom methods here
// export interface IUserModel extends IUser {
// }




// export class UserModel {

//      private _model: Model<IUserModel>;
//      private _counterModel: Model<any>;

//      private collectionName = 'users';

//      constructor() {
//           const schema = new Schema({
//                username: {
//                     type: String,
//                     unique: true
//                },
//                profile: {
//                     name: {
//                          first: {
//                               type: String
//                          },
//                          last: {
//                               type: String
//                          },
//                     },
//                     email: {
//                          type: String
//                     },
//                     gender: {
//                          type: String
//                     },
//                     dob: {
//                          type: String
//                     },
//                     avatar: {
//                          type: String
//                     },
//                     contact: {
//                          mobile: {
//                               code: {
//                                    type: String
//                               },
//                               num: {
//                                    type: String
//                               }
//                          },
//                          phone: {
//                               code: {
//                                    type: String
//                               },
//                               num: {
//                                    type: String
//                               }
//                          }
//                     }
//                },
//                source: {
//                     name: {
//                          type: String
//                     },
//                     id: {
//                          type: String
//                     }
//                },
//                password: {
//                     salt: {
//                          type: String
//                     },
//                     value: {
//                          type: String
//                     },
//                     reset: {
//                          token: {
//                               type: String
//                          },
//                          expire: {
//                               type: Date
//                          }
//                     }
//                },
//                token: {
//                     key: {
//                          type: String,
//                     },
//                     expire: {
//                          type: Date,
//                     },
//                     temp: {
//                          key: {
//                               type: String
//                          },
//                          expire: {
//                               type: Date
//                          }
//                     },
//                },
//                otp: {
//                     type: String
//                },
//                meta: {
//                     created: {
//                          type: Date,
//                          default: Date.now()
//                     },
//                     modified: {
//                          type: Date,
//                          default: Date.now()
//                     }
//                },
//                isActive: {
//                     type: Boolean,
//                     default: true
//                },
//                id: {
//                     type: Number,
//                     required: true
//                }
//           });
//           this._model = model<IUserModel>(this.collectionName, schema);

//           const counterSchema = new Schema({
//                _id: { type: String, required: true },
//                seq: { type: Number, required: true }
//           });
//           this._counterModel = model<any>('counters', counterSchema);

//      }

//      public get model(): Model<IUserModel> {
//           return this._model;
//      }

//      public async create(obj: IUser): Promise<IUser> {
//           const output = await this.getNextSequence();
//           obj.id = output.seq;
//           return await this._model.create(obj);
//      }

//      public async findOneAndUpdate(condition, updateObj, options = {}): Promise<any> {
//           return await this._model.findOneAndUpdate(condition, updateObj, options);
//      }

//      public async findOne(condition, selectParams = {}, options = {}): Promise<any> {
//           return await this._model.findOne(condition, selectParams, options);
//      }

//      private async getNextSequence() {
//           return await this._counterModel.findOneAndUpdate({
//                _id: this.collectionName
//           }, { $inc: { seq: 1 } }, { new: true, upsert: true });
//      }
// }

import { Database } from './../providers/Database';

export class UserModel { 

     public db : any;

     constructor() {     
          // this.db = connection;
     }

     public async create(user) {
          let data = await Database.connection.query('CALL GetAllUsers()');
          return data[0][0];
     }

     public async update() {

     }

     public async getUser() {

     }

     public async getAllUsers() {

     }
}