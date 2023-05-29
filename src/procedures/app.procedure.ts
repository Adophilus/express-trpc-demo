import { publicProcedure } from "@/utils/trpc.util";

export const getIndex = publicProcedure.query(() => {
  return { message: "It works!!!" }
})
