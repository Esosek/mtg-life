<script lang="ts">
  import CounterPage from './lib/counter/CounterPage.svelte'
  import SetInfoPage from './lib/set-info/SetInfoPage.svelte'

  let isInfoOpened = $state(false)
</script>

<main class="relative max-w-sm text-center mx-auto h-lvh grid p-1 bg-neutral-900">
  {#if isInfoOpened}
    <SetInfoPage />
  {:else}
    <CounterPage
      onInfoOpened={() => {
        isInfoOpened = true
      }}
    />
  {/if}
</main>
