<script lang="ts">
  import setDetails from './set-details'
  import SetMechanics from './SetMechanics.svelte'
  import SetPicker from './SetPicker.svelte'

  let selectedSet = $state(Object.keys(setDetails)[0])
</script>

<div class="p-6 text-left">
  <SetPicker bind:value={selectedSet} />
  <h2 class="font-medium text-4xl mt-8 mb-4">Mechanics</h2>
  <SetMechanics {selectedSet} />
</div>
