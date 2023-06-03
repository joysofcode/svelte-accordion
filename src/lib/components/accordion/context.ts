import { writable } from 'svelte/store'
import { setContext, getContext } from 'svelte'
import type {
	AccordionOptions,
	ActiveId,
	ActiveIdContext,
	CollapseContext
} from './types'

export function setAccordionOptions({ collapse }: AccordionOptions) {
	const activeComponentId = writable<ActiveId>(null)
	setContext<CollapseContext>('collapse', collapse)
	setContext<ActiveIdContext>('active', activeComponentId)
}

export function getAccordionOptions() {
	const collapse = getContext<CollapseContext>('collapse')
	const activeComponentId = getContext<ActiveIdContext>('active')
	return { collapse, activeComponentId }
}
