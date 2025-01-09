'use client'

import { combine } from '@/utils/combine'
import { LoaderCircle } from 'lucide-react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export const NotFound = () => {
	const [isMounted, setIsMounted] = useState(false)
	const [address, setAddress] = useState<string>()
	const t = useTranslations('HomePage')

	useEffect(() => {
		setIsMounted(true)

		setAddress(
			`${window.location.origin}${window.location.pathname}${window.location.search}`,
		)
	}, [])

	return (
		<div className='container mx-auto flex flex-wrap-reverse items-center justify-center'>
			<aside className='flex flex-col gap-4 p-8'>
				<h1 className='text-3xl'>{t('404')}</h1>
				<p>{t('addressNotFound')}</p>
				{address ? (
					<p className='break-all text-red-600'>{address}</p>
				) : (
					<LoaderCircle className='animate-spin' />
				)}
				<Link href='/' className='decoration-lime-600 hover:text-lime-600'>
					{t('returnToHomepage')}
				</Link>
			</aside>
			<Image
				src='/sasha.gif'
				alt={t('404ArtAlt')}
				width={500}
				height={700}
				priority
				unoptimized
				className={combine(
					'w-[300] self-end transition duration-1000 ease-out',
					isMounted ? 'translate-y-0' : '-translate-y-full',
				)}
			/>
		</div>
	)
}
