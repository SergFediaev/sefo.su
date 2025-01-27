import type { Metadata } from 'next'
import './globals.css'
import { Body } from '@/components/body'
import { YandexMetrica } from '@/components/yandexMetrica'
import { GoogleAnalytics } from '@next/third-parties/google'
import { NextIntlClientProvider } from 'next-intl'
import { getLocale, getMessages } from 'next-intl/server'
import { type ReactNode, Suspense } from 'react'

export const metadata: Metadata = {
	title: {
		template: '%s | Sefo',
		default: 'Sefo',
	},
	description: 'Next Legend',
	keywords: ['Sef', 'Sefo', 'Noshimo', 'Notasi', 'Milandro'],
	generator: 'Next.js',
	applicationName: 'Sefo.su',
	creator: 'Sefo',
	metadataBase: new URL('https://sefo.su'),
	alternates: {
		canonical: '/',
		languages: {
			'en-US': '/en-US',
			'ru-RU': '/ru-RU',
		},
	},
	other: { 'yandex-verification': '727c58bf6235b34e' },
}

export default async function RootLayout({
	children,
}: Readonly<{
	children: ReactNode
}>) {
	const locale = await getLocale()
	const messages = await getMessages()

	return (
		<html lang={locale}>
			<Body>
				<GoogleAnalytics gaId='G-W373ZTCL4M' />
				<Suspense>
					<YandexMetrica />
				</Suspense>
				<NextIntlClientProvider messages={messages}>
					{children}
				</NextIntlClientProvider>
			</Body>
		</html>
	)
}
