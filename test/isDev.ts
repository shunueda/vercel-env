import packageJson from '../package.json'

export const isDev =
  process.env.npm_lifecycle_script === packageJson.scripts.dev
