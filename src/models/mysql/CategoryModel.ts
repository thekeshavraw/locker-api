/**
 * Define User model
 *
 * @author Abhishek Kumar
 */
import { Database } from '../../providers/Database';

export class CategoryModel {

     constructor() {

     }

     public async create(cateogry) {
          let data = await Database.connection.query("CALL InsertCategory( ?, ?, @output)",
               [cateogry.name, cateogry.status]);
          return data;
     }

     public async update() {

     }

     public async getCategory() {
         
     }

     public async getAllCategories() {
          let data = await Database.connection.query('CALL GetAllCategories()');
          return data[0][0];
     }
}