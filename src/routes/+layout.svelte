<script>
    import '@fortawesome/fontawesome-free/css/all.min.css'
    import '../buttons.css'
    import '../app.css'
    import '../clash-display.css'
    import NavBar from '$lib/components/NavBar.svelte'
    /**
     * @typedef {Object} Props
     * @property {import('svelte').Snippet} [children]
     */

    /** @type {Props} */
    let { children } = $props();
</script>

<svelte:head>
    <script defer src="https://analytics.ceza.ro/script.js" data-website-id="24c5bd27-2823-44b9-bc99-5037564d8cce"></script>
    <meta name="title" content="www.ceza.ro">
    <meta name="description" content="Cezar Gabriel's personal site - links, socials, articles and more!">
    <meta name="keywords" content="cezar, romania">
    <meta name="robots" content="index, follow">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta name="language" content="English">
</svelte:head>

<div class="slot">{@render children?.()}</div>
<NavBar/>

<style>
    .slot{
        margin-left: auto;
        margin-right: auto;
    }
</style>