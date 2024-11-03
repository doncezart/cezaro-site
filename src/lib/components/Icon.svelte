<script>
    import Instagram from 'virtual:icons/bxl/instagram'
    import Mail from 'virtual:icons/raphael/mail'
    import Youtube from 'virtual:icons/bxl/youtube'
    import Tiktok from 'virtual:icons/bxl/tiktok'
    import Tumblr from 'virtual:icons/bxl/tumblr'
    import Facebook from 'virtual:icons/bxl/facebook'
    import Steam from 'virtual:icons/bxl/steam'
    import Github from 'virtual:icons/bxl/github'
    import Pinterest from 'virtual:icons/bxl/pinterest'
    import Snapchat from 'virtual:icons/bxl/snapchat'
    import Discord from 'virtual:icons/bxl/discord-alt'
    import Telegram from 'virtual:icons/bxl/telegram'
    import Vsco from 'virtual:icons/simple-icons/vsco'
    import Doncezart from 'virtual:icons/ri/box-1-line'
    let { data } = $props();
</script>

<div class="container">
    {#if data.type=="INSTAGRAM"}<div class="bg instagram">
        <Instagram style="color: white; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 75%; height: 75%; object-fit: cover;" />
    </div>{/if}
    {#if data.type=="MAIL"}<div class="bg mail">
        <Mail style="color: white; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 75%; height: 75%; object-fit: cover;" />
    </div>{/if}
    {#if data.type=="YOUTUBE"}<div class="bg youtube">
        <Youtube style="color: white; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 75%; height: 75%; object-fit: cover;" />
    </div>{/if} 
    {#if data.type=="TIKTOK"}<div class="bg tiktok">
        <Tiktok style="color: white; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 75%; height: 75%; object-fit: cover;" />
    </div>{/if}
    {#if data.type=="TUMBLR"}<div class="bg tumblr">
        <Tumblr style="color: white; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 75%; height: 75%; object-fit: cover;" />
    </div>{/if}
    {#if data.type=="FACEBOOK"}<div class="bg facebook">
        <Facebook style="color: white; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 75%; height: 75%; object-fit: cover;" />
    </div>{/if}
    {#if data.type=="STEAM"}<div class="bg steam">
        <Steam style="color: white; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 75%; height: 75%; object-fit: cover;" />
    </div>{/if}
    {#if data.type=="GITHUB"}<div class="bg github">
        <Github style="color: white; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 75%; height: 75%; object-fit: cover;" />
    </div>{/if}
    {#if data.type=="PINTEREST"}<div class="bg pinterest">
        <Pinterest style="color: white; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 75%; height: 75%; object-fit: cover;" />
    </div>{/if}
    {#if data.type=="SNAPCHAT"}<div class="bg snapchat">
        <Snapchat style="color: white; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 75%; height: 75%; object-fit: cover;" />
    </div>{/if}
    {#if data.type=="DISCORD"}<div class="bg discord">
        <Discord style="color: white; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 75%; height: 75%; object-fit: cover;" />
    </div>{/if}
    {#if data.type=="TELEGRAM"}<div class="bg telegram">
        <Telegram style="color: white; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 75%; height: 75%; object-fit: cover;" />
    </div>{/if}
    {#if data.type=="VSCO"}<div class="bg vsco">
        <Vsco style="color: white; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 75%; height: 75%; object-fit: cover;" />
    </div>{/if}
    {#if data.type=="DONCEZART"}<div class="bg doncezart">
        <Doncezart style="color: white; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 75%; height: 75%; object-fit: cover;" />
    </div>{/if}
    <h1>{data.title}</h1>
</div>

<style>
.instagram {background: linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%);}
.mail {background: linear-gradient(135deg, #0072ff 0%,#00c6ff 100%);}
.youtube {background: linear-gradient(135deg, #ff0000 0%, #c4302b 100%);}
.tiktok {background: black}
.tumblr {background: linear-gradient(135deg, #36465d 0%, #001935 100%);}
.facebook {background: linear-gradient(135deg, #1877f2 0%, #0f91f3 100%);}
.steam {background: linear-gradient(135deg, #0b1622 0%, #1b2838 100%);}
.github {background: linear-gradient(135deg, #333333 0%, #6e5494 100%);}
.pinterest {background: linear-gradient(135deg, #e60023 0%, #d11919 100%);}
.snapchat {background: linear-gradient(135deg, #ffd900 0%, #ffc800 100%);}
.discord {background: linear-gradient(135deg, #5865F2 0%, #404EED 100%);}
.telegram {background: linear-gradient(135deg, #37aee2 0%, #1e96c8 100%);}
.vsco {background: black}
.doncezart {background: black}

.container{
    width: 64px;  /* Parent is responsive */
    height: auto;
    box-sizing: border-box;
}

.bg{
    border-radius: 16px;
    margin: 8px;
    box-sizing: border-box;
    width: calc(100% - 16px);
    padding-top: calc(100% - 16px);
    position: relative;
}
h1{
    font-size: 12px;
    text-align: center;
    color: white;
    font-weight: 500;
}
@media (max-width: 500px){
        .container{
            width: 100%
        }
        h1{
            font-size: 10px;
        }
    }
</style>