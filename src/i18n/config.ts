export type Locale = (typeof LOCALES)[number]

const LOCALES: readonly string[] = ['en', 'ru'] as const

export const DEFAULT_LOCALE: Locale = 'en'
