import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/tooltip'
import { combine } from '@/utils/combine'
import { useTranslations } from 'next-intl'
import type { ComponentPropsWithoutRef } from 'react'

type Props = {
	isLighted: boolean
	toggleIsLighted: () => void
} & ComponentPropsWithoutRef<'ul'>

export const Info = ({
	isLighted,
	toggleIsLighted,
	className,
	...restProps
}: Props) => {
	const t = useTranslations('HomePage')

	return (
		<ul
			className={combine(
				'flex flex-col items-center gap-4 sm:items-start',
				className,
			)}
			{...restProps}
		>
			<li>
				<Tooltip placement='left'>
					<TooltipTrigger asChild>
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
					</TooltipTrigger>
					<TooltipContent>{t('nicknameTitle')}</TooltipContent>
				</Tooltip>
			</li>
			<li>
				<Tooltip placement='left'>
					<TooltipTrigger asChild>
						<q>{t('slogan')}</q>
					</TooltipTrigger>
					<TooltipContent>{t('sloganTitle')}</TooltipContent>
				</Tooltip>
			</li>
			<li>
				<Tooltip placement='left'>
					<TooltipTrigger asChild>
						<h2>{t('about')}</h2>
					</TooltipTrigger>
					<TooltipContent>{t('aboutTitle')}</TooltipContent>
				</Tooltip>
			</li>
		</ul>
	)
}
