<script>
    import '@fortawesome/fontawesome-free/css/all.min.css'
    import '../buttons.css'
    import '../app.css'
    import '../clash-display.css'
</script>

<svelte:head>
    <script defer src="https://analytics.ceza.ro/script.js" data-website-id="24c5bd27-2823-44b9-bc99-5037564d8cce"></script>
</svelte:head>

<div class="slot"><slot/></div>

<style>
    .slot{
        max-width: 90rem;
        padding: 12px;
        margin-left: auto;
        margin-right: auto;
    }
</style>