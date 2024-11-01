<script>
    import NavIcon from '$lib/components/NavIcon.svelte'
    import navlinks from '$lib/nav.json'
</script>

<div class="container">

    <div class="navlinks glass">
        {#each navlinks as navlink}
        <a href={navlink.url} data-umami-event={navlink.type} aria-label={navlink.type}><NavIcon data={navlink}/></a>
        {/each}
    </div>
</div>

<style>
    .container{
        position: fixed;
        bottom: 1rem;
        width: 100%;
    }
    .navlinks{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        gap: 0;
        border-radius: 16px;
        padding: 0;
        margin-left: 50%;
        transform: translateX(-50%);
    }
    @media (min-width: 501px){
        .navlinks{
            width: 20rem;
        }
    }
    @media (max-width: 500px){
        .navlinks{
            width: calc(100% - 32px)
        }
    }
</style>