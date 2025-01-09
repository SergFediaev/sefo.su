'use client'

import { Button } from '@/components/button'
import { combine } from '@/utils/combine'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function ErrorPage({
	error,
	reset,
}: {
	error: Error & { digest?: string }
	reset: () => void
}) {
	const [isMounted, setIsMounted] = useState(false)
	const t = useTranslations('HomePage')

	useEffect(() => {
		console.error(error)
	}, [error])

	useEffect(() => {
		const timeout = setTimeout(() => {
			setIsMounted(true)
		}, 1_000)

		return () => {
			clearTimeout(timeout)
		}
	}, [])

	const reload = () => {
		window.location.reload()
	}

	return (
		<div className='min-h-svh bg-lime-600 text-white'>
			<div className='container mx-auto flex flex-wrap-reverse items-center justify-center'>
				<aside className='flex flex-col gap-4 p-8'>
					<h1 className='text-2xl sm:text-3xl'>{t('somethingWentWrong')}</h1>
					<p className='break-all'>{error.message}</p>
					<div className='flex flex-wrap gap-4'>
						<Button variant='outline' onClick={reset}>
							{t('tryAgain')}
						</Button>
						<Button variant='outline' onClick={reload}>
							{t('reloadPage')}
						</Button>
					</div>
					<a
						href='/'
						className='self-start decoration-white hover:text-black hover:decoration-black'
					>
						{t('returnToHomepage')}
					</a>
				</aside>
				<Image
					src='/mika.gif'
					alt={t('errorArtAlt')}
					width={362}
					height={498}
					unoptimized
					className={combine(
						'w-[300] self-end transition duration-1000 ease-out',
						isMounted ? 'translate-y-0' : '-translate-y-full',
					)}
				/>
			</div>
		</div>
	)
}
