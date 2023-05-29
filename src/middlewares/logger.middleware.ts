import { NextFunction, Request, Response } from "express";
import { ILogObj, Logger } from "tslog";

export default function LoggerMiddleware(logger: Logger<ILogObj>) {
  return (req: Request, res: Response, next: NextFunction) => {
    res.locals.logger = logger.getSubLogger({ name: "LoggerMiddleware" })
    next()
  }
}
