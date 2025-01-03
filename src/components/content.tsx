'use client'

import { Button } from '@/components/button'
import { LocaleButton } from '@/components/localeButton'
import { Nickname } from '@/components/nickname'
import { combine } from '@/utils/combine'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

export const Content = () => {
	const [isMenuNotShown, setIsMenuNotShown] = useState(true)
	const [isAvatarShown, setIsAvatarShown] = useState(false)
	const [isAvatarAnimating, setIsAvatarAnimating] = useState(false)
	const menu = useRef<HTMLUListElement>(null)
	const button = useRef<HTMLButtonElement>(null)
	const t = useTranslations('HomePage')

	useEffect(() => {
		const closeMenu = (event: MouseEvent) => {
			if (
				!menu.current?.contains(event.target as Node) &&
				!button.current?.contains(event.target as Node)
			) {
				setIsMenuNotShown(true)
			}
		}

		addEventListener('mousedown', closeMenu)

		return () => {
			removeEventListener('mousedown', closeMenu)
		}
	}, [])

	const toastyTitle = isAvatarAnimating ? undefined : t('toastyTitle')

	const toggleIsMenuShown = () => {
		setIsMenuNotShown(!isMenuNotShown)
	}

	const showAvatar = () => {
		setIsAvatarAnimating(true)
		setIsAvatarShown(true)

		setTimeout(() => {
			setIsAvatarShown(false)
		}, 2_000)

		setTimeout(() => {
			setIsAvatarAnimating(false)
		}, 4_000)
	}

	return (
		<div className='container mx-auto text-neutral-50'>
			<LocaleButton />
			<main className='flex min-h-svh items-center p-8 text-xl'>
				<div className='flex flex-grow flex-wrap justify-evenly gap-8'>
					<ul className='flex flex-col items-center gap-4 sm:items-start'>
						<Nickname />
						<li title={t('sloganTitle')}>
							<q>{t('slogan')}</q>
						</li>
						<li title={t('aboutTitle')}>
							<h2>{t('about')}</h2>
						</li>
					</ul>
					<button ref={button} type='button' onClick={toggleIsMenuShown}>
						<Image
							src='/logo.svg'
							alt={t('logo')}
							width={300}
							height={300}
							priority
							className='animate-pulse hover:animate-heartbeat'
						/>
					</button>
					<ul className='flex list-disc flex-col gap-2 marker:text-accent'>
						<h3>{t('projects')}</h3>
						<li>
							<a href='https://L4L.Sefo.su'>{t('left4Legend')}</a>
						</li>
						<li>
							<a href='https://Notasi.ru/javangelion'>{t('javangelion')}</a>
						</li>
						<li>
							<a href='https://Notasi.ru/deci/en'>{t('deci')}</a>
						</li>
						<li>
							<a href='https://vk.com/Drumgard'>{t('drumgard')}</a>{' '}
							<sup>{t('inactive')}</sup>
						</li>
						<li>
							<a href='https://Notasi.ru'>{t('notasi')}</a>{' '}
							<sup>{t('old')}</sup>
						</li>
					</ul>
				</div>
			</main>
			<ul
				ref={menu}
				className={combine(
					'fixed right-8 bottom-8 left-8 mx-auto flex w-fit flex-wrap gap-4 rounded-3xl bg-black bg-opacity-80 p-8 backdrop-blur duration-500 sm:gap-8',
					isMenuNotShown && 'pointer-events-none opacity-0',
				)}
			>
				<li>
					<a href='mailto:SefoNotasi@gmail.com'>{t('email')}</a>
				</li>
				<li>
					<a href='https://t.me/SefoNotasi'>{t('telegram')}</a>
				</li>
				<li>
					<a href='/license.jpg'>{t('domainLicense')}</a>
				</li>
				<li>
					<a href='/cake.jpg'>{t('cake')}</a>
				</li>
				<li>
					<Button
						onClick={showAvatar}
						title={toastyTitle}
						disabled={isAvatarAnimating}
					>
						{t('toasty')}
					</Button>
				</li>
				<li>{t('comingSoon')}</li>
			</ul>
			<Image
				src='/avatar.png'
				alt={t('avatar')}
				width={400}
				height={600}
				className={combine(
					'fixed bottom-0 left-0 drop-shadow-[0_0_10px_rgba(0,0,0,1)] duration-1000',
					isAvatarShown ? 'ease-out' : '-translate-x-full ease-in',
				)}
			/>
		</div>
	)
}
