<script lang="ts">
  import { fly } from 'svelte/transition'
  import setDetails from './set-details'
  import chevronIcon from '../../assets/chevron-left.svg'
  import { convertTextToSymbols } from '../utils/symbol-converter'

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
    <h3 class="text-2xl my-4 flex justify-between">
      <button
        onclick={() => (isMechanicExpanded[index] = !isMechanicExpanded[index])}
        class="w-full text-left flex justify-between items-center"
      >
        {mechanic.name}
        <img
          src={chevronIcon}
          alt="Chevron icon"
          class={`${isMechanicExpanded[index] ? '-rotate-90' : ''} size-6 transition-transform duration-300`}
        /></button
      >
    </h3>
    {#if isMechanicExpanded[index]}
      <div transition:fly={{ x: -375, duration: 300 }} class="flex flex-col gap-4">
        <p>
          {@html convertTextToSymbols(mechanic.description)}
        </p>
        {#each mechanic.examples as cardExample, index}
          <img src={cardExample} alt={`${mechanic.name} example card ${index + 1}`} class="rounded-2xl" />
        {/each}
      </div>
    {/if}
  </div>
{/each}
