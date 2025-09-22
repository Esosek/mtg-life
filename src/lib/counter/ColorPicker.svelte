<script lang="ts">
  import { getContext } from 'svelte'

  import Colors from './counter-themes'

  const selectedColor = getContext<() => string>('selectedColor')
  const onColorChanged = getContext<(color: string) => void>('onColorChanged')
</script>

<div class="mt-6">
  <p class="text-neutral-200 text-sm font-bold">BACKGROUND</p>
  <ul class="flex justify-center gap-6 mt-2 mb-4">
    {#each Object.entries(Colors) as [name, color]}
      <li>
        <button
          aria-label={name}
          onclick={() => onColorChanged(color)}
          class={`${selectedColor() === color ? 'outline-3 outline-green-500' : ''} size-10 rounded-full overflow-clip`}
        >
          <div class="w-full h-full" style={`background-color: ${color}`}></div>
        </button>
      </li>
    {/each}
  </ul>
</div>
