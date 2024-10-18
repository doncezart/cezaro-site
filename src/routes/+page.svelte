<script>
    import Icon from '$lib/components/Icon.svelte'
    import socialmedia from '$lib/social.json'
</script>

<div class="container">
{#each socialmedia as profile}
    <a href={profile.url} data-umami-event={profile.type}><Icon data={profile}/></a>
{/each}
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
        padding-left: 0.5rem
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