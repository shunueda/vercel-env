import Inputs from '../Inputs'

export default async function api<T>(
  path: string,
  init?: RequestInit
): Promise<T> {
  const response = await fetch(`https://api.vercel.com${path}`, {
    ...{
      headers: {
        Authorization: `Bearer ${Inputs.TOKEN}`
      }
    },
    ...init
  })
  return (await response.json()) as T
}
