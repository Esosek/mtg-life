<script lang="ts">
  import Heading2 from '../common/Heading2.svelte'
  import LanguagePicker from '../common/LanguagePicker.svelte'
  import config from '../config.svelte'
  import setDetails from './set-details'
  import SetArchetypes from './SetArchetypes.svelte'
  import SetMechanics from './SetMechanics.svelte'
  import SetPicker from './SetPicker.svelte'

  let selectedSet = $state(Object.keys(setDetails)[0])
</script>

<div class="p-6 text-left">
  <LanguagePicker />
  <SetPicker bind:value={selectedSet} />
  <Heading2>{config.language === 'en' ? 'Mechanics' : 'Mechaniky'}</Heading2>
  <SetMechanics {selectedSet} />
  <Heading2>{config.language === 'en' ? 'Archetypes' : 'Archetypy'}</Heading2>
  <SetArchetypes {selectedSet} />
</div>
