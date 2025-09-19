<script lang="ts">
  import Counter from './lib/Counter.svelte'
  import ResetBtn from './lib/ResetBtn.svelte'

  let playerLives = $state([20, 20])

  function incrementLife(playerIndex: number) {
    playerLives[playerIndex] += 1
  }

  function decrementLife(playerIndex: number) {
    playerLives[playerIndex] -= 1
  }

  function reset() {
    playerLives = [20, 20]
  }
</script>

<main class="relative max-w-sm text-center mx-auto h-lvh grid p-1 bg-neutral-900">
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
</main>
