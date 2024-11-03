<script>
    import Icon from '$lib/components/Icon.svelte'
    import socialmedia from '$lib/social.json'
</script>

<svelte:head>
    <title>Cezar Gabriel - Home</title>
</svelte:head>

<div style="background: url('/1920.webp') center center no-repeat; height: 100vh">
    <div class="container">
    {#each socialmedia as profile}
        <a href={profile.url} data-umami-event={profile.type}><Icon data={profile}/></a>
    {/each}
    </div>
</div>

<style>
a{
    text-decoration: none;
    color: inherit;
}
@media (max-width: 500px){
    .container{
        display: grid;
        grid-template-columns: minmax(0,1fr) minmax(0,1fr) minmax(0,1fr) minmax(0,1fr);
        gap: 1rem;
        padding: 1rem;
    }
}
@media (min-width: 501px){
    .container {
        height: calc(100vh - 7rem);
        display: grid;
        grid-auto-flow: column;
        grid-template-rows: repeat(auto-fill, minmax(64px, 1fr));
        width: fit-content;
        gap: 16px;
        row-gap: 32px;
        padding: 8px;
    }
}
</style>