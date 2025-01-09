import { combine } from '@/utils/combine'
import type { ComponentPropsWithoutRef } from 'react'

type Props = {
	variant?: 'primary' | 'icon' | 'outline'
} & ComponentPropsWithoutRef<'button'>

export const Button = ({
	variant = 'primary',
	className,
	...restProps
}: Props) => {
	return (
		<button
			className={combine(
				'flex justify-center rounded-2xl transition disabled:opacity-50',
				variant === 'primary' &&
					'bg-accent px-2 text-black hover:bg-variant disabled:bg-variant sm:px-3',
				variant === 'icon' &&
					'text-accent hover:text-variant disabled:text-variant',
				variant === 'outline' &&
					'grow border-2 px-2 hover:border-black hover:text-black sm:px-3',
				className,
			)}
			{...restProps}
		/>
	)
}
