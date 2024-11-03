<script>
  import images from '$lib/output.json';
  import { tick } from 'svelte'
  import { MasonryGrid } from "@egjs/svelte-grid";

  const gap = 10;
  const defaultDirection = "end";
  const align = "masonry";
  const column = 3;
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

<MasonryGrid
  class="container"
  {defaultDirection}
  {gap}
  {align}
  {column}
>
{#each images as image}
<div class="item">
  <button class="poptoggle" popovertarget={image.SourceFile}>
    <img src={image.SourceFile} alt="GTA San Andreas Multiplayer | SAMP Romania Roleplay" loading="lazy"/>
  </button>
</div>
{/each}
</MasonryGrid>



{#each images as image}
<div popover class="container" id={image.SourceFile} use:toggle>
    <img src={image.SourceFile} alt="GTA San Andreas Multiplayer | SAMP Romania Roleplay" loading="lazy"/>
</div>
{/each}

<style>
.container {
  border: solid 1px red;
  padding: 0;
  line-height: 0;
  width: 100%;
}
.container::backdrop {
  background-color: rgba(0,0,0,0.75);
}
:global(body):has(:global(:popover-open)) button[popovertarget] {
  pointer-events: none;
}
img{
  width: 350px;
  height: auto
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