<script>
    import Home from 'virtual:icons/material-symbols/other-houses-rounded'
    import Posts from 'virtual:icons/material-symbols/note-stack'
    import Playlists from 'virtual:icons/material-symbols/music-note-rounded'
    import Contact from 'virtual:icons/uim/comment-alt-message'
    let { data } = $props();
</script>

<div class="container">
    {#if data.type=="HOME"}<div class="bg home">
        <Home style="color: white; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 75%; height: 75%; object-fit: cover;" />
    </div>{/if}
    {#if data.type=="POSTS"}<div class="bg posts">
        <Posts style="color: white; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 75%; height: 75%; object-fit: cover;" />
    </div>{/if}
    {#if data.type=="PLAYLISTS"}<div class="bg playlists">
        <Playlists style="color: white; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 75%; height: 75%; object-fit: cover;" />
    </div>{/if}
    {#if data.type=="CONTACT"}<div class="bg contact">
        <Contact style="color: white; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 75%; height: 75%; object-fit: cover;" />
    </div>{/if}
</div>

<style>
.home {background: black;}
.posts {background: linear-gradient(135deg, #92c1ff 0%, #419aff 100%);}
.playlists {background: linear-gradient(135deg, #ff5f9f 0%, #fc466b 100%);}
.contact {background: linear-gradient(135deg, #32d74b 0%, #34c759 100%);}


.container{
    padding: 0;
}
.bg{
    border-radius: 16px;
    margin: 8px;
    box-sizing: border-box;
    width: calc(100% - 16px);
    padding-top: calc(100% - 16px);
    position: relative;
}
</style>