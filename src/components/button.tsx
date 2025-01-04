import { combine } from '@/utils/combine'
import type { ComponentPropsWithoutRef } from 'react'

type Props = {
	variant?: 'primary' | 'icon'
} & ComponentPropsWithoutRef<'button'>

export const Button = ({
	variant = 'primary',
	className,
	...restProps
}: Props) => {
	return (
		<button
			className={combine(
				'transition disabled:opacity-50',
				variant === 'primary' &&
					'rounded-lg bg-accent px-2 text-black hover:bg-variant disabled:bg-variant',
				variant === 'icon' && 'text-accent hover:text-variant',
				className,
			)}
			{...restProps}
		/>
	)
}
