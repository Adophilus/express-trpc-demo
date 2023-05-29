import { createEnv } from '@t3-oss/env-core'
import { z } from 'zod'

export const env = createEnv({
  clientPrefix: '',
  client: {},
  server: {
    PORT: z
      .coerce.number().min(0).max(65535),
    DATABASE_URL: z.string().url()
  },
  runtimeEnv: {
    PORT: process.env.PORT,
    DATABASE_URL: process.env.DATABASE_URL
  }
})
