<script lang="ts">
	import { Accordion, AccordionItem } from '$lib/components/accordion'

	const items = [
		{ title: 'Item 1', content: 'Content 1' },
		{ title: 'Item 2', content: 'Content 2' },
		{ title: 'Item 3', content: 'Content 3' },
		{ title: 'Item 4', content: 'Content 4' }
	]
</script>

<Accordion collapse --accordion-width="60ch">
	{#each items as item, i}
		<AccordionItem open={i === 0}>
			<svelte:fragment slot="title">{item.title}</svelte:fragment>
			<svelte:fragment slot="content">{item.content}</svelte:fragment>
		</AccordionItem>
	{/each}
</Accordion>
