<script lang="ts">
  type CounterProps = {
    life: number
    onIncrement: () => void
    onDecrement: () => void
  }
  const { life, onIncrement, onDecrement }: CounterProps = $props()
</script>

<div class="relative grid grid-cols-2 bg-green-800 text-5xl">
  <div class="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center text-9xl pointer-events-none">
    {life}
  </div>
  <button class="text-left pl-6" onclick={onDecrement}>-</button>
  <button class="text-right pr-6" onclick={onIncrement}>+</button>
</div>
