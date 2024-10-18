<script>
    import { page } from '$app/stores';
</script>

<div class="container glass">
    <h3>{$page.status}: {$page.error.message}</h3>
    <p>The website is still under construction. The page you tried to access isn't yet built. Sorry for the inconvenience</p>
    <a href="/">Go Home</a>
</div>

<style>
    .container{
        padding: 1rem;
        text-align: center;
        border-radius: 16px;
        min-width: 20rem;
        margin: 1rem;
        margin-left: 50%;
        transform: translateX(-50%);
    }
    a{
        align-self: center;
        text-decoration: none;
        color: blue;
        font-family: 'ClashDisplay-Variable';
        font-weight: 500;
    }
    p{
        color: black;
        text-align: center;
        margin-bottom: 1rem;
        margin-top: 1rem;
    }
    h3{
        color: black;
        text-align: center;
        font-weight: 600;
    }
</style>