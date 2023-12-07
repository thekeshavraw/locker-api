/**
 * Define User model
 *
 * @author Abhishek Kumar
 */
import { Database } from './../../providers/Database';

export class UserModel {

     constructor() {

     }

     public async create(user) {
          // console.log(user);
          let data = await Database.connection.query("CALL ValidateAndInsertUser(?, ?, ?, ?, ?, ? , ? ,@output)", 
          [user.firstname, user.lastname, user.email, user.phone, user.avatar ,user.password , user.source]);
          // console.log(data);
          return data;
     }

     public async update() {

     }

     public async getUser(user) {
          let data =await Database.connection.query("CALL ValidateAndGetUser(? , ? , ? ,@output)",
          [user.email , user.password ,user.source]);
          return data;

     }

     public async getAllUsers() {
          let data = await Database.connection.query('CALL GetAllUsers()');
          return data[0][0];
     }
}