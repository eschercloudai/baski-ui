<script>
	import { additionalTitle } from '$lib/store.js';
	import { onMount } from 'svelte';

	export let title = 'Image data';

	onMount(() => {
		additionalTitle.set(title);
	});
</script>
