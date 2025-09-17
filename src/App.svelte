<script lang="ts">
  import Counter from './lib/Counter.svelte'

  const playerLives = $state([20, 20])

  function incrementLife(playerIndex: number) {
    playerLives[playerIndex] += 1
  }

  function decrementLife(playerIndex: number) {
    playerLives[playerIndex] -= 1
  }
</script>

<main class="max-w-sm text-center mx-auto h-lvh grid">
  <div class="rotate-180 grid">
    <Counter life={playerLives[0]} onIncrement={() => incrementLife(0)} onDecrement={() => decrementLife(0)} />
  </div>
  <Counter life={playerLives[1]} onIncrement={() => incrementLife(1)} onDecrement={() => decrementLife(1)} />
</main>
