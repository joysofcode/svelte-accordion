import type { Writable } from 'svelte/store'

export type AccordionOptions = { colapse: boolean }
export type ActiveId = string | null
export type ColapseContext = boolean
export type ActiveIdContext = Writable<ActiveId>
