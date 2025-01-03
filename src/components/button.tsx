import { combine } from '@/utils/combine'
import type { ComponentPropsWithoutRef } from 'react'

export const Button = ({
	className,
	...restProps
}: ComponentPropsWithoutRef<'button'>) => {
	return (
		<button
			className={combine(
				'rounded-lg bg-accent px-2 text-black transition hover:bg-variant disabled:bg-variant disabled:opacity-50',
				className,
			)}
			{...restProps}
		/>
	)
}
