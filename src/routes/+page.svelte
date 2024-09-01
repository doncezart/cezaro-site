<script>
    import SocialCard from '$lib/components/SocialCard.svelte'
    import socialmedia from '$lib/social.json'
    import GridBackground from '$lib/components/GridBackground.svelte'
</script>
<GridBackground />

<div class="top">
    <h1 class="title">Cezar Gabriel</h1>
    <h2 class="subtitle">Someone from Romania</h2>
    <a href="mailto:tiniu@ceza.ro"><h2 class="subtitle">tiniu@ceza.ro</h2></a>
</div>
<div class="inside">
        <h3 class="grouptitle">Social Media</h3>
        <div class="group">
            <div class="profilecontainer">
                {#each Object.keys(socialmedia) as category}
                    <h2 class="profiletitle">{category}</h2>
                    <div class="profiles">
                        {#each socialmedia[category] as profile}
                            <a href={profile.url} data-umami-event={profile.url}><SocialCard data={profile}/></a>
                        {/each}
                    </div>
                {/each}
            </div>
        </div>
</div>

<style>
a{
    text-decoration: none;
    color: inherit;
}
.top{
    padding-top: 10rem;
    padding-bottom: 10rem;
    text-align: center;
}
.title{
    font-size: 64px;
    font-weight: 600;
    line-height: 64px;
}
.subtitle{
    font-size: 16px;
    font-weight: 500;
}

.inside{ /* Main container */
    text-align: center;
    display: flex;
    flex-direction: column;
    grid-gap: 24px;
    margin-left: auto;
    margin-right: auto;
}
.grouptitle{ /* The title of each group */
    font-size: 36px;
    line-height: 24px;
    font-weight: 550;
    text-align: left;
    padding-bottom: 24px;
    padding-left: 12px;
}
.group{ /* Container for each group of items (Example: Social Media, Websites, etc) */
    display: flex;
    flex-direction: row;
    gap: 12px;
    border: solid 1px #E4E4E7;
    background-color: white;
    padding: 12px;
    padding-top: 0;
    border-radius: 16px;
}
.profilecontainer { /* Container for each group of profiles + title, for flex purposes */
    width: 100%;
}
.profiletitle{ /* The title for each group of profiles */
    padding-top: 12px;
    padding-bottom: 12px;
    font-size: 18px;
    line-height: 12px;
    font-weight: 700;
    text-align: left;
}
.profiles{ /* Container for each subgroup of items inside the first group (Social Media) */
    display: flex;
    flex-direction: row;
    white-space: nowrap;
    overflow-x: auto;
    gap: 12px;
}

</style>