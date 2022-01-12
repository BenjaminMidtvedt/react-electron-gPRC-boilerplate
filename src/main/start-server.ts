/* eslint global-require: off, no-console: off, promise/always-return: off */

import { spawn } from 'child_process';
import path, { resolve } from 'path';

export default {
  start: () => {
    let serverPath;
    if (process.env.NODE_ENV === 'production') {
      serverPath = resolve(
        path.join(__dirname, '../../../../dist/start_server/start_server')
      );
    } else {
      serverPath = resolve(
        path.join(__dirname, '../../dist/start_server/start_server')
      );
    }
    const server = spawn(`${serverPath}`);
    server?.stdout?.on('data', (data) => {
      console.log(`server says: ${data}`);
    });
    server?.stderr?.on('data', (data) => {
      console.log(`server says: ${data}`);
    });

    return server;
  },
};
