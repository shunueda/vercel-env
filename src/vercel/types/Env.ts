/**
 * {
 *   type: 'encrypted',
 *   value: 'WOZt1iNKgGm3VFMkm/OeRZsO6NlO2tvEhB8CcNx4Gvo9Ktw62OvaHumXGQEsqsfG1M+VGD2T3yq1WJYMXBlHGle25Zy57vBboIcZuXeabxsaodGyIZ8sAahkyRKKs+NLZOpX+mzhQnY9hxDFtvs5hg==',
 *   target: [ 'development', 'preview', 'production' ],
 *   configurationId: null,
 *   comment: '',
 *   id: '4uUQQp7HhzmiQUBY',
 *   key: 'GITHUB_PAT',
 *   createdAt: 1716844980171,
 *   updatedAt: 1716844980171,
 *   createdBy: 'iVLoUB5gV3EMgPp2gEOJA6vD',
 *   updatedBy: null,
 *   decrypted: false,
 *   lastEditedByDisplayName: 'Shun Ueda'
 * }
 */

export interface DecryptedEnv {
  value: string
  target: string[]
  type: string
  id: string
  key: string
  configurationId: null
  createdAt: number
  updatedAt: number
  createdBy: string
  updatedBy: string | null
  decrypted: boolean
}

export interface EncryptedEnvs {
  envs: EncryptedEnv[]
}

export interface EncryptedEnv {
  type: string
  value: string
  target: string[]
  configurationId: string | null
  comment: string
  id: string
  key: string
  createdAt: number
  updatedAt: number
  createdBy: string
  updatedBy: string | null
  decrypted: boolean
  lastEditedByDisplayName: string
}
