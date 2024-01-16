<script>
    import {page} from "$app/stores"
</script>

<nav class="bg-white border-b-2 border-zinc-400" id="navigation">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
            <a href="/" aria-current="{$page.url.pathname === '/'}" class="flex-shrink-0 text-white">
                <img src="/img/ecai.svg" style="max-height: 2.1em; width: auto; margin-right: 2em;" />
            </a>
        </div>
    </div>
</nav>