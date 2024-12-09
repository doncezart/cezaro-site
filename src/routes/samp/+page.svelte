<script>
  import images from '$lib/output.json';

  let gallery
  let initiator

  async function setGallery(e) {
      console.log(e)
      if (e.newState === 'open') {
          gallery.setAttribute('inert', "")
          initiator = document.querySelector(`[popovertarget="${e.target.id}"]`)
          console.log({initiator})
      } else {	
          gallery.removeAttribute('inert')
          await tick()
          initiator?.focus()
      }
  }
  function toggle(node) {
      node.addEventListener('toggle', setGallery)
      return () => {
          node.removeEventListener('toggle')
      }
  }
</script>

<div class="masonry-with-columns">
  {#each images as image}
    <div class="item">
      <button class="poptoggle" popovertarget={image.SourceFile}>
        <img src={image.SourceFile} alt="x" loading="lazy"/>
      </button>
    </div>
  {/each}
</div>

{#each images as image}
<div popover class="container" id={image.SourceFile} use:toggle>
    <img src={image.SourceFile} alt="GTA San Andreas Multiplayer | SAMP Romania Roleplay" loading="lazy"/>
</div>
{/each}

<style>
.masonry-with-columns {
  columns: 6 200px;
  column-gap: 1rem;
  margin: 1rem;
}
.masonry-with-columns div {
  width: 150px;
  color: white;
  display: inline-block;
  width: 100%;
  text-align: center;
  font-family: system-ui;
  font-weight: 900;
  font-size: 2rem;
}

img{
  width: 100%;
  height: 100%
}

.container {
  border: none;
  padding: 0;
  line-height: 0;
  max-width: 90vw;
  max-height: 90vh;
  margin: auto;
  overflow: hidden;
}
.container::backdrop {
  background-color: rgba(0,0,0,0.75);
}
:global(body):has(:global(:popover-open)) button[popovertarget] {
  pointer-events: none;
}
.poptoggle {
  border: none;
  margin: none;
  outline: none;
  padding: 0;
  background: none;
  width: 100%;
}
</style>