import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { YandexMetrica } from '@/components/yandexMetrica'
import { GoogleAnalytics } from '@next/third-parties/google'
import { NextIntlClientProvider } from 'next-intl'
import { getLocale, getMessages } from 'next-intl/server'
import { type ReactNode, Suspense } from 'react'

const inter = Inter({
	subsets: ['latin'],
	display: 'swap',
})

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
			<body className={`${inter.className} antialiased`}>
				<GoogleAnalytics gaId='G-W373ZTCL4M' />
				<Suspense>
					<YandexMetrica />
				</Suspense>
				<NextIntlClientProvider messages={messages}>
					{children}
				</NextIntlClientProvider>
			</body>
		</html>
	)
}
