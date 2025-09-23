<script lang="ts">
  import setDetails from './set-details'

  type SetPickerProps = {
    value: string
  }

  let { value = $bindable() }: SetPickerProps = $props()
</script>

<div class="text-center">
  <select name="set-picker" id="set-picker" bind:value class="bg-neutral-700 py-3 px-4 w-full rounded-4xl text-xl">
    {#each Object.keys(setDetails) as setName}
      <option value={setName}>{setName}</option>
    {/each}
  </select>
</div>
