<script lang="ts">
  import skullIcon from '../assets/skull-icon.svg'

  type CounterProps = {
    life: number
    onIncrement: () => void
    onDecrement: () => void
  }
  const { life, onIncrement, onDecrement }: CounterProps = $props()
</script>

<div class="relative grid grid-cols-2 bg-green-800 text-5xl">
  <div class="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center text-9xl pointer-events-none">
    {#if life <= 0}
      <img src={skullIcon} alt="Skull icon" class="size-30" />
    {:else}
      {life}
    {/if}
  </div>
  <button class="text-left pl-6" disabled={life <= 0} onclick={onDecrement}>-</button>
  <button class="text-right pr-6" onclick={onIncrement}>+</button>
</div>
