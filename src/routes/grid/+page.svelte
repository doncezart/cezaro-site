<script>
    import { MasonryInfiniteGrid } from "@egjs/svelte-infinitegrid";
  
    export let data;
    var images = data.images

    let items = getItems(0, 10);
  
    function getItems(nextGroupKey, count) {
      const nextItems = [];
  
      for (let i = 0; i < count; ++i) {
        const nextKey = nextGroupKey * count + i;
  
        nextItems.push({ groupKey: nextGroupKey, key: nextKey });
      }
      return nextItems;
    }
</script>

<div class="yes">
<MasonryInfiniteGrid
    class="container"
    gap={5}
    columnSize={300}
    

    {items}
    on:requestAppend={({ detail: e }) => {
        const nextGroupKey = (+e.groupKey || 0) + 1;

        items = [...items, ...getItems(nextGroupKey, 10)];
    }}
    let:visibleItems
>

{#each images as item (item.key)}
  <div class="item">
      <div class="thumbnail">
          <img src={item} width=300 loading="lazy" alt="SAMP"/>
      </div>
  </div>
{/each}
</MasonryInfiniteGrid>
</div>

<style>
    .yes {
        border: solid red;
    }
</style>