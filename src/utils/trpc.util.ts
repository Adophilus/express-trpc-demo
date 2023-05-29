import { inferAsyncReturnType, initTRPC } from '@trpc/server';
import * as trpcExpress from '@trpc/server/adapters/express';

const createContext = ({
  req,
  res,
}: trpcExpress.CreateExpressContextOptions) => ({
  logger: res.locals.logger.getSubLogger({ name: "ProcedureLogger" })
});

type Context = inferAsyncReturnType<typeof createContext>;

const t = initTRPC.context<Context>().create();

const publicProcedure = t.procedure

const createMiddleware = (router: any) => {
  const middleware = trpcExpress.createExpressMiddleware({ router, createContext })

  return middleware
}

export { t, Context, createContext, publicProcedure, createMiddleware }
