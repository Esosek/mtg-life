<script lang="ts">
  import NoSleep from 'nosleep.js'
  import { fly } from 'svelte/transition'

  import checkIcon from '../../assets/icons/check-icon.svg'
  import Avatars from './avatars'
  import AvatarPicker from './AvatarPicker.svelte'
  import ColorPicker from './ColorPicker.svelte'

  const noSleep = new NoSleep()
  const randomAvatarIndex = Math.round(Math.random() * (Object.keys(Avatars).length - 1))
  const initialAvatar = Object.values(Avatars)[randomAvatarIndex]

  let selectedAvatar = $state(initialAvatar)
  let isPicking = $state(false)

  function togglePicking() {
    isPicking = !isPicking

    if (!noSleep.isEnabled) {
      noSleep.enable()
    }
  }

  function handleAvatarChanged(avatar: string) {
    selectedAvatar = avatar
  }
</script>

<div class="pointer-events-auto shadow-2xl size-16 rounded-full">
  <button onclick={togglePicking} class="size-16 rounded-full overflow-clip">
    <img src={selectedAvatar} alt="Player avatar" />
  </button>
  {#if isPicking}
    <div
      transition:fly={{ duration: 250, y: 400 }}
      class="absolute bottom-0 left-0 right-0 bg-neutral-700/90 rounded-t-2xl p-2 pt-8 z-10"
    >
      <button
        onclick={togglePicking}
        class="absolute -top-6 left-6 size-12 mx-auto bg-cyan-700 rounded-full flex justify-center items-center"
      >
        <img src={checkIcon} alt="Check icon" />
      </button>
      <AvatarPicker {selectedAvatar} onAvatarChanged={handleAvatarChanged} />
      <ColorPicker />
    </div>
  {/if}
</div>
