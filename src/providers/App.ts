/**
 * Primary file for your Clustered API Server
 *
 * @author Abhishek Kumar
 */

import path from 'path';
import dotenv from 'dotenv';
import Express from './Express';
import { Database } from './Database';
import Log from '../middlewares/Log';

class App {

	// Loads your dotenv file
	public loadConfiguration(): void {
		Log.info('Configuration :: Booting @ Master...');

		dotenv.config({ path: path.join(__dirname, '../../.env') });
	}

	// Loads your Server
	public loadServer(): void {
		Log.info('Server :: Booting @ Master...');

		Express.init();
	}

	// Loads the Database Pool
	public loadDatabase(): void {
		Log.info('Database :: Booting @ Master...');

		Database.init();
	}

	// Loads the Worker Cluster
	public loadWorker(): void {
		Log.info('Worker :: Booting @ Master...');
	}
}

export default new App;
