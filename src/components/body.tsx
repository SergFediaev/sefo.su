'use client'

import { debugStore } from '@/stores/debugStore'
import { combine } from '@/utils/combine'
import { Inter } from 'next/font/google'
import type { ComponentPropsWithoutRef } from 'react'

const inter = Inter({
	subsets: ['latin'],
	display: 'swap',
})

export const Body = ({
	className,
	...restProps
}: ComponentPropsWithoutRef<'body'>) => {
	const { isMarkupShown } = debugStore()

	return (
		<body
			className={combine(
				`${inter.className} text-neutral-50 antialiased`,
				isMarkupShown && '[&_*]:border [&_*]:border-[#0ff]',
				className,
			)}
			{...restProps}
		/>
	)
}
