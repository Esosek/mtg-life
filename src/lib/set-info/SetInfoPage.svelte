<script lang="ts">
  import { setContext } from 'svelte'
  import Heading2 from '../common/Heading2.svelte'
  import setDetails from './set-details'
  import SetMechanics from './SetMechanics.svelte'
  import SetPicker from './SetPicker.svelte'

  let selectedSet = $state(Object.keys(setDetails)[0])
  let language = $state<'en' | 'cs'>('en')
  setContext('lang', () => language)
</script>

<div class="p-6 text-left">
  <SetPicker bind:value={selectedSet} />
  <Heading2>Mechanics</Heading2>
  <SetMechanics {selectedSet} />
</div>
