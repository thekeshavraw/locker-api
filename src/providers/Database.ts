/**
 * Define Database connection
 *
 * @author Abhishek Kumar
 */

// import mongoose from 'mongoose';

import Locals from './Locals';
import Log from '../middlewares/Log';
import mysql from 'mysql2/promise';

export class Database {

     public static connection;
     // Initialize your database pool
     public static async init() {
          // const options = {
          //      useNewUrlParser: true,
          //      useCreateIndex: true,
          //      autoIndex: true, //this is the code I added that solved it all
          //      keepAlive: true,
          //      poolSize: 10,
          //      bufferMaxEntries: 0,
          //      connectTimeoutMS: 10000,
          //      socketTimeoutMS: 45000,
          //      useFindAndModify: false,
          //      useUnifiedTopology: true
          // }
          // // const options = { useNewUrlParser: true, useUnifiedTopology: true };
          // const mongoUrl = `mongodb://${Locals.config().mongoHost}:${Locals.config().mongoPort}/${Locals.config().mongoDbName}`;
          // mongoose.connect(mongoUrl, options, (error) => {
          //      // handle the error case
          //      if (error) {
          //           Log.info('Failed to connect to the Mongo server!!');
          //           console.log(error);
          //           throw error;
          //      } else {
          //           Log.info('connected to mongo server at: ' + mongoUrl);
          //      }
          // });
          // mongoose.set('debug', true);

          this.connection = await mysql.createConnection({
               host: Locals.config().mysqlHost,
               user: Locals.config().mysqlDbUser,
               password: Locals.config().mysqlDbPass,
               database: Locals.config().mysqlDbName,
               port : 3307

               
          });

          // this.connection.connect(function (error) {
          //      if (error) {
          //           Log.info('Failed to connect to the mysql server!!');
          //           console.log(error);
          //           throw error;
          //      } else {
          //           Log.info('Connected to mysql server at: ' + Locals.config().mysqlHost);
          //      }
               
          // });
     }
}

// export default Database;
