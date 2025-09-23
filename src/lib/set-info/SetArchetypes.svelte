<script lang="ts">
  import { fly } from 'svelte/transition'
  import setDetails from './set-details'
  import chevronIcon from '../../assets/icons/chevron-icon.svg'
  import { convertTextToSymbols } from '../utils/symbol-converter'
  import config from '../config.svelte'

  type SetArchetypesProps = {
    selectedSet: string
  }

  const { selectedSet }: SetArchetypesProps = $props()
  const setData = $derived(setDetails[selectedSet])

  // svelte-ignore state_referenced_locally
  let isArchetypeExpanded = $state<boolean[]>(new Array(setData.archetypes.length).fill(false))
</script>

{#each setData.archetypes as archetype, index}
  <div class="mb-6">
    <h3 class="text-2xl my-4 flex justify-between">
      <button
        onclick={() => (isArchetypeExpanded[index] = !isArchetypeExpanded[index])}
        class="w-full text-left flex justify-between items-center"
      >
        <div class="flex gap-2">
          <div class="flex items-center gap-1">
            {@html convertTextToSymbols(archetype.colors, '1.5rem')}
          </div>
          {archetype.name[config.language] ?? archetype.name.en}
        </div>
        <img
          src={chevronIcon}
          alt="Chevron icon"
          class={`${isArchetypeExpanded[index] ? '-rotate-90' : ''} size-6 transition-transform duration-300`}
        /></button
      >
    </h3>
    {#if isArchetypeExpanded[index]}
      <div transition:fly={{ x: -375, duration: 300 }} class="flex flex-col gap-4">
        <p class="font-bold uppercase text-sm">
          {archetype.keywords[config.language]?.join(', ') ?? archetype.keywords.en.join(', ')}
        </p>
        <p>
          {@html convertTextToSymbols(archetype.description[config.language] ?? archetype.description.en)}
        </p>
        {#each archetype.signatureCards as cardExample, index}
          <img
            src={cardExample}
            alt={`${archetype.name} example card ${index + 1}`}
            class="rounded-2xl max-w-xs mx-auto"
            width="320"
            height="445"
          />
        {/each}
      </div>
    {/if}
  </div>
{/each}
