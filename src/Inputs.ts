import { getInput } from '@actions/core'

const InputsDefinition = {
  'project-id': {
    required: true
  },
  token: {
    required: true
  },
  target: {
    required: false,
    default: 'production'
  }
}

type Inputs = {
  [K in keyof typeof InputsDefinition]: string
}

const Inputs = Object.entries(InputsDefinition).reduce((acc, [key, def]) => {
  const value = getInput(key, {
    required: def.required
  })
  return { ...acc, [key]: value ? value : (def as any).default }
}, {} as Inputs)

export default Inputs
