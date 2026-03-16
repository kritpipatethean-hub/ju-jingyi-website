export const appBaseUrl = import.meta.env.BASE_URL

export const appBasename =
  appBaseUrl === '/' ? undefined : appBaseUrl.replace(/\/$/, '')

export function publicAsset(path) {
  return `${appBaseUrl}${String(path).replace(/^\/+/, '')}`
}
