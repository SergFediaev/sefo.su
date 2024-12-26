import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { YandexMetrica } from '@/components/yandexMetrica'
import { GoogleAnalytics } from '@next/third-parties/google'
import { type ReactNode, Suspense } from 'react'

const inter = Inter({
	subsets: ['latin'],
	display: 'swap',
})

export const metadata: Metadata = {
	title: 'Sefo',
	description: 'Sefo',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: ReactNode
}>) {
	return (
		<html lang='en'>
			<body className={`${inter.className} antialiased`}>
				<GoogleAnalytics gaId='G-W373ZTCL4M' />
				<Suspense>
					<YandexMetrica />
				</Suspense>
				{children}
			</body>
		</html>
	)
}
