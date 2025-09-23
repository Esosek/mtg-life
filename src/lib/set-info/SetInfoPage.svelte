<script lang="ts">
  import Heading2 from '../common/Heading2.svelte'
  import setDetails from './set-details'
  import SetMechanics from './SetMechanics.svelte'
  import SetPicker from './SetPicker.svelte'

  let selectedSet = $state(Object.keys(setDetails)[0])
</script>

<div class="p-6 text-left">
  <SetPicker bind:value={selectedSet} />
  <Heading2>Mechanics</Heading2>
  <SetMechanics {selectedSet} />
</div>
