const getEnv = (key: string) => {
  if (!process.env[key]) throw new Error(`${key} is not set`)

  return process.env[key]
}

export const SERVER_URL = getEnv('SERVER_URL')
