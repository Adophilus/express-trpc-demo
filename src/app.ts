import express from 'express'
import config from '@/config';
import { ILogObj, Logger } from 'tslog';
import Router from './routers/index.router';
import LoggerMiddleware from './middlewares/logger.middleware';

const app = express();
export const logger = new Logger<ILogObj>({ name: "AppLogger" })

export async function init() {
  app.use(express.json())
  app.use(express.urlencoded({ extended: true }))
  app.use(LoggerMiddleware(logger))

  app.use('/', Router)

  return () => {
    app.listen(config.server.port, () => {
      logger.info(`App running on port ${config.server.port}`)
    });
  }
}


export default app
