<script>
	import Title from '$lib/Title.svelte';
	import Card from '$lib/Card.svelte';

	export let data;
</script>

<Title title="The place for image data!"></Title>

<div class="flex justify-center">
	<h1 class="text-7xl">Latest Images</h1>
</div>

<div class="flex justify-center my-12">
	<div class="w-8/12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
		{#each data.data as image}
			<Card
				image_id={image.image_id}
				image_name={image.image_name}
				build_date={image.build_date}
				k8s_version={image.k8s_version}
				scan_status={image.scan_status}
				test_status={image.test_status}
			></Card>
		{/each}
	</div>
</div>
