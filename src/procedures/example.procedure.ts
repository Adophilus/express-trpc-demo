import { publicProcedure } from "@/utils/trpc.util";

let exampleContent = "Hello world!"

export const getExample = publicProcedure.query(() => {
  return { message: "Welcome to the example procedure!", example: exampleContent }
})

export const updateExample = publicProcedure.mutation(() => {
  exampleContent = "I have been modified!"
  return { message: "Updated example", example: exampleContent }
})
