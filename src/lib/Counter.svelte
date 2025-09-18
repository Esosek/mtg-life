<script lang="ts">
  import { setContext } from 'svelte'

  import skullIcon from '../assets/skull-icon.svg'
  import Avatar from './Avatar.svelte'
  import CounterThemes from './counter-themes'

  type CounterProps = {
    life: number
    onIncrement: () => void
    onDecrement: () => void
  }
  const { life, ...props }: CounterProps = $props()
  let selectedColor = $state(CounterThemes.White)
  let isAnimatingLife = $state(false)

  setContext('selectedColor', () => selectedColor)
  setContext('onColorChanged', onColorChanged)

  function onIncrement() {
    props.onIncrement()
    if (!isAnimatingLife) {
      animateLife()
    }
  }

  function onDecrement() {
    props.onDecrement()
    if (!isAnimatingLife) {
      animateLife()
    }
  }

  function animateLife() {
    isAnimatingLife = true
    setTimeout(() => {
      isAnimatingLife = false
    }, 150)
  }

  function onColorChanged(color: string) {
    selectedColor = color
  }
</script>

<div
  style={`background-color: ${selectedColor}`}
  class={`${selectedColor === CounterThemes.White ? 'text-neutral-900' : 'text-neutral-200'} relative grid grid-cols-2 text-5xl `}
>
  <!-- Life -->
  <div class="absolute top-0 bottom-0 left-0 right-0 flex items-center justify-center text-9xl pointer-events-none">
    {#if life <= 0}
      <img src={skullIcon} alt="Skull icon" class="skull size-30" />
    {:else}
      <span class={isAnimatingLife ? 'scale' : ''}>
        {life}
      </span>
    {/if}
  </div>
  <!-- Controls  -->
  <button class="text-left pl-6" disabled={life <= 0} onclick={onDecrement}>-</button>
  <button class="text-right pr-6" onclick={onIncrement}>+</button>

  <div class="absolute bottom-0 left-0 right-0 pb-[5%] flex justify-center pointer-events-none">
    <Avatar />
  </div>
</div>

<style>
  .scale {
    animation: scale-bounce 150ms linear forwards;
  }

  .skull {
    animation: spin 3s linear infinite;
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }

  @keyframes scale-bounce {
    0%,
    100% {
      transform: scale(1);
    }
    50% {
      transform: scale(0.95);
    }
  }
</style>
