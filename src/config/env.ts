/* eslint-disable @typescript-eslint/no-var-requires */
const packageJson = require('../../package.json')

export const env = {
  VERSION: packageJson.version,
  NODE_ENV: process.env.NODE_ENV,
  PORT: process.env.PORT ?? 8001
}
