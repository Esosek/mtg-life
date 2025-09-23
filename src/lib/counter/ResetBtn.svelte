<script lang="ts">
  import resetIcon from '../../assets/icons/reset-icon.svg'

  type ResetBtnProps = {
    onClick: () => void
  }

  const { onClick }: ResetBtnProps = $props()
</script>

<button
  onclick={onClick}
  class="size-11 bg-stone-700 rounded-full flex justify-center items-center p-2 pointer-events-auto translate-y-[-4px]"
>
  <img src={resetIcon} alt="Reset icon" />
</button>

<style>
  button {
    filter: drop-shadow(0px 4px 0px var(--color-stone-500));
  }
</style>
