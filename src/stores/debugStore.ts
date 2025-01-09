import { create } from 'zustand'

type DebugState = {
	isDebug: boolean
	isMarkupShown: boolean
}

type DebugActions = {
	toggleIsDebug: () => void
	toggleIsMarkupShown: () => void
}

const initialDebug: DebugState = {
	isDebug: false,
	isMarkupShown: false,
}

export const debugStore = create<DebugState & DebugActions>(set => ({
	...initialDebug,
	toggleIsDebug: () =>
		set(state => {
			const isDebug = !state.isDebug

			return {
				isDebug,
				isMarkupShown: isDebug ? state.isMarkupShown : false,
			}
		}),
	toggleIsMarkupShown: () =>
		set(state => ({ isMarkupShown: !state.isMarkupShown })),
}))
