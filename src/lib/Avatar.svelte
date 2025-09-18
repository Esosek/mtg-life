<script lang="ts">
  import Avatars from './avatars'

  const randomAvatarIndex = Math.round(Math.random() * (Object.keys(Avatars).length - 1))
  const initialAvatar = Object.values(Avatars)[randomAvatarIndex]

  let selectedAvatar = $state(initialAvatar)

  function onClick() {
    const index = Math.round(Math.random() * (Object.keys(Avatars).length - 1))
    selectedAvatar = Object.values(Avatars)[index]
  }
</script>

<button onclick={onClick} class="size-16 pointer-events-auto rounded-full overflow-clip border-5 border-neutral-200">
  <img src={selectedAvatar} alt="Player avatar" />
</button>
