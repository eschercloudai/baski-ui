<script>
    import axios from "axios";
    import Title from '$lib/Title.svelte';
    import Card from "$lib/Card.svelte";

    const endpoint = "http://localhost:8080/api/v1/images";

    let promise = load();

    async function load() {
        const response = await axios.get(endpoint);

        return response.data;
    }


</script>
<Title title="The place for image data!"></Title>

<div class="flex justify-center">
    <h1 class="text-7xl">Latest Images</h1>
</div>

<div class="flex justify-center my-12">
    <div class="w-8/12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">

        {#await promise}
            <h1 class="text-2xl">Loading Images...</h1>
        {:then images}
            {#each images as image}
                <Card
                        image_id={image.image_id}
                        image_name={image.image_name}
                        build_date={image.build_date}
                        k8s_version={image.k8s_version}
                        scan_status={image.scan_status}
                        test_status={image.test_status}
                ></Card>
            {/each}
        {/await}
    </div>
</div>
