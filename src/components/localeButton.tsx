import { Button } from '@/components/button'
import { setCookieLocale } from '@/utils/cookieLocale'
import { useLocale } from 'use-intl'

export const LocaleButton = () => {
	const locale = useLocale()

	const isEnglish = locale === 'en'
	const localeText = isEnglish ? 'Russian' : 'English'

	const toggleLocale = () => {
		void setCookieLocale(isEnglish ? 'ru' : 'en')
	}

	return (
		<Button
			onClick={toggleLocale}
			className='fixed top-4 right-4 z-10 shadow-black shadow-lg'
		>
			{localeText}
		</Button>
	)
}
