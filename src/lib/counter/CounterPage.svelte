<script lang="ts">
  import Counter from './Counter.svelte'
  import ResetBtn from './ResetBtn.svelte'
  import infoIcon from '../../assets/icons/info-icon.svg'

  type CounterPageProps = {
    onInfoOpened: () => void
  }

  const { onInfoOpened }: CounterPageProps = $props()

  let playerLives = $state([20, 20])
  let hasUserInteracted = $state(false)

  function incrementLife(playerIndex: number) {
    playerLives[playerIndex] += 1
    hasUserInteracted = true
  }

  function decrementLife(playerIndex: number) {
    playerLives[playerIndex] -= 1
    hasUserInteracted = true
  }

  function reset() {
    playerLives = [20, 20]
    hasUserInteracted = false
  }
</script>

<div class="rotate-180 grid">
  <Counter life={playerLives[0]} onIncrement={() => incrementLife(0)} onDecrement={() => decrementLife(0)} />
</div>
<Counter life={playerLives[1]} onIncrement={() => incrementLife(1)} onDecrement={() => decrementLife(1)} />
<div class="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center pointer-events-none">
  <div class="h-[0.3rem] bg-neutral-900 w-full"></div>
  <div class="absolute size-14 flex justify-center items-center bg-neutral-900/95 rounded-full">
    <ResetBtn onClick={reset} />
  </div>
</div>
{#if !hasUserInteracted}
  <button class="absolute bottom-6 right-8 size-8" onclick={onInfoOpened}>
    <img src={infoIcon} alt="Info icon" class="h-full w-full" />
  </button>
{/if}
