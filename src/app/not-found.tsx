import { NotFound } from '@/components/notFound'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Not found',
}

export default function NotFoundPage() {
	return (
		<div className='min-h-svh bg-white text-black'>
			<NotFound />
		</div>
	)
}
