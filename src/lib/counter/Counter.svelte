<script lang="ts">
  import { setContext } from 'svelte'

  import skullIcon from '../../assets/skull-icon.svg'
  import Avatar from './Avatar.svelte'
  import CounterThemes from './counter-themes'

  type CounterProps = {
    life: number
    onIncrement: () => void
    onDecrement: () => void
  }
  const { life, ...props }: CounterProps = $props()

  const randomColorIndex = Math.round(Math.random() * (Object.values(CounterThemes).length - 1))
  const initialColor = Object.values(CounterThemes)[randomColorIndex]
  let selectedColor = $state(initialColor)

  let isAnimatingLife = $state(false)
  let lifeChanged = $state(0)

  let incrementBtn: HTMLButtonElement
  let decrementBtn: HTMLButtonElement

  setContext('selectedColor', () => selectedColor)
  setContext('onColorChanged', onColorChanged)

  function onIncrement() {
    props.onIncrement()

    lifeChanged += 1
    setLifeChanged()

    incrementBtn.classList.add('bg-neutral-600/30')
    setTimeout(() => {
      incrementBtn.classList.remove('bg-neutral-600/30')
    }, 100)

    if (!isAnimatingLife) {
      animateLife()
    }
  }

  function onDecrement() {
    props.onDecrement()

    lifeChanged -= 1
    setLifeChanged()

    decrementBtn.classList.add('bg-neutral-600/30')
    setTimeout(() => {
      decrementBtn.classList.remove('bg-neutral-600/30')
    }, 100)

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

  let timeout: number
  function setLifeChanged() {
    clearTimeout(timeout)
    timeout = setTimeout(() => {
      lifeChanged = 0
    }, 750)
  }

  function onColorChanged(color: string) {
    selectedColor = color
  }
</script>

<div
  style={`background-color: ${selectedColor}`}
  class="text-neutral-200 counter relative grid grid-cols-2 text-5xl rounded-4xl"
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
  <button
    bind:this={decrementBtn}
    class="text-left pl-6 transition-colors duration-100"
    disabled={life <= 0}
    onclick={onDecrement}
  >
    -
    {#if lifeChanged < 0}
      {Math.abs(lifeChanged)}
    {/if}
  </button>
  <button bind:this={incrementBtn} class="text-right pr-6 transition-colors duration-100" onclick={onIncrement}>
    +
    {#if lifeChanged > 0}
      {lifeChanged}
    {/if}
  </button>

  <div class="absolute bottom-0 left-0 right-0 pb-[5%] flex justify-center pointer-events-none">
    <Avatar />
  </div>
</div>

<style>
  .counter {
    touch-action: manipulation;
  }

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
