'use client'

import { combine } from '@/utils/combine'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

export default function Home() {
	const [isMenuNotShown, setIsMenuNotShown] = useState(true)
	const [isAvatarShown, setIsAvatarShown] = useState(false)
	const [isAvatarAnimating, setIsAvatarAnimating] = useState(false)
	const menu = useRef<HTMLUListElement>(null)
	const button = useRef<HTMLButtonElement>(null)

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
		<div className='text-neutral-50 container mx-auto'>
			<main className='p-8 flex items-center min-h-svh text-xl'>
				<div className='flex justify-evenly flex-grow flex-wrap gap-8'>
					<ul className='flex flex-col gap-4 items-center sm:items-start'>
						<li>
							<h1 className='text-9xl font-bold break-all'>Sefo</h1>
						</li>
						<li>
							<q>Embraced by Light</q>
						</li>
						<li>
							<h2>Developer, melancholic, introvert.</h2>
						</li>
					</ul>
					<button ref={button} type='button' onClick={toggleIsMenuShown}>
						<Image
							src='/logo.svg'
							alt='Logo'
							width={300}
							height={300}
							priority
							className='animate-pulse hover:animate-heartbeat'
						/>
					</button>
					<ul className='list-disc marker:text-accent flex flex-col gap-2'>
						<h3>Projects:</h3>
						<li>
							<a href='https://L4L.Sefo.su'>Left 4 Legend</a>
						</li>
						<li>
							<a href='https://Notasi.ru/javangelion'>Javangelion</a>
						</li>
						<li>
							<a href='https://Notasi.ru/deci/en'>Deci</a>
						</li>
						<li>
							<a href='https://vk.com/Drumgard'>Drumgard</a>{' '}
							<sup>(inactive)</sup>
						</li>
						<li>
							<a href='https://Notasi.ru'>Notasi</a> <sup>(old)</sup>
						</li>
					</ul>
				</div>
			</main>
			<ul
				ref={menu}
				className={combine(
					'fixed left-8 right-8 bottom-8 bg-black bg-opacity-80 backdrop-blur rounded-3xl p-8 flex gap-4 sm:gap-8 w-fit mx-auto flex-wrap duration-500',
					isMenuNotShown && 'opacity-0',
				)}
			>
				<li>
					<a href='mailto:SefoNotasi@gmail.com'>Email</a>
				</li>
				<li>
					<a href='https://t.me/SefoNotasi'>Telegram</a>
				</li>
				<li>
					<a href='/license.jpg'>Domain license</a>
				</li>
				<li>
					<a href='/cake.jpg'>The cake is NOT a lie</a>
				</li>
				<li>
					<button
						type='button'
						onClick={showAvatar}
						className='bg-accent hover:bg-variant transition text-black px-2 rounded-lg disabled:opacity-50 disabled:bg-variant'
						title='People are always asking me if I know Milandro Noshimo'
						disabled={isAvatarAnimating}
					>
						Toasty
					</button>
				</li>
				<li>More coming soon</li>
			</ul>
			<Image
				src='/avatar.png'
				alt='Avatar'
				width={400}
				height={600}
				className={combine(
					'drop-shadow-[0_0_10px_rgba(0,0,0,1)] fixed bottom-0 left-0 duration-1000',
					isAvatarShown ? 'ease-out' : '-translate-x-full ease-in',
				)}
			/>
		</div>
	)
}
