import type en from './messages/en.json'

type Messages = typeof en

declare global {
	// noinspection JSUnusedGlobalSymbols
	interface IntlMessages extends Messages {}
}
