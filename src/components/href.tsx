import { combine } from '@/utils/combine'
import type { ComponentPropsWithoutRef, ElementType } from 'react'

const DEFAULT_TYPE = 'a'

type Props<T extends ElementType = typeof DEFAULT_TYPE> = {
	as?: T
	variant?: 'regular' | 'secondary' | 'icon' | 'inversion'
} & ComponentPropsWithoutRef<T>

export const Href = <T extends ElementType = typeof DEFAULT_TYPE>({
	as,
	variant = 'regular',
	className,
	...restProps
}: Props<T>) => {
	const Component = as ?? DEFAULT_TYPE

	return (
		<Component
			className={combine(
				'inline-block align-middle',
				variant === 'secondary' && 'decoration-lime-600 hover:text-lime-600',
				variant === 'icon' && 'text-accent hover:text-variant',
				variant === 'inversion' &&
					'self-start decoration-white hover:text-black hover:decoration-black',
				className,
			)}
			{...restProps}
		/>
	)
}
