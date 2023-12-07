/**
 * Define User model
 *
 * @author Keshav Kumar
 */
import { Database } from '../../providers/Database';

export class ItemModel {

     constructor() {

     }

     public async create(item) {
          let data = await Database.connection.query("CALL InsertItem( ?, ?, ?, ?, @output)",
               [item.categoryId, item.title, item.description, item.status]);
          return data;
     }

     public async update() {

     }

     public async items() {
          let data = await Database.connection.query('CALL Items()');
          return data[0][0];
     }
}