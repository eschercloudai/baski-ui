<script>
    import "../app.css";
    import { additionalTitle } from '$lib/store.js';
    import Footer from "$lib/Footer.svelte";
    import Nav from "$lib/Nav.svelte";
    const title = "Baski UI";
</script>

<svelte:head>
    <title>{title} - {$additionalTitle}</title>
</svelte:head>

<div class="min-h-screen flex flex-col">
    <Nav/>
    <main class="grow">
        <slot/>
    </main>
    <Footer {title}/>
</div>

