<script lang="ts">
	import { setAccordionOptions } from './context'

	// by default more than one accordion can be open
	export let collapse = false

	// the context API avoids passing data through components as props
	setAccordionOptions({ collapse })
</script>

<div class="accordion">
	<slot />
</div>

<style>
	.accordion {
		width: var(--accordion-width, 100%);
		padding: var(--accordion-padding, 1rem);
		color: var(--accordion-color, hsl(220 10% 98%));
		background-color: var(--accordion-background, hsl(220 10% 16%));
		border-radius: var(--accordion-radius, 4px);
		box-shadow: var(--accordion-shadow, 0px 1px 20px hsl(220 10% 8%));
	}
</style>
