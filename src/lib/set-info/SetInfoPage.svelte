<script lang="ts">
  import setDetails from './set-details'
  import SetPicker from './SetPicker.svelte'

  let selectedSet = $state(Object.keys(setDetails)[0])
</script>

<div class="p-6 text-left">
  <SetPicker bind:value={selectedSet} />
</div>
