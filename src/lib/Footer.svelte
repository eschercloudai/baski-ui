<script>
    export let title;
</script>

<footer class="py-8">
    <div class="container mx-auto px-4">
        <div class="text-sm text-white-400">
            <p>© { new Date().getFullYear()} {title}. All rights reserved.</p>
        </div>
    </div>
</footer>

<style>
footer{
    background-color: var(--brand);
}
</style>