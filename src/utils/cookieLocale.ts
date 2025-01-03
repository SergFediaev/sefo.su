'use server'

import { DEFAULT_LOCALE, type Locale } from '@/i18n/config'
import { cookies } from 'next/headers'

const COOKIE_NAME = 'NEXT_LOCALE'

export async function getCookieLocale() {
	const cookieStore = await cookies()

	return (cookieStore.get(COOKIE_NAME)?.value as Locale) || DEFAULT_LOCALE
}

export async function setCookieLocale(locale: Locale) {
	const cookieStore = await cookies()

	cookieStore.set(COOKIE_NAME, locale)
}
