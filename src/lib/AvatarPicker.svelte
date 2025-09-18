<script lang="ts">
  import Avatars from './avatars'

  type AvatarPickerType = {
    selectedAvatar: string
    onAvatarChanged: (avatar: string) => void
  }

  const { selectedAvatar, onAvatarChanged }: AvatarPickerType = $props()
</script>

<div>
  <p class="text-neutral-200 text-sm font-bold">AVATAR</p>
  <ul class="flex justify-center gap-6 mt-2 mb-4">
    {#each Object.values(Avatars) as avatar}
      <li>
        <button
          onclick={() => onAvatarChanged(avatar)}
          class={`${selectedAvatar == avatar ? 'outline-3 outline-green-500' : ''} size-10 rounded-full overflow-clip`}
        >
          <img src={avatar} alt={`${avatar} avatar`} />
        </button>
      </li>
    {/each}
  </ul>
</div>
