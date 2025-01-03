export type Locale = (typeof LOCALES)[number]

const LOCALES = ['en', 'ru'] as const

export const DEFAULT_LOCALE: Locale = 'en'
