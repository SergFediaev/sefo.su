import { combine } from '@/utils/combine'
import { useTranslations } from 'next-intl'
import { type ComponentPropsWithoutRef, useState } from 'react'

export const Nickname = (props: ComponentPropsWithoutRef<'li'>) => {
	const [isLighted, setIsLighted] = useState(false)
	const t = useTranslations('HomePage')

	const toggleIsLighted = () => {
		setIsLighted(!isLighted)
	}

	return (
		<li title={t('nicknameTitle')} {...props}>
			<h1
				className={combine(
					'break-all font-bold text-8xl sm:text-9xl',
					isLighted && 'text-white',
				)}
			>
				<button type='button' onClick={toggleIsLighted}>
					<span
						className={combine(
							isLighted &&
								'[text-shadow:0_0_80px_green,0_0_30px_lime,0_0_6px_olive]',
						)}
					>
						{t('sef')}
					</span>
					<span className={combine(isLighted && 'animate-blink')}>
						{t('o')}
					</span>
				</button>
			</h1>
		</li>
	)
}
