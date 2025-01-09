import type { Metadata } from 'next'
import './globals.css'
import { Body } from '@/components/body'
import { YandexMetrica } from '@/components/yandexMetrica'
import { GoogleAnalytics } from '@next/third-parties/google'
import { NextIntlClientProvider } from 'next-intl'
import { getLocale, getMessages } from 'next-intl/server'
import { type ReactNode, Suspense } from 'react'

export const metadata: Metadata = {
	title: 'Sefo',
	description: 'Next Legend',
	keywords: ['Sef', 'Sefo', 'Noshimo', 'Notasi', 'Milandro'],
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
