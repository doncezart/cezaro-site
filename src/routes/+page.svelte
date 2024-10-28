<script>
    import Icon from '$lib/components/Icon.svelte'
    import socialmedia from '$lib/social.json'
</script>

<svelte:head>
  <style>
    body {

    }
  </style>
</svelte:head>

<div class="container">
{#each socialmedia as profile}
    <a href={profile.url} data-umami-event={profile.type}><Icon data={profile}/></a>
{/each}
</div>

<style>
:global(body) {
    background-color: black;
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    @media (min-width: 2560px){
        background-image: url("$lib/wallpaper/3840.webp");
    };
    @media (max-width: 2560px){
        background-image: url("$lib/wallpaper/2560.webp");
    };
    @media (max-width: 1921px){
        background-image: url("$lib/wallpaper/1920.webp");
    }
}
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