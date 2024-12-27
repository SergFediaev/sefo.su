import clsx, { type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export const combine = (...inputs: ClassValue[]) => twMerge(clsx(inputs))
