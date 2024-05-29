import { getInput, setFailed } from '@actions/core'

const expectedKey = getInput('key')
const expectedValue = getInput('value')

const value = process.env[expectedKey]

if (value !== expectedValue) {
  setFailed(`Expected ${expectedKey} to be ${expectedValue}, but got ${value}`)
}
console.log(`✅ ${expectedKey} is ${expectedValue}`)
