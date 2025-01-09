'use client'

import { Button } from '@/components/button'
import { Href } from '@/components/href'
import { Info } from '@/components/info'
import { LocaleButton } from '@/components/localeButton'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/tooltip'
import { debugStore } from '@/stores/debugStore'
import { combine } from '@/utils/combine'
import {
	Bug,
	Cake,
	HeartPulse,
	Mail,
	ScrollText,
	Send,
	User,
} from 'lucide-react'
import { nanoid } from 'nanoid'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import {
	type ComponentPropsWithoutRef,
	useEffect,
	useRef,
	useState,
} from 'react'

export const Content = ({
	className,
	...restProps
}: ComponentPropsWithoutRef<'div'>) => {
	const [isMenuNotShown, setIsMenuNotShown] = useState(true)
	const [isLighted, setIsLighted] = useState(false)
	const [isHeartbeat, setIsHeartbeat] = useState(false)
	const [isCharacterShown, setIsCharacterShown] = useState(false)
	const [isCharacterAnimating, setIsCharacterAnimating] = useState(false)
	const [isError, setIsError] = useState(false)
	const menu = useRef<HTMLUListElement>(null)
	const button = useRef<HTMLButtonElement>(null)
	const t = useTranslations('HomePage')
	const { isDebug, isMarkupShown, toggleIsDebug, toggleIsMarkupShown } =
		debugStore()

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

	const characterTitle = isCharacterAnimating ? undefined : t('characterTitle')
	const debugTitle = t(isDebug ? 'disableDebugMode' : 'enableDebugMode')
	const markupText = t(isMarkupShown ? 'hideMarkup' : 'showMarkup')

	const toggleIsMenuNotShown = () => {
		setIsMenuNotShown(!isMenuNotShown)
	}

	const toggleIsLighted = () => {
		setIsLighted(!isLighted)
	}

	const toggleIsHeartbeat = () => {
		setIsHeartbeat(!isHeartbeat)
	}

	const showCharacter = () => {
		setIsCharacterAnimating(true)
		setIsCharacterShown(true)

		setTimeout(() => {
			setIsCharacterShown(false)
		}, 2_000)

		setTimeout(() => {
			setIsCharacterAnimating(false)
		}, 4_000)
	}

	const throwError = () => {
		setIsError(true)
	}

	if (isError) {
		throw Error(`${t('debugError')}${nanoid()}`)
	}

	return (
		<div className={combine('container mx-auto', className)} {...restProps}>
			<LocaleButton />
			<main className='flex min-h-svh items-center p-8 text-xl'>
				<div className='flex flex-grow flex-wrap justify-evenly gap-8'>
					<Info isLighted={isLighted} toggleIsLighted={toggleIsLighted} />
					<button ref={button} type='button' onClick={toggleIsMenuNotShown}>
						<Tooltip>
							<TooltipTrigger asChild>
								<Image
									src='/logo.svg'
									alt={t('logo')}
									width={300}
									height={300}
									priority
									className={combine(
										'hover:animate-pulse',
										isHeartbeat && 'animate-heartbeat',
									)}
								/>
							</TooltipTrigger>
							<TooltipContent>{t('logoTitle')}</TooltipContent>
						</Tooltip>
					</button>
					<ul className='flex list-disc flex-col gap-2 marker:text-accent'>
						<h3>{t('projects')}</h3>
						<li>
							<Href as={Link} href='https://L4L.su'>
								{t('left4Legend')}
							</Href>
						</li>
						<li>
							<Href as={Link} href='https://Notasi.ru/javangelion'>
								{t('javangelion')}
							</Href>
						</li>
						<li>
							<Href as={Link} href='https://Notasi.ru/deci/en'>
								{t('deci')}
							</Href>
						</li>
						<li>
							<Href as={Link} href='https://vk.com/Drumgard'>
								{t('drumgard')}
							</Href>{' '}
							<sup>{t('inactive')}</sup>
						</li>
						<li>
							<Href as={Link} href='https://Notasi.ru'>
								{t('notasi')}
							</Href>{' '}
							<sup>{t('old')}</sup>
						</li>
					</ul>
				</div>
			</main>
			<ul
				ref={menu}
				className={combine(
					'fixed right-8 bottom-8 left-8 mx-auto flex max-w-lg flex-wrap justify-between gap-4 rounded-3xl bg-black bg-opacity-80 p-8 backdrop-blur duration-500 sm:justify-evenly sm:gap-8',
					isMenuNotShown && 'pointer-events-none opacity-0',
				)}
			>
				<li>
					<Tooltip>
						<TooltipTrigger asChild>
							<Href as={Link} variant='icon' href='mailto:SefoNotasi@gmail.com'>
								<Mail />
							</Href>
						</TooltipTrigger>
						<TooltipContent>{t('email')}</TooltipContent>
					</Tooltip>
				</li>
				<li>
					<Tooltip>
						<TooltipTrigger asChild>
							<Href as={Link} variant='icon' href='https://t.me/SefoNotasi'>
								<Send />
							</Href>
						</TooltipTrigger>
						<TooltipContent>{t('telegram')}</TooltipContent>
					</Tooltip>
				</li>
				<li>
					<Tooltip>
						<TooltipTrigger asChild>
							<Href as={Link} variant='icon' href='/license.jpg'>
								<ScrollText />
							</Href>
						</TooltipTrigger>
						<TooltipContent>{t('domainLicense')}</TooltipContent>
					</Tooltip>
				</li>
				<li>
					<Tooltip>
						<TooltipTrigger asChild>
							<Href as={Link} variant='icon' href='/cake.jpg'>
								<Cake />
							</Href>
						</TooltipTrigger>
						<TooltipContent>{t('cake')}</TooltipContent>
					</Tooltip>
				</li>
				<li>
					<Tooltip>
						<TooltipTrigger asChild>
							<Button
								variant='icon'
								onClick={showCharacter}
								disabled={isCharacterAnimating}
							>
								<User />
							</Button>
						</TooltipTrigger>
						<TooltipContent>{characterTitle}</TooltipContent>
					</Tooltip>
				</li>
				<li>
					<Tooltip>
						<TooltipTrigger asChild>
							<Button variant='icon' onClick={toggleIsHeartbeat}>
								<HeartPulse
									className={combine(
										isHeartbeat && 'fill-accent hover:fill-variant',
									)}
								/>
							</Button>
						</TooltipTrigger>
						<TooltipContent>
							<Image
								src='/symbol.png'
								width={100}
								height={100}
								alt={t('symbol')}
								className='my-2 w-12 rotate-45 drop-shadow-[0_0_1px_rgba(0,0,0,1)]'
							/>
						</TooltipContent>
					</Tooltip>
				</li>
				<li>
					<Tooltip>
						<TooltipTrigger asChild>
							<Button variant='icon' onClick={toggleIsDebug}>
								<Bug
									className={combine(
										isDebug && 'fill-accent hover:fill-variant',
									)}
								/>
							</Button>
						</TooltipTrigger>
						<TooltipContent>{debugTitle}</TooltipContent>
					</Tooltip>
				</li>
				{isDebug ? (
					<>
						<li>
							<Href as={Link} href='/not-found'>
								{t('404')}
							</Href>
						</li>
						<li>
							<Button onClick={throwError}>{t('error')}</Button>
						</li>
						<li>
							<Button onClick={toggleIsMarkupShown}>{markupText}</Button>
						</li>
					</>
				) : (
					<li>{t('comingSoon')}</li>
				)}
			</ul>
			<Image
				src='/character.png'
				alt={t('character')}
				width={400}
				height={600}
				className={combine(
					'fixed bottom-0 left-0 max-h-svh max-w-fit drop-shadow-[0_0_10px_rgba(0,0,0,1)] duration-1000',
					isCharacterShown
						? 'translate-x-0 ease-out'
						: '-translate-x-full ease-in',
				)}
			/>
		</div>
	)
}
