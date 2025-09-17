<script lang="ts">
  type CounterProps = {
    life: number
    onIncrement: () => void
    onDecrement: () => void
  }
  const { life, onIncrement, onDecrement }: CounterProps = $props()
</script>

<div class="relative flex bg-green-800">
  <div class="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center text-9xl">
    {life}
  </div>
</div>
