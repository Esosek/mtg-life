<script lang="ts">
  import { fade, fly } from 'svelte/transition'
  import setDetails from './set-details'

  type SetMechanicsProps = {
    selectedSet: string
  }

  const { selectedSet }: SetMechanicsProps = $props()
  const setData = $derived(setDetails[selectedSet])

  // svelte-ignore state_referenced_locally
  let isMechanicExpanded = $state<boolean[]>(new Array(setData.mechanics.length).fill(false))
</script>

{#each setData.mechanics as mechanic, index}
  <div class="mb-6">
    <h3 class="text-2xl my-4">
      <button onclick={() => (isMechanicExpanded[index] = !isMechanicExpanded[index])}>{mechanic.name}</button>
    </h3>
    {#if isMechanicExpanded[index]}
      <div in:fly={{ x: index % 2 != 0 ? 375 : -375 }} class="flex flex-col gap-4">
        <p>
          {mechanic.description}
        </p>
        {#each mechanic.examples as cardExample, index}
          <img src={cardExample} alt={`${mechanic.name} example card ${index + 1}`} class="rounded-2xl" />
        {/each}
      </div>
    {/if}
  </div>
{/each}
