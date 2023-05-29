import { createMiddleware, t } from "@/utils/trpc.util";
import express from "express";
import { getIndex } from "@/procedures/app.procedure";
import { getExample, updateExample } from "@/procedures/example.procedure";

const Router = express.Router()

const router = t.router({
  "": getIndex,
  "examples": getExample,
  "examples/update": updateExample
});

Router.use("/", createMiddleware(router))

export default Router
