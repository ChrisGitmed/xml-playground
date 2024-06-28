import express from 'express';
import morgan from 'morgan';

import { router } from './router.js';

class Application {
  /// CONSTRUCTOR
  static app = express()
    .use(morgan('dev'))
    .use(router)
    .use((req, res) => res.status(404).json({ message: 'Route not found' }));

  /// START
  static async start (port) {
    // On any uncaught exception, log the exception to the console
    process.on('uncaughtException', (e) => console.error('Top-Level exception', e, e.stack));

    // Start the server
    return new Promise((resolve, reject) => {
      Application.app.listen(port, async (err) => {
        if (err) reject(err);
        console.log(`Server listening on port 4200`);
        resolve();
      });
    });
  }
}

await Application.start(4200);
