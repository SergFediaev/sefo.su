'use client'

import Image from 'next/image'
import { useState } from 'react'

export default function Home() {
	const [isMenuShown, setIsMenuShown] = useState(false)

	const toggleIsMenuShown = () => {
		setIsMenuShown(!isMenuShown)
	}

	return (
		<div className='text-neutral-50'>
			<main className='p-8 gap-8 flex justify-evenly items-center min-h-svh text-xl flex-wrap'>
				<ul className='flex flex-col gap-4'>
					<li>
						<h1 className='text-6xl sm:text-9xl font-bold break-all'>Sefo</h1>
					</li>
					<li>
						<q className='italic'>Shrouded in Light</q>
					</li>
					<li>
						<h2>Developer, melancholic, introvert</h2>
					</li>
				</ul>
				<button type='button' onClick={toggleIsMenuShown}>
					<Image
						src='/symbol.png'
						alt='Symbol'
						width={300}
						height={300}
						priority
						className='animate-pulse hover:animate-heartbeat'
					/>
				</button>
				<ul className='list-disc marker:text-accent flex flex-col gap-2'>
					<h3 className='text-3xl'>Projects:</h3>
					<li>
						<a href='https://steamcommunity.com/groups/Left4Legend'>
							Left 4 Legend
						</a>
					</li>
					<li>
						<a href='https://notasi.ru/javangelion'>Javangelion</a>
					</li>
					<li>
						<a href='https://notasi.ru/deci/en'>Deci</a>
					</li>
					<li>
						<a href='https://vk.com/drumgard'>Drumgard</a> <sup>(inactive)</sup>
					</li>
					<li>
						<a href='https://notasi.ru'>Notasi</a> <sup>(old)</sup>
					</li>
				</ul>
			</main>
			{isMenuShown && (
				<ul className='fixed left-8 right-8 bottom-8 bg-black bg-opacity-80 backdrop-blur rounded-3xl p-8 flex gap-8 w-fit mx-auto flex-wrap'>
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
					<li>More coming soon</li>
				</ul>
			)}
		</div>
	)
}
