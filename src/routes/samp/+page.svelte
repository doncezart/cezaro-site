<script>
  import images from '$lib/output.json';
  import { tick } from 'svelte'
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


<section id="images-wrapper" bind:this={gallery}>
{#each images as image}
  <button class="poptoggle" popovertarget={image.SourceFile}>
    <img src={image.SourceFile} alt="GTA San Andreas Multiplayer | SAMP Romania Roleplay" loading="lazy" width={image.ImageWidth} height={image.ImageHeight}/>
  </button>
{/each}
</section>

{#each images as image}
<div popover class="container" id={image.SourceFile} use:toggle>
    <img style="width: 100%" src={image.SourceFile} alt="GTA San Andreas Multiplayer | SAMP Romania Roleplay" loading="lazy"/>
</div>
{/each}

<style>
.container {
  border: 0;
  padding: 0;
  max-width: 90%;
  line-height: 0;
}
.container::backdrop {
  background-color: rgba(0,0,0,0.75);
}
:global(body):has(:popover-open) button[popovertarget] {
  pointer-events: none;
}
#images-wrapper {    
  line-height: 1;       
  -webkit-column-count: 5;    
  -webkit-column-gap: 3px;    
  -moz-column-count: 5;
  -moz-column-gap: 3px;
  column-count: 5;
  column-gap: 3px;
}
#images-wrapper img {    
  width: 100% !important;    
  height: auto !important;
}
#images-wrapper{    
  display:inline-block;    
  margin-right: auto;    
  margin-left: auto;  
}
.poptoggle {
  border: none;
  margin: none;
  outline: none;
  padding: 0;
  background: none;
  width: 100%;
}
@media (max-width: 1200px) {
  #images-wrapper {
  -moz-column-count:    4;
  -webkit-column-count: 4;
  column-count:         4;
  }
}
@media (max-width: 1000px) {
  #images-wrapper {
  -moz-column-count:    3;
  -webkit-column-count: 3;
  column-count:         3;
  }
}
@media (max-width: 800px) {
  #images-wrapper {
  -moz-column-count:    2;
  -webkit-column-count: 2;
  column-count:         2;
  }
}
@media (max-width: 400px) {
  #images-wrapper {
  -moz-column-count:    1;
  -webkit-column-count: 1;
  column-count:        1;
  }
}
</style>