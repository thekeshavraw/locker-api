/**
 * Bootstrap your App
 *
 * @author Abhishek Kumar
 */

import os from 'os';
import cluster from 'cluster';

import App from './providers/App';
import NativeEvent from './exception/NativeEvent';

if (cluster.isPrimary) {
     /**
      * Catches the process events
      */
     // NativeEvent.process();

     /**
      * Clear the console before the app runs
      */
     // App.clearConsole();

     /**
      * Load Configuration
      */
     App.loadConfiguration();

     /**
      * Find the number of available CPUS
      */
     const CPUS: any = os.cpus();

     /**
      * Fork the process, the number of times we have CPUs available
      */
     CPUS.forEach(() => cluster.fork());

     /**
      * Catches the cluster events
      */
     // NativeEvent.cluster(cluster);

     /**
      * Loads the Queue Monitor iff enabled
      */
     // App.loadQueue();

     /**
      * Run the Worker every minute
      * Note: we normally start worker after
      * the entire app is loaded
      */
     setTimeout(() => App.loadWorker(), 1000 * 60);

} else {
     /**
      * Load Configuration
      */
     App.loadConfiguration();

     /**
      * Run the Database pool
      */
     App.loadDatabase();

     /**
      * Run the Server on Clusters
      */
     App.loadServer();
}
