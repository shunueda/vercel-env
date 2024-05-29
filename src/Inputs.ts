import { getInput } from '@actions/core'

const InputsDefinition = {
  PROJECT_ID: {
    name: 'project-id',
    required: true
  },
  TOKEN: {
    name: 'token',
    required: true
  },
  TARGET: {
    name: 'target',
    required: false,
    default: 'production'
  }
}

type Inputs = {
  [K in keyof typeof InputsDefinition]: string
}

const Inputs = Object.keys(InputsDefinition).reduce((acc, key) => {
  const entry = InputsDefinition[key as keyof typeof InputsDefinition]
  const value =
    getInput(entry.name.toUpperCase(), {
      required: entry.required
    }) || (entry as any).default
  return { ...acc, [key]: value }
}, {} as Inputs)

export default Inputs
