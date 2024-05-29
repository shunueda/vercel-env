import 'test/utils/injectInputs'

import { exportVariable, setSecret } from '@actions/core'
import './Inputs'
import Inputs from './Inputs'
import api from './vercel/api'
import { DecryptedEnv, EncryptedEnvs } from './vercel/types/Env'

const { envs } = await api<EncryptedEnvs>(
  `/v9/projects/${Inputs.PROJECT_ID}/env`
)
envs
  .filter(env => env.target.includes(Inputs.TARGET))
  .map(async env => {
    const { key, value } = await api<DecryptedEnv>(
      `/v1/projects/${Inputs.PROJECT_ID}/env/${env.id}`
    )
    setSecret(value)
    exportVariable(key, value)
  })
