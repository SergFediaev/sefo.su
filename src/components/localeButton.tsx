import { Button } from '@/components/button'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/tooltip'
import { setCookieLocale } from '@/utils/cookieLocale'
import { useTranslations } from 'next-intl'
import { useLocale } from 'use-intl'

export const LocaleButton = () => {
	const locale = useLocale()
	const t = useTranslations('HomePage')

	const isEnglish = locale === 'en'
	const localeText = isEnglish ? 'Russian' : 'English'

	const toggleLocale = () => {
		void setCookieLocale(isEnglish ? 'ru' : 'en')
	}

	return (
		<Tooltip placement='left'>
			<TooltipTrigger asChild>
				<Button
					onClick={toggleLocale}
					className='fixed top-4 right-4 z-10 shadow-black shadow-lg'
				>
					{localeText}
				</Button>
			</TooltipTrigger>
			<TooltipContent>{t('switchLang')}</TooltipContent>
		</Tooltip>
	)
}
