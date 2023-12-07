/**
 * Define User model
 *
 * @author Keshav Kumar
 */
import { Database } from '../../providers/Database';

export class ItemDetailsModel {

     constructor() {

     }

     public async create(itemDetails) {
         let data = await Database.connection.query("CALL InsertItemDetails(? , ? , ? , ? ,? , ? , ? , ? , @output)",
         [itemDetails.itemId,itemDetails.name,itemDetails.accountNo,itemDetails.ifscCode,itemDetails.user,itemDetails.secret,itemDetails.description,itemDetails.status]);
         return data;
     }

     public async update() {

     }

     public async itemDetails() {
          let data = await Database.connection.query('CALL ItemDetails()');
          return data[0][0];
     }
}