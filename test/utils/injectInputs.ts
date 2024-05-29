import dotenv from 'dotenv'
import { readFileSync } from 'node:fs'
import packageJson from '../../package.json'

const isDev = process.env.npm_lifecycle_script === packageJson.scripts.dev

if (isDev) {
  const env = dotenv.parse(readFileSync('.env'))
  for (const [key, value] of Object.entries(env)) {
    process.env[`INPUT_${key.toUpperCase()}`] = value
  }
}
